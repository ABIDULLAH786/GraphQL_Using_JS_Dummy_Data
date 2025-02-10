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
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
        reviews: [Review]
        review(id: ID!): Review
        hello: String!
        
    }
`