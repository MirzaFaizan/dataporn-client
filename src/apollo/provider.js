import React from "react"
import fetch from "unfetch"
import { ApolloProvider as Provider } from "react-apollo"
import { createUploadLink } from "apollo-upload-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { setContext } from "apollo-link-context"

import { ApolloClient } from "apollo-client"
import { ApolloLink } from "apollo-link"
export default ({ children }) => {
  const httpLink = createUploadLink({
    fetch,
    uri: `https://api.dataporn.cc/graphql`,
  })
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
    },
  }))
  const link = ApolloLink.from([authLink.concat(httpLink)])

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  })
  return <Provider client={client}>{children}</Provider>
}
