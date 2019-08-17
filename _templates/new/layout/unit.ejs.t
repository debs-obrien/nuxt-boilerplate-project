---
to: "layouts/<%= h.inflection.dasherize(name) %>.unit.js"
---
<%
  const fileName = h.inflection.dasherize(name)
  const importName = h.inflection.camelize(fileName.replace(/-/g, '_')) + 'Layout'
%>import <%= importName %> from './<%= fileName %>'

describe('pages/<%= fileName %>', () => {
  it('is a valid layout', () => {
    expect(<%= importName %>).toBeAViewComponent()
  })
})
