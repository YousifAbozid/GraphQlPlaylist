import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { getBooksQuery } from '../queryies/queries'
import BookDetails from './BookDetails'

const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery)
    const [selectedBookId, setSelectedBookId] = useState(null)
    
    if (loading) return <div>Loading books...</div>
    if (error) return <div>Error while fetching data :(</div>

    return (
        <div>
            <ul id="book-list">
                {data.books.map((book) => (
                    <li
                        key={book.id}
                        onClick={(event) => setSelectedBookId(book.id)}
                    >
                        {book.name}
                    </li>
                ))}
            </ul>
            <BookDetails bookId={selectedBookId} />
        </div>
    )
}

export default BookList