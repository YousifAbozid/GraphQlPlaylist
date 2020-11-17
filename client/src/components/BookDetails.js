import React from 'react'
import { useQuery } from '@apollo/client'
import { getBookQuery } from '../queryies/queries'

const BookDetails = ({ bookId }) => {
    const { loading, error, data } = useQuery(getBookQuery, { variables: { id: bookId } })
    
    if (loading) return <div>Loading book...</div>
    if (error) return <div>Error while fetching data :(</div>

    const displayBookDetails = () => {
        const book = data.book
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this author</p>
                    <ul className="other-books">
                        { book.author.books.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        )) }
                    </ul>
                </div>
            )
        }
    }

    return (
        <div id="book-details">
            {displayBookDetails()}
        </div>
    )
}

export default BookDetails