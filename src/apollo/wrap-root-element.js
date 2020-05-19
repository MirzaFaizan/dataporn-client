import React from "react"
import { ApolloProvider } from "react-apollo"
import { client } from "./client"

export const WrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
