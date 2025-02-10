export const typeDefs = `#graphql
    type Query {
        hello: String
    }
    type Game{
        id: ID!
        title: String!
        platform: [String!]!
    },
    type Review {
        id: ID!
        rating: Float!
        content: String!
    },
    type Author {
        id: ID!
        name: String!
        verified: Boolean! 
    }
    type Query{
        games: [Game]
        authors: [Author]
        reviews: [Review]
        hello: String!
        
    }
`