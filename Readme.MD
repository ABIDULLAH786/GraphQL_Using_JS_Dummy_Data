# GraphQL Game Reviews API

This is a simple GraphQL API built with Apollo Server. It provides data about games, authors, and reviews using an in-memory JavaScript object instead of a database.

## Features
- Query games, authors, and reviews.
- Get details about individual games, authors, and reviews.
- Perform mutations to add, update, and delete games.

## Installation

### Prerequisites
- Node.js (v16 or later)

### Setup
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd <repo-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Server
Start the GraphQL server with:
```sh
node index.js
```
The server will start at: `http://localhost:4000`

## GraphQL Schema

### Queries
```graphql
type Query {
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
    reviews: [Review]
    review(id: ID!): Review
    hello: String!
}
```

### Mutations
```graphql
type Mutation {
    addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, edits: UpdateGameInput!): Game
}
```

### Types
```graphql
type Game {
    id: ID!
    title: String!
    platforms: [String!]!
    reviews: [Review!]
}

type Review {
    id: ID!
    rating: Float!
    content: String!
    author: Author!
    game: Game!
}

type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
}
```

### Input Types
```graphql
input AddGameInput {
    title: String!
    platforms: [String!]!
}

input UpdateGameInput {
    title: String
    platforms: [String!]
}
```

## Sample Queries

### Fetch all games
```graphql
query {
    games {
        id
        title
        platforms
    }
}
```

### Fetch a specific game by ID
```graphql
query {
    game(id: "1") {
        title
        platforms
        reviews {
            rating
            content
        }
    }
}
```

### Add a new game
```graphql
mutation {
    addGame(game: { title: "New Game", platforms: ["PC", "PS5"] }) {
        id
        title
    }
}
```

## License
This project is licensed under the MIT License.

