# Florescer na Clínica

Página de vendas da formação **Florescer na Clínica**, de Beatriz Jardim.

## Desenvolvimento

```bash
npm install
npm run dev
```

A versão em desenvolvimento está na rota `/nova`.

## Validação

```bash
npm test
```

## Exportação para o cPanel

```bash
npm run export:static
```

O comando gera a pasta `deploy/`, pronta para publicação em
`www.beatrizjardim.com.br`. A página é publicada na raiz e também em `/nova/`.

## Publicação pela Turbo Cloud

O arquivo `.cpanel.yml` copia o conteúdo de `deploy/` para `public_html`.

1. No cPanel, abra **Git Version Control** e clone este repositório.
2. Em **Manage > Pull or Deploy**, clique em **Update from Remote**.
3. Clique em **Deploy HEAD Commit**.

Antes do primeiro deploy, configure um certificado SSL válido para o domínio.
