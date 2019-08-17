<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
  </div>
</template>
<script>
export default {
  components: {},
  layout: 'basic',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      pageTitle: 'patterson.travel',
    }
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: this.pageTitle,
      htmlAttrs: i18nSeo.htmlAttrs,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'Hola, somos Patterson. El copiloto de tu marca. La agencia que gestiona, coordina y diseña tus viajes y eventos de empresa',
        },
        ...i18nSeo.meta,
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://patterson.travel${this.$nuxt.$route.path}`,
        },
        ...i18nSeo.link,
      ],
    }
  },
}
</script>

<style lang="scss"></style>
