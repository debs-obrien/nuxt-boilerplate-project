---
to: "pages/<%= h.inflection.dasherize(name) %>.unit.js"
---
<%
  const fileName = h.inflection.dasherize(name)
  const importName = h.inflection.camelize(fileName.replace(/-/g, '_'))
%>import <%= importName %> from './<%= fileName %>'

describe('pages/<%= fileName %>', () => {
  it('is a valid page', () => {
    expect(<%= importName %>).toBeAViewComponent()
  })
})
