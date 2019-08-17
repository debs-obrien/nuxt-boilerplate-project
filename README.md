# Vue Enterprise Boilerplate

> This is an ever-evolving, very opinionated architecture and dev environment for new Nuxt projects using [Nuxt 2](https://nuxtjs.org/). This is inspired from (and most of the content taken from) the amazing Chris Fritz's [Vue Enterprise Boilerplate Project](https://github.com/chrisvfritz/vue-enterprise-boilerplate). Thanks Chris
>
> This is for now just a work in progress and is nowhere near finished but the idea is that you can clone/download it and play around it with. I will try to constantly add to it so that it has more and more features that one might come across when building a Nuxt project. Have fun and feel free to reach out or submit a pull request if you see anything that needs to be added or fixed.

## Features

- [**Thorough documentation**](#documentation): Written with the same care as Vue's core docs to quickly train new team members and consolidate knowledge.
- [**Guaranteed consistency**](docs/linting.md): Opinionated linting for Vue, JavaScript/JSON, SCSS, and Markdown, integrated into Visual Studio Code and run against staged files on pre-commit.
- [**First-class tests**](docs/tests.md): Practice test-driven development with both unit and end-to-end tests. Unit tests with Jest live as first-class citizens alongside your source files, while Cypress provides reliable end-to-end tests in an intuitive GUI for development. - coming soon
- [**Speedy development**](docs/development.md): [configurable generators](docs/development.md#generators)so your productivity will skyrocket.

## Getting started

```bash
# 1. Clone the repository.
git clone https://github.com/debs-obrien/nuxt-boilerplate-project.git my-new-project

# 2. Enter your newly-cloned folder.
cd my-new-project

# 3. Install dependencies. Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install
yarn

# 4. Read the documentation linked below for "Setup and development".
```

## Documentation

This project includes a `docs` folder with more details on:

- [Architecture](docs/architecture.md)
- [Components](docs/components.md)
- [Setup and development](docs/development.md)
- [Docs](docs/docs.md)
- [i18n](docs/i18n.md)
- [images](docs/images.md)
- [layouts](docs/layouts.md)
- [nuxt config](docs/nuxt.config.md)
- [package.json](docs/package.json.md)
- [pages](docs/pages.md)
- [performance](docs/performance.md)
- [plugins](docs/plugins.md)
- [pwa](docs/pwa.md)
- [Languages and technologies](docs/tech.md)
- [Tests and mocking the API](docs/tests.md)
- [Linting and formatting](docs/linting.md)
- [Editor integration](docs/editors.md)
- [Building and deploying to production](docs/production.md)
- [Troubleshooting](docs/troubleshooting.md)

## FAQ

**Why would I use this boilerplate instead of generating a new project with [Nuxt](https://nuxtjs.org/) directly?**

Nuxt is like a really smart personal assistant, immediately making you more productive by taking care of many concerns _for you_. This boilerplate is more of a personal coach, aiming to educate and empower users to essentially configure their _own_ framework, ideally suited to their app and team.

This boilerplate aims to educate and empower users to configure these defaults to ideally suit their specific app and team. Call it your playground for playing around in and testing things out then choose what you want and add it to your own project.
