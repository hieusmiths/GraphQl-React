import { gql } from 'apollo-boost'

export const SIGNUP_USER = gql`
mutation ($email: String!, $username: String!, $password: String!) {
    singupUser(email: $email, username: $username, password: $password) {
      token
    }
  }  
`

export const SIGNIN_USER = gql`
mutation($username: String!, $password: String! ) {
  signInUser(username: $username, password: $password) {
    token
  }
}
`