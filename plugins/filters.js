import Vue from 'vue'
Vue.filter('daysDiff', function(startDate, endDate, daysToAddOrRemove = 0) {
  const oneDay = 24 * 60 * 60 * 1000
  const startDateObject = new Date(startDate)
  const endDateObject = new Date(endDate)

  return (
    Math.round(
      Math.abs((startDateObject.getTime() - endDateObject.getTime()) / oneDay)
    ) + daysToAddOrRemove || 1
  )
})
