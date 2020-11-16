import React from 'react'
import './App.css'
import BookList from './components/BookList'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Yousif's Book List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  )
}

export default App