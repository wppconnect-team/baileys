[English](./README.md) | **Português (Brasil)**

<p align="center">
  <a href="https://wppconnect.io/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://wppconnect-team.github.io/brand/wppconnect-dark.png" />
      <img src="https://wppconnect-team.github.io/brand/wppconnect-light.png" alt="WPPConnect" width="220" height="121" />
    </picture>
  </a>
</p>

# Baileys

Use o protocolo WhatsApp Web em TypeScript por WebSockets.

Um fork da WPPConnect Team no ecossistema WPPConnect. Os créditos e a licença do projeto original são preservados.

[Primeiros passos](#primeiros-passos) | [Documentação](#documentação) | [Como contribuir](#como-contribuir) | [Apoie a WPPConnect](#apoie-o-projeto)

[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](./LICENSE) [![npm version](https://img.shields.io/npm/v/baileys)](https://www.npmjs.com/package/baileys) [![CI](https://github.com/wppconnect-team/baileys/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/wppconnect-team/baileys/actions/workflows/build.yml) [![Open Collective](https://img.shields.io/badge/Open%20Collective-WPPConnect-blue)](https://opencollective.com/wppconnect)

## Visão geral

Para desenvolvedores que precisam de um cliente socket sem navegador. Este é o fork de integração da WPPConnect Team de [WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys); autoria, termos MIT e canais de apoio do upstream são preservados. O manifest dos fontes usa o nome `baileys`, atualmente na linha candidata a lançamento 7.0.0. Versões do registro pertencem ao upstream e não incluem automaticamente mudanças deste fork.

## Funcionalidades

- Autenticação multidispositivo e eventos tipados de conexão/mensagem.
- Mensagens de texto/mídia, grupos, contatos, presença e operações de app-state.

## Primeiros passos

Exige Node.js **>=20** e Corepack com Yarn **4.9.2**. Use os fontes para exercitar este fork:

```sh
git clone https://github.com/wppconnect-team/baileys.git
cd baileys
corepack enable
yarn install --immutable
yarn build
yarn example
```

[Example/example.ts](Example/example.ts) cobre autenticação, persistência de credenciais e eventos de mensagem. Siga as instruções de pareamento com uma conta dedicada. A versão 7 introduziu mudanças incompatíveis; leia o [guia de migração](https://baileys.wiki/migration/v7) antes de adaptar exemplos antigos. Os trechos com `@whiskeysockets/baileys` no guia preservado são exemplos históricos do upstream.

## Configuração

Persista chaves e credenciais com segurança e registre `creds.update` para salvar alterações. O helper de autenticação do exemplo é um ponto de partida para desenvolvimento; projete o armazenamento de produção com cuidado. Consulte [SECURITY.md](SECURITY.md), especialmente sobre credenciais e logs. Não use o projeto para spam, vigilância abusiva ou práticas proibidas pelo [Código de Conduta](CODE_OF_CONDUCT.md).

## Documentação

- [Guia do upstream (em desenvolvimento)](https://baileys.wiki/)
- [Guia de migração](https://baileys.wiki/migration/v7)
- [Exemplo do repositório](./Example/example.ts)
- [Detalhes técnicos e agradecimentos preservados](documentation/readme-reference.md)

## Ecossistema WPPConnect

| Projeto | Finalidade | Quando usar |
| --- | --- | --- |
| [WPPConnect](https://github.com/wppconnect-team/wppconnect) | Controle o WhatsApp Web em aplicações Node.js. | Incorporar automação a uma aplicação Node.js. |
| [WPPConnect Server Go](https://github.com/wppconnect-team/wppconnect-server-go) | Execute uma API HTTP do WhatsApp sem navegador, feita com Go e whatsmeow. | Avaliar uma API HTTP Go e a cobertura documentada de migração. |

## Apoie o projeto

Os beneficiários de apoio do upstream continuam sendo [purpshell](https://github.com/sponsors/purpshell), [jlucaso1](https://github.com/sponsors/jlucaso1), [vinikjkkj](https://github.com/sponsors/vinikjkkj) e [SheIITear](https://github.com/sponsors/SheIITear), conforme [.github/FUNDING.yml](.github/FUNDING.yml). As páginas originais de [apoio](https://purpshell.dev/sponsor) e de [consultoria paga](https://purpshell.dev/book) foram preservadas; o link de apoio redireciona ao GitHub Sponsors e o de consultoria exige login no GitHub. O apoio voluntário à WPPConnect abaixo financia a manutenção deste fork no ecossistema, sem substituir suporte comercial do upstream.

A WPPConnect é mantida por uma comunidade de código aberto. Seu apoio ajuda a financiar a manutenção, a infraestrutura, a documentação e o trabalho das pessoas que desenvolvem o ecossistema.

Se a WPPConnect ajuda seu projeto ou sua empresa, considere fazer uma contribuição pontual ou apoiar de forma recorrente.

**[Apoie a WPPConnect no Open Collective](https://opencollective.com/wppconnect)**

As contribuições são voluntárias. Consulte a página oficial para acompanhar as informações financeiras atuais. Você também pode ajudar com código, testes, documentação, traduções e relatos de problemas bem descritos.

## Como contribuir

Contribuições de código, testes, exemplos, documentação e traduções são bem-vindas. Para mudanças maiores, discuta a proposta em uma issue primeiro. Ao relatar um problema, informe as versões do projeto/runtime, uma reprodução mínima e logs sem dados sensíveis. Atualize `README.md` e `README.pt-BR.md` na mesma alteração quando mudar instalação, configuração, funcionalidades, exemplos, licença ou arrecadação.

Leia [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

Leia [AGENTS.md](AGENTS.md).

Após instalar as dependências de desenvolvimento, use as verificações pertinentes à sua alteração:

```sh
yarn lint
yarn test
yarn build
```

Exemplos e testes que dependem de conta exigem validação separada com uma conta de teste autorizada. Nunca anexe credenciais ou arquivos de sessão a uma issue.

Informe assistência por IA e revisão humana nos PRs conforme o Código de Conduta.

## Comunidade e suporte

Use as [issues do repositório](https://github.com/wppconnect-team/baileys/issues) para bugs reproduzíveis e propostas de funcionalidades. Para dúvidas de uso, participe pelos canais oficiais:

- [Discord](https://discord.gg/JU5JGGKGNG)
- [Telegram](https://t.me/wppconnect)
- [YouTube](https://www.youtube.com/c/wppconnect)

Discussões do upstream: [Discord WhiskeySockets](https://discord.gg/WeJM5FP9GG). Relate conteúdo ausente da wiki em [baileys.wiki-site](https://github.com/WhiskeySockets/baileys.wiki-site/issues). Para vulnerabilidades siga [SECURITY.md](SECURITY.md) em particular.

Este projeto é independente e não é afiliado nem endossado pelo WhatsApp ou pela Meta. Siga os termos aplicáveis e obtenha autorização para operações de conta e mensagens.

### Agradecimentos

Agradecemos a [pokearaujo](https://github.com/pokearaujo/multidevice), [Sigalor](https://github.com/sigalor/whatsapp-web-reveng) e [Rhymen](https://github.com/Rhymen/go-whatsapp) pelas observações e implementações do protocolo creditadas pelo upstream.

## Licença

[MIT License (MIT)](./LICENSE).

Copyright (c) 2026 Rajeh Taher/WhiskeySockets.

O documento jurídico original e os avisos de autoria existentes são preservados. Componentes de terceiros mantêm seus próprios termos.
