**English** | [Português (Brasil)](./README.pt-BR.md)

<p align="center">
  <a href="https://wppconnect.io/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://wppconnect-team.github.io/brand/wppconnect-dark.png" />
      <img src="https://wppconnect-team.github.io/brand/wppconnect-light.png" alt="WPPConnect" width="220" height="121" />
    </picture>
  </a>
</p>

# Baileys

Use the WhatsApp Web protocol from TypeScript over WebSockets.

A WPPConnect Team fork in the WPPConnect ecosystem. Original project credits and license are preserved.

[Getting started](#getting-started) | [Documentation](#documentation) | [Contributing](#contributing) | [Support WPPConnect](#support-the-project)

[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](./LICENSE) [![npm version](https://img.shields.io/npm/v/baileys)](https://www.npmjs.com/package/baileys) [![CI](https://github.com/wppconnect-team/baileys/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/wppconnect-team/baileys/actions/workflows/build.yml) [![Open Collective](https://img.shields.io/badge/Open%20Collective-WPPConnect-blue)](https://opencollective.com/wppconnect)

## Overview

For developers who need a socket client without a browser. This is the WPPConnect Team integration fork of [WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys); upstream authorship, MIT terms and support channels remain in place. The source manifest is named `baileys`, currently on a 7.0.0 release-candidate line. Registry releases belong to upstream and do not automatically include this fork's changes.

## Features

- Multi-device authentication and typed connection/message events.
- Text/media messages, groups, contacts, presence and app-state operations.

## Getting started

Requires Node.js **>=20** and Corepack with Yarn **4.9.2**. Use source checkout to exercise this fork:

```sh
git clone https://github.com/wppconnect-team/baileys.git
cd baileys
corepack enable
yarn install --immutable
yarn build
yarn example
```

[Example/example.ts](Example/example.ts) covers authentication, credential saving and message events. Follow its pairing prompts using a dedicated account. Version 7 introduced breaking changes; read the [migration guide](https://baileys.wiki/migration/v7) before adapting older examples. The old `@whiskeysockets/baileys` snippets in the retained guide are historical upstream examples.

## Configuration

Persist auth keys and credentials securely and register `creds.update` to save changes. The example auth helper is a development starting point; design production storage deliberately. Check [SECURITY.md](SECURITY.md), especially credential/log handling. Do not use this project for spam, stalkerware or practices prohibited by its [Code of Conduct](CODE_OF_CONDUCT.md).

## Documentation

- [Upstream guide (in progress)](https://baileys.wiki/)
- [Migration guide](https://baileys.wiki/migration/v7)
- [Repository example](./Example/example.ts)
- [Retained technical details and acknowledgments](documentation/readme-reference.md)

## WPPConnect ecosystem

| Project | Purpose | When to use it |
| --- | --- | --- |
| [WPPConnect](https://github.com/wppconnect-team/wppconnect) | Control WhatsApp Web from Node.js applications. | Embed automation in a Node.js application. |
| [WPPConnect Server Go](https://github.com/wppconnect-team/wppconnect-server-go) | Run a browser-free WhatsApp HTTP API built with Go and whatsmeow. | Evaluate a Go HTTP API and documented migration coverage. |

## Support the project

Upstream funding beneficiaries remain [purpshell](https://github.com/sponsors/purpshell), [jlucaso1](https://github.com/sponsors/jlucaso1), [vinikjkkj](https://github.com/sponsors/vinikjkkj) and [SheIITear](https://github.com/sponsors/SheIITear), as recorded in [.github/FUNDING.yml](.github/FUNDING.yml). The original [sponsor page](https://purpshell.dev/sponsor) and separate [paid consultation page](https://purpshell.dev/book) are preserved; the sponsor link redirects to GitHub Sponsors and the consultation link requires GitHub sign-in. Voluntary support for WPPConnect below funds this fork's ecosystem maintenance, not upstream commercial support.

WPPConnect is maintained by an open-source community. Your support helps fund maintenance, infrastructure, documentation, and the people working on the ecosystem.

If WPPConnect helps your project or business, consider making a one-time contribution or becoming a recurring supporter.

**[Support WPPConnect on Open Collective](https://opencollective.com/wppconnect)**

Contributions are voluntary. See the official page for current financial information. You can also help with code, tests, documentation, translations and well-described issue reports.

## Contributing

Contributions of code, tests, examples, documentation and translations are welcome. For larger changes, discuss the approach in an issue first. Include the project/runtime versions, a minimal reproduction and sanitized logs when reporting a problem. Update both `README.md` and `README.pt-BR.md` in the same change when installation, configuration, features, examples, licensing or funding changes.

Read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

Read [AGENTS.md](AGENTS.md).

After installing the development dependencies, use the repository checks relevant to your change:

```sh
yarn lint
yarn test
yarn build
```

Account-dependent examples and tests require separate validation with an authorized test account. Never attach credentials or session files to an issue.

Disclose AI assistance and human review in PRs as required by the Code of Conduct.

## Community and support

Use [repository issues](https://github.com/wppconnect-team/baileys/issues) for reproducible bugs and feature proposals. For usage questions, join the community through the official channels:

- [Discord](https://discord.gg/JU5JGGKGNG)
- [Telegram](https://t.me/wppconnect)
- [YouTube](https://www.youtube.com/c/wppconnect)

Upstream discussion: [WhiskeySockets Discord](https://discord.gg/WeJM5FP9GG). Report missing wiki content in [baileys.wiki-site](https://github.com/WhiskeySockets/baileys.wiki-site/issues). For vulnerabilities follow [SECURITY.md](SECURITY.md) privately.

This project is independent and is not affiliated with or endorsed by WhatsApp or Meta. Follow applicable terms and obtain authorization for account and messaging operations.

### Acknowledgments

Thanks to [pokearaujo](https://github.com/pokearaujo/multidevice), [Sigalor](https://github.com/sigalor/whatsapp-web-reveng) and [Rhymen](https://github.com/Rhymen/go-whatsapp) for the protocol observations and implementations credited by upstream.

## License

[MIT License (MIT)](./LICENSE).

Copyright (c) 2026 Rajeh Taher/WhiskeySockets.

The original legal document and existing copyright notices are preserved. Third-party components retain their own terms.
