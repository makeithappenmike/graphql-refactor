import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      password
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(_id: $_id, username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($authors: [Authors], $description: String!, $title: String!, $bookId: Int!, $image: String!, $link: String!) {
    saveBook(_id: $_id, authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
      _id
      authors
      description
      title
      bookId
      image
      link
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: Int) {
    removeBook(_id: $_id, bookId: $bookId) {
      _id
      bookId
    }
  }
`;
