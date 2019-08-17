---
to: "pages/<%= h.inflection.dasherize(name) %>.vue"
---
<%
  const fileName = h.inflection.dasherize(name)
  const importName = h.inflection.camelize(fileName.replace(/-/g, '_'))
%>
<template>
  <div>
    <%= h.inflection.titleize(name.replace(/-/g, '_')) %>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {

    }
  },
  head() {
    return {
      title: '<%= importName %>',
      meta: [
        {
          name: 'description',
          content:
            '<%= importName %>',
        },
      ],
    }
  },

}
</script>

<%

if (useStyles) { %>
<style lang="scss" scoped>
</style>
<% } %>
