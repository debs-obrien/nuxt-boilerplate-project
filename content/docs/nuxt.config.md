---
title: nuxt.config.js
---

## Mode

We are working in universal mode so that we can get static site that will later act like a single page application

## Meta

The meta data is for our PWA where we can ad the name and description and author. If we don't have anything here then the name will be taken from the package.json. Check out the offical docs for more information on the [Nuxt PWA module](https://pwa.nuxtjs.org/).

## Head

The head containsa all headers for our page such as the language attributes, the meta name and content. Nuxt uses vue meta so for more infomation please see the [vue meta docs](https://vue-meta.nuxtjs.org/api/#metainfo-properties).

## Router Links

Class links for the router can be customized here.

```js
router: {
    linkExactActiveClass: 'exact-active-link',
  },
```

## Automatic generate of Dynamic routes

Nuxt comes with a crawler installed that will crawl all your pages and generate your dynamic routes based on those links

To exclude files that you do not want to be generated you can do so by adding the exclude option

```js
generate: {
   exclude: [regex expression that includes a route ],
}
```

if you want to use '404.html' instead of the default '200.html' set the fallback option. This is also useful if hositng on Netlify and have any pages that will fallback to SPA mode. Add this will allow the pages to be refreshed without giving the Netlify 404 page.

```js
generate: {
  fallback: '404.html
}
```

## Global CSS

For adding any css globally you can add here. We have added the main.scss file which imports the Tailwind base.

```js
  css: ['@/assets/scss/main.scss'],
```

## Plugins

All plugins that we want to add can be registered here. Remember to use ssr:false if you want no server side rendering for the specified plugin.

```js
  plugins: [
    { src: '~plugins/vue-carousel', ssr: false },
    '~/plugins/lazy-load-images.js',
  ],
```

## Modules

Here we can register any modules we are using. In the example below we are using the plugin nuxt-i18n as an array and we also pass in the i18n which we have registered at the top. This will add everthing we have exported from this file. We could just add all the config here but it would get a bit messy and out of control therefore it is best to have it as separte module.

```js
import i18n from './i18n'

    modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-purgecss',
    ['nuxt-i18n', i18n],
    '@nuxtjs/style-resources',
  ],
```

## Style Resources

Here we can globally add all our sass variables, mixins or functions that we want to globally import into each component thanks to already having installed the module `nuxtjs/style-resources`.

```js
styleResources: {
    scss: ['./assets/scss/variables.scss'],
  },
```

## Purge CSS

Purgecss is a tool to remove unused CSS. It can be used as part of your development workflow. First make sure you have already installed the module `nuxt-purgecss`. You can whitelist selectors to stop purgecss from removing them from your CSS

```js
purgeCSS: {
  mode: 'postcss', whitelistPatterns: [/cookie-consent/],
  },
```

## Axios

Use Axios in Nuxt. For more info see the [axios module docs](https://github.com/nuxt-community/axios-module#options).

```js
 axios: {
    // this is the base url of our api
    baseURL: 'db.js',
  },
```

## Build Configuration

This is where you extend the webpack configuration. We need to add in postcss here and the tailwind plugin.

```js
build: {
    postcss: {
          plugins: {
            tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
          },
        },
    extend(config, ctx) {
    },
  },
}
```
