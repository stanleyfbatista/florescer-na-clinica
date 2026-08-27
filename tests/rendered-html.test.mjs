import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the complete Florescer sales journey", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<title>Florescer na Clínica/);
  assert.match(html, /Você não precisa escolher entre viver bem e ganhar bem da psicologia/);
  assert.match(html, /A rotina que não cabe mais/);
  assert.match(html, /Filosofia Jardim/);
  assert.match(html, /Conheça Beatriz/);
  assert.match(html, /O que você vai encontrar dentro/);
  assert.match(html, /Resultados que florescem/);
  assert.match(html, /Para quem é/);
  assert.match(html, /R\$ 797/);
  assert.match(html, /Perguntas frequentes/);
  assert.match(html, /Dê o próximo passo/);
});

test("renders the new static sales page with the confirmed offer", async () => {
  const response = await render("/nova");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /Você pode <em>viver bem da clínica<\/em> e ser dona do seu próprio tempo/);
  assert.match(html, /A raiz do problema não é a sua agenda/);
  assert.match(html, /12x de/);
  assert.match(html, /R\$ 61,74/);
  assert.match(html, /R\$ 597,00 à vista/);
  assert.match(html, /R\$ 797,00/);
  assert.match(html, /Você tem 7 dias para conhecer a formação com tranquilidade/);
  assert.match(html, /1 ano de acesso/);
  assert.match(html, /https:\/\/pay\.kiwify\.com\.br\/iXQjQT1/);
  assert.match(html, /nova-marquee/);
  assert.match(html, /payment-methods/);
  assert.match(html, /mockup-florescer-transparente\.png/);
  assert.match(html, /nova-guarantee-section/);
  assert.match(html, /href="#provas"/);
  assert.match(html, /href="#mentora"/);
  assert.match(html, /href="#publico"/);
  assert.match(html, /depoimento-florescer-01\.jpeg/);
  assert.match(html, /depoimento-florescer-04\.jpeg/);
  assert.match(html, /depoimento-florescer-05\.jpeg/);
  assert.doesNotMatch(html, /Depoimento em vídeo/);
  assert.match(html, /três unidades e mais de 100 profissionais atendendo/);
  assert.doesNotMatch(html, /Biografia em preparação/);
  assert.doesNotMatch(html, /—/);
});

test("keeps pending facts explicit and avoids invented claims", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /Conteúdo em preparação/);
  assert.match(html, /Condições de pagamento serão informadas/);
  assert.doesNotMatch(html, /7 dias de garantia|acesso vitalício|12x de/);
});

test("ships accessible FAQ controls and removes the starter preview", async () => {
  const faq = await readFile(new URL("../app/components/FaqItem.tsx", import.meta.url), "utf8");
  assert.match(faq, /aria-expanded/);
  assert.match(faq, /aria-controls/);
  assert.match(faq, /onClick/);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
