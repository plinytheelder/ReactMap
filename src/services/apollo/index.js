import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import AbortableLink from './AbortableLink'

export default new ApolloClient({
  uri: '/graphql',
  link: new AbortableLink().concat(createHttpLink()),
  name: inject.TITLE,
  version: inject.VERSION,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          badges: {
            merge(existing, incoming) {
              return incoming
            },
          },
          devices: {
            merge(existing, incoming) {
              return incoming
            },
          },
          gyms: {
            merge(existing, incoming) {
              return incoming
            },
          },
          nests: {
            badges: {
              merge(existing, incoming) {
                return incoming
              },
            },
          },
          pokemon: {
            merge(existing, incoming) {
              return incoming
            },
          },
          pokestops: {
            merge(existing, incoming) {
              return incoming
            },
          },
          portals: {
            merge(existing, incoming) {
              return incoming
            },
          },
          spawnpoints: {
            merge(existing, incoming) {
              return incoming
            },
          },
        },
      },
      SearchQuest: {
        keyFields: ['id', 'with_ar'],
      },
      Pokestop: {
        fields: {
          quests: {
            merge(existing, incoming) {
              return incoming
            },
          },
          invasions: {
            merge(existing, incoming) {
              return incoming
            },
          },
        },
      },
    },
  }),
})
