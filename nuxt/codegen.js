module.exports = {
  overwrite: true,
  schema: [
    {
      'https://graphql.contentful.com/content/v1/spaces/d3b1looh8iwg/environments/master': {
        headers: {
          Authorization: `Bearer nWaUt3VsuH96y4wnrI3uu_JCLe6JG1eoI_k4SR1Zxl0`
        }
      }
    }
  ],
  documents: ['./graphql/**/*.gql'],
  generates: {
    './generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
