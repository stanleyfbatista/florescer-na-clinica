import assert from "node:assert/strict";
import { access, cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = path.join(root, "dist", "client");
const deployDir = path.join(root, "deploy");
const productionOrigin = "https://www.beatrizjardim.com.br";

await rm(deployDir, { recursive: true, force: true });
await mkdir(deployDir, { recursive: true });
await cp(clientDir, deployDir, { recursive: true });
await rm(path.join(deployDir, ".vite"), { recursive: true, force: true });

const workerUrl = pathToFileURL(path.join(root, "dist", "server", "index.js"));
workerUrl.searchParams.set("static-export", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request(`${productionOrigin}/nova`, {
    headers: { accept: "text/html", host: "www.beatrizjardim.com.br", "x-forwarded-host": "www.beatrizjardim.com.br", "x-forwarded-proto": "https" },
  }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

assert.equal(response.status, 200, `A página retornou HTTP ${response.status}`);
let html = await response.text();

html = html
  .replace(/<link\b[^>]*\brel=["']modulepreload["'][^>]*\/?\s*>/gi, "")
  .replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (script, attributes, body) => {
    const isRuntime = /\btype=["']module["']/i.test(attributes) || /\bsrc=["']\/assets\/[^"']+\.js/i.test(attributes) || body.includes("__VINEXT_") || /import\(["']\/assets\//.test(body);
    return isRuntime ? "" : script;
  });

const stylesheetPattern = /<link\b(?=[^>]*\brel=["']stylesheet["'])[^>]*\bhref=["']([^"']+\.css)["'][^>]*\/?\s*>/gi;
for (const stylesheet of [...html.matchAll(stylesheetPattern)]) {
  const href = stylesheet[1];
  const css = (await readFile(path.join(clientDir, href.replace(/^\//, "")), "utf8")).replace(/<\/style/gi, "<\\/style");
  html = html.replace(stylesheet[0], `<style data-inline-source="${href}">${css}</style>`);
}

const behavior = `<script>
document.documentElement.style.scrollBehavior="smooth";
const revealItems=document.querySelectorAll("[data-reveal]");
if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:"0px 0px -40px"});revealItems.forEach(item=>observer.observe(item));}else{revealItems.forEach(item=>item.classList.add("is-visible"));}
</script>`;
html = html.replace("</body>", `${behavior}</body>`);

for (const expected of ["Você pode <em>viver bem da clínica</em>", "Florescer na Clínica", "R$ 597,00 à vista", "Beatriz Jardim"]) {
  assert.ok(html.includes(expected), `Conteúdo ausente: ${expected}`);
}
assert.doesNotMatch(html, /Site not found|codex-preview|__VINEXT_|modulepreload/i);

await writeFile(path.join(deployDir, "index.html"), html, "utf8");
const novaDir = path.join(deployDir, "nova");
await mkdir(novaDir, { recursive: true });
await writeFile(path.join(novaDir, "index.html"), html, "utf8");

await writeFile(path.join(deployDir, ".htaccess"), `DirectoryIndex index.html
Options -Indexes
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>
`, "utf8");

const references = new Set([...html.matchAll(/(?:src|href)=["'](\/(?!\/|#)[^"'#?]+)[^"']*["']/g)].map((match) => match[1]));
for (const reference of references) await access(path.join(deployDir, reference.replace(/^\//, "")));

console.log(`Exportação estática concluída: ${deployDir}`);
console.log(`Arquivos locais validados: ${references.size}`);
