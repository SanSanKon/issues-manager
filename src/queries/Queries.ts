import { gql } from '@apollo/client';

export const GET_REPO_ISSUES = gql`
  query GetRepoIssues($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      issues(states: OPEN, first: 10) {
        nodes {
          id
          title
          body
          comments {
            totalCount
          }
        }
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($issueId: ID!, $body: String!) {
    addComment(input: { subjectId: $issueId, body: $body }) {
      commentEdge {
        node {
          id
          body
        }
      }
    }
  }
`;

export const GET_AUTHOR_PROFILE = gql`
  query GetAuthorProfile($owner: String!) {
    user(login: $owner) {
      login
      name
      email
    }
  }
`;