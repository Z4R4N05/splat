import { gql } from '@apollo/client';

export const QUERY_PALETTE = gql`
  query palette($username: String) {
    palette(username: $username) {
      _id
      paletteText
      paletteUI
      createdAt
      username
      likeCount
      comment {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;

export const QUERY_THOUGHT = gql`
  query palette($id: ID!) {
    palette(_id: $id) {
      _id
      paletteText
      createdAt
      username
      likeCount
      comment {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
