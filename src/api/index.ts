import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import schema from "../graphql/schema";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ 
    message: "Spireflow GraphQL API is running!",
    graphql: "/api/graphql"
  });
});

app.use(
  "/api/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

export default app;