import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queryies/queries'

const AddBook = () => {
    const [bookName, setBookName] = useState('')
    const [bookGenre, setBookgenre] = useState('')
    const [authorId, setAuthorId] = useState('')
    const { loading, error, data } = useQuery(getAuthorsQuery)
    const [addBook] = useMutation(addBookMutation)

    if (loading) return <option disabled>Loading authors...</option>
    if (error) return <option disabled>Error while fetching data :(</option>

    const handleSubmit = (event) => {
        event.preventDefault()

        addBook({
            variables: {
                name: bookName,
                genre: bookGenre,
                authorId: authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        })
        .then(() => {
            setBookName('')
            setBookgenre('')
            setAuthorId('')
        })
        .catch((error) => console.log(error.message))
    }

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book name:</label>
                <input
                    type="text"
                    value={bookName}
                    onChange={(event) => setBookName(event.target.value)}
                />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input
                    type="text"
                    value={bookGenre}
                    onChange={(event) => setBookgenre(event.target.value)}
                />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(event) => setAuthorId(event.target.value)}>
                    <option>Select author</option>
                    { data.authors.map((author) => (
                        <option key={author.id} value={author.id}>{author.name}</option>
                    )) }
                </select>
            </div>
            <button>+</button>
        </form>
    )
}
export default AddBook