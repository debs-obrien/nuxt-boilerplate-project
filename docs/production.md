# Building and deploying to production

This site is a static generated site therefore we use the generate command to generate the static site.

## From the terminal

```bash
# Build for production with minification
yarn generate
```

This results in your compiled application in a `dist` directory.

## Netlify

This site is hosted on Netlify.

To setup on Netlify use the following commands for installing your packages and generating your site.

```bash
# Build for production with minification
yarn
yarn generate
```

Choose folder dist

To avoid Netlify's 404 page being shown when pages can't be static and go into fallback mode of SPA and also to have your own error page you need to set the generate property in your nuxt config and add the fallback key with the value of true.

```bash
generate{
  fallback:true
}
```
