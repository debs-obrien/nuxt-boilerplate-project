<template>
  <div>
    <nuxt />
    <div class="footer"> </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()

    return {
      title: this.pageTitle,
      htmlAttrs: i18nSeo.htmlAttrs,

      meta: [
        {
          name: 'description',
          content: 'content',
        },
        ...i18nSeo.meta,
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://mywebsite.com${this.$nuxt.$route.path}`,
        },
        ...i18nSeo.link,
      ],
    }
  },
}
</script>

<style lang="scss"></style>
