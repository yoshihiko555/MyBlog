require('dotenv').config()
module.exports = {
  overwrite: true,
  schema: [
    {
      [process.env.CTF_ENDPOINT]: {
        headers: {
          Authorization: `Bearer ${process.env.CTF_CDA_TOKEN}`
        }
      }
    }
  ],
  documents: ['./graphql/**/*.{graphql,gql}'],
  generates: {
    './generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typed-document-node'
      ],
    },
    './generated/graphql.schema.json': {
      plugins: [
        'introspection'
      ],
    },
  },
}
