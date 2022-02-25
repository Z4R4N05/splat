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

export const QUERY_PALETTES = gql`
  query palettes($id: ID!) {
    palettes(_id: $id) {
      _id
      paletteText
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

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      palettes {
        _id
        paletteText
        createdAt
        commentCount
        comment {
          _id
          createdAt
          commentBody
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;
