import db from './_db.js';
export const resolvers = {
    Query: {
        hello: () => "Hello, GraphQL!",
        games: () => db.games,
        // game: (_, { id }) => db.games.find(game => game.id === id),
        authors: () => db.authors,
        // author: (_, { id }) => db.authors.find(author => author.id === id),
        reviews: () => db.reviews,
        // review: (_, { id }) => db.reviews.find(review => review.id === id),
    },
}