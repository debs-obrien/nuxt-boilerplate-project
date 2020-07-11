<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-boilerplate-project
      </h1>
      <h2 class="subtitle">
        This is your Nuxt playground, clone, download and play around and have
        fun with Nuxt.
      </h2>
      <div class="links">
        <nuxt-link to="docs/architecture" class="button--grey">
          Docs
        </nuxt-link>
        <!-- <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a> -->
        <!-- <nuxt-link :to="localePath('my-components')" class="button--grey">
          demo component
        </nuxt-link> -->
        <a
          href="https://github.com/debs-obrien/nuxt-boilerplate-project"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
