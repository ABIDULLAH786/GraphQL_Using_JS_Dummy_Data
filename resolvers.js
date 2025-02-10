import db from './_db.js';
export const resolvers = {
    Query: {
        hello: () => "Hello, GraphQL!",
        games: () => db.games,
        game: (_, { id }) => db.games.find(game => game.id === id),
        authors: () => db.authors,
        author: (_, { id }) => db.authors.find(author => author.id === id),
        reviews: () => db.reviews,
        review: (_, { id }) => db.reviews.find(review => review.id === id),
    },
    // qury for game inside a review
    Review: {
        game(parent, { id }) {
            return db.games?.find(g => g.id === parent.game_id)
        },
        author(parent, { id }) {
            return db.authors?.find(a => a.id === parent.author_id)
        }
    },
    // query for reviews inside game query
    Game: {
        reviews(parent) {
            return db.reviews.filter(r => r.game_id === parent.id)
        }
    },
    // query for reviews inside game query
    Author: {
        reviews(parent) {
            return db.reviews.filter(r => r.author_id === parent.id)
        }
    },
    // mutation to create/update/remove data
    Mutation: {
        addGame(_, args) {
            const game = {
                ...args.game,
                id: Math.floor(Math.random() * 1000).toString(),
                created_at: Date.now().toString(),
            }
            db.games.push(game)
            return game
        },
        deleteGame(_, args) {
            db.games = db.games?.filter(g => g.id !== args.id)
            return db?.games
        },
        updateGame(_, args) {
            db.games = db.games?.map(g => {
                if (g?.id === args.id) {
                    return { ...g, ...args?.edits }
                }
                return g
            })
            return db.games?.find(g => g?.id === args?.id)
        },
    }
}