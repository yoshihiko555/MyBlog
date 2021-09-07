const contentfulManagement = require('contentful-management')

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-s6-u_jTvSu1ug1SExgMZwu9rUt1mNgKijy4JBgNV8co'
  })
  return contentfulClient
    .getSpace('d3b1looh8iwg')
    .then(space => space.getEnvironment('master'))
}
