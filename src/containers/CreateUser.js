import React, { Component } from 'react';

import Form from 'components/Form';
import Wrapper from 'components/Wrapper';
import Title from 'components/Title';
import Text, { ErrorText } from 'components/Text';

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
        <Form
          fields={fields}
          handleOnChange={this.handleOnChange}
          handleSubmit={this.handleSubmit}
          loading={loading}
        />
      </Wrapper>
    );
  }
}

export default CreateUser;
