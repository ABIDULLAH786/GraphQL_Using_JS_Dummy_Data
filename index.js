import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";


// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
})

// start server
const { url } = await startStandaloneServer(server, {
    port: 4000,
    cors: {
        origin: "http://localhost:4000",
        credentials: true,
    },
})

console.log(`Server ready at ${url} 🚀`);