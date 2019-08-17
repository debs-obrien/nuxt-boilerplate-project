export default ({ app }, inject) => {
  inject('currency', (value) => {
    const lang = app.i18n.locale
    if (lang === 'en') {
      return '€' + parseFloat(value).toFixed(2)
    } else {
      return parseFloat(value).toFixed(2) + '€'
    }
  })
}
