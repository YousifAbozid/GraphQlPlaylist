import { gql } from '@apollo/client'

export const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`

export const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`