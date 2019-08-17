module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.js',
    },
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Español',
      file: 'es.js',
    },
  ],
  defaultLocale: 'en',
  seo: false,
  lazy: true,
  langDir: 'i18n/',
  parsePages: false,
  vuex: {
    moduleName: 'i18n',
    mutations: {
      setLocale: false,
      setMessages: false,
    },
    preserveState: false,
  },
  pages: {},
  vueI18n: {
    fallbackLocale: 'en',
  },
}
