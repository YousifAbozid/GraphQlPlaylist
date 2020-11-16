import React from 'react'
import { gql, useQuery } from '@apollo/client'

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`

const AddBook = () => {
    const { loading, error, data } = useQuery(getAuthorsQuery)
    if (loading) return <option disabled>Loading authors...</option>
    if (error) return <option disabled>Error while fetching data :(</option>

    return (
        <form>
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
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