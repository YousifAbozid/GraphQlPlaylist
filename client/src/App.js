import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './App.css'
import BookList from './components/BookList'
import AddBook from './components/AddBook'

const client = new ApolloClient({
  uri: 'https://booklist12.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Yousif's Book List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  )
}

export default App