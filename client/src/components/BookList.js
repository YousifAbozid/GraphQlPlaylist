import React from 'react'
import { gql, useQuery } from '@apollo/client'

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`

const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery)
    if (loading) return <div>Loading books...</div>
    if (error) return <div>Error while fetching data :(</div>

    return (
        <div>
            <ul id="book-list">
                {data.books.map((book) => (
                    <li key={book.id}>
                        {book.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList