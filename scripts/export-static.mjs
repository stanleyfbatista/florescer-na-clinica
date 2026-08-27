import assert from "node:assert/strict";
import { access, cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = path.join(root, "dist", "client");
const deployDir = path.join(root, "deploy");
const productionOrigin = "https://www.beatrizjardim.com.br";
const coursePath = "/florescer-na-clinica";
const courseDir = path.join(deployDir, "florescer-na-clinica");

await rm(deployDir, { recursive: true, force: true });
await mkdir(courseDir, { recursive: true });
await cp(clientDir, courseDir, { recursive: true });
await rm(path.join(courseDir, ".vite"), { recursive: true, force: true });

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
html = html
  .replace(/((?:src|href)=)(["'])\/(?!\/)/g, `$1$2${coursePath}/`)
  .replace(/url\((["']?)\/(?!\/)/g, `url($1${coursePath}/`);

for (const expected of ["Você pode <em>viver bem da clínica</em>", "Florescer na Clínica", "R$ 597,00 à vista", "Beatriz Jardim"]) {
  assert.ok(html.includes(expected), `Conteúdo ausente: ${expected}`);
}
assert.doesNotMatch(html, /Site not found|codex-preview|__VINEXT_|modulepreload/i);

await writeFile(path.join(courseDir, "index.html"), html, "utf8");

await writeFile(path.join(courseDir, ".htaccess"), `DirectoryIndex index.html
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

await writeFile(path.join(deployDir, "index.html"), `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Beatriz Jardim</title><meta name="robots" content="noindex"><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f7f3ed;color:#3a4a2f;font-family:Georgia,serif;text-align:center}main{padding:32px}h1{font-size:clamp(2.8rem,8vw,6rem);font-weight:500;margin:0 0 12px}p{font-family:Arial,sans-serif;color:#68655e}</style></head><body><main><h1>Beatriz Jardim</h1><p>Um novo espaço está florescendo.</p></main></body></html>`, "utf8");

await writeFile(path.join(deployDir, ".htaccess"), `DirectoryIndex index.html
Options -Indexes
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`, "utf8");

const references = new Set([...html.matchAll(/(?:src|href)=["'](\/(?!\/|#)[^"'#?]+)[^"']*["']/g)].map((match) => match[1]));
for (const reference of references) await access(path.join(deployDir, reference.replace(/^\//, "")));

console.log(`Exportação estática concluída: ${deployDir}`);
console.log(`Página do curso: ${productionOrigin}${coursePath}`);
console.log(`Arquivos locais validados: ${references.size}`);
