import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CREATE_USER = gql`
  mutation CreateUser($email: String, $password: String) {
    createUser(email: $email, password: $password) {
      email
      password
      id
    }
  }
`;

const CreateUserMutation = props => WrappedComponent => {
  return (
    <Mutation mutation={CREATE_USER}>
      {(createUser, { data }) => (
        <WrappedComponent {...props} mutation={{ createUser }} />
      )}
    </Mutation>
  );
};

export default CreateUserMutation;
