import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PALETTE = gql`
mutation addPalette($paletteText: String!) {
  addPalette(paletteText: $paletteText) {
    _id
    paletteText
    createdAt
    username
    commentCount
    comment {
      _id
    }
  }
}

`;

export const ADD_COMMENT = gql`
  mutation addComment($paletteId: ID!, $commentBody: String!) {
    addComment(paletteId: $paletteId, commentBody: $commentBody) {
      _id
      commentCount
      comment {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;
