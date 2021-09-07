// import { ApolloLink } from 'apollo-link'
// import { HttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'

// export default () => {
//   const httpLink = new HttpLink({ uri: 'https://graphql.contentful.com/content/v1/spaces/d3b1looh8iwg/environments/master' })
//   const token = 'nWaUt3VsuH96y4wnrI3uu_JCLe6JG1eoI_k4SR1Zxl0'
//   const middlewareLink = new ApolloLink((operation, forward) => {
//     operation.setContext({
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     return forward(operation)
//   })
//   const link = middlewareLink.concat(httpLink)
//   return {
//     link,
//     cache: new InMemoryCache()
//   }
// }
