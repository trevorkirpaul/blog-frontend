import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import Form from 'components/Form';
import Wrapper from 'components/Wrapper';
import Title from 'components/Title';
import Text, { ErrorText } from 'components/Text';
import CreateUserMutation from 'mutations/CreateUserMutation';

const CREATE_USER = gql`
  mutation CreateUser($email: String, $password: String) {
    createUser(email: $email, password: $password) {
      email
      password
      id
    }
  }
`;

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
    };
  }

  handleOnChange = ({ target: { name, value } }) =>
    this.setState(() => ({ [name]: value }));

  handleSubmit = () => console.log(this.state);

  render() {
    const { loading, email, password, confirmPassword, error } = this.state;

    const fields = [
      {
        id: 0,
        name: 'email',
        type: 'email',
        value: email,
        placeholder: 'email',
      },

      {
        id: 1,
        name: 'password',
        type: 'password',
        value: password,
        placeholder: 'password',
      },

      {
        id: 2,
        name: 'confirmPassword',
        type: 'confirmPassword',
        value: confirmPassword,
        placeholder: 'confirm password',
      },
    ];

    return (
      <Wrapper>
        <Title>Create User</Title>
        <Text>Complete this form to being creating posts</Text>
        {error && <ErrorText>{error}</ErrorText>}

        <Mutation mutation={CREATE_USER}>
          {(createUser, { data, loading, error }) => {
            // if (loading) {
            //   return <Text>Loading...</Text>
            // }

            return (
              <Form
                fields={fields}
                handleOnChange={this.handleOnChange}
                handleSubmit={() =>
                  createUser({
                    variables: {
                      email,
                      password,
                    },
                  })
                }
                loading={loading}
                error={error}
              />
            );
          }}
        </Mutation>
      </Wrapper>
    );
  }
}

export default CreateUser;
