export const typeDefs = `#graphql
    type Query {
        hello: String
    }
    type Game{
        id: ID!
        title: String! 
        platforms: [String!]! # this means that neither the platforms list it self nor the items of the platforms cna be null.
        reviews: [Review!] # this means the reviews as whole can be null but it it contains the list of reviews then it must not be null
    },
    type Review {
        id: ID!
        rating: Float!
        content: String!
        author: Author!
        game: Game!
    },
    type Author {
        id: ID!
        name: String!
        verified: Boolean! 
        reviews: [Review!] # this means the reviews as whole can be null but it contains the list of reviews then it must not be null
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
    type Mutation{
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!): [Game]
        updateGame(id: ID!, edits: UpdateGameInput!): Game
    }

    input AddGameInput{
        title: String!
        platforms: [String!]!
    }

    input UpdateGameInput{
        title: String,
        platforms: [String!]
    }
`