import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import schema from "./graphql/schema";

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export for Vercel
export default app;