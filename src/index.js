import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider
} from "@apollo/client";
import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache()
});

// client
//   .query({
//     query: gql`
//       {
//         users {
//           id
//         }
//       }
//     `
//   })
//   .then((result) => console.log(result));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
