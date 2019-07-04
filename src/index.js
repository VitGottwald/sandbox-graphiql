import React from "react";
import ReactDOM from "react-dom";
import GraphiQL from "graphiql";
import fetch from "isomorphic-fetch";

import "./styles.css";
import "graphiql/graphiql.css";

function App() {
  return <GraphiQL fetcher={graphQLFetcher} />;
}

async function graphQLFetcher(graphQLParams) {
  const response = await fetch("https://api.spacex.land/graphql", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(graphQLParams)
  });

  return await response.json();
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
