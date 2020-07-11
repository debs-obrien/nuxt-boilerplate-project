---
title: Plugins
---

## Installed Plugins

### vue-carousel

We are globally importing vue-carousel even though we should only import it on to the home page due to errors with server side rendering we have had to import it globally. See here more info on [vue-carousel](https://github.com/SSENSE/vue-carousel)

### lazy-load-images

A Vue.js component to lazy load an image automatically when it enters the viewport using the Intersection Observer API. This component is loaded globally so that we have access to it in all components. See here more info on [v-lazy-image](https://github.com/alexjoverm/v-lazy-image)

## Custom Plugins

In the plugin folder we can add plugins from npm or we can create our own custom plugins.
