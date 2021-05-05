import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation signup(
    $token: String!
    $firstname: String!
    $lastname: String!
    $department: String!
  ) {
    signup(
      token: $token
      firstname: $firstname
      lastname: $lastname
      department: $department
    ) {
      id
      token
      firstname
      lastname
      department
    }
  }
`;

export const REGISTER = gql`
  mutation register(
    $firstname: String!
    $lastname: String!
    $department: String!
    $date: String!
  ) {
    register(
      firstname: $firstname
      lastname: $lastname
      department: $department
      date: $date
    ) {
      id
      firstname
      lastname
      department
      date
    }
  }
`;
