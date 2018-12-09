import React, { Component } from 'react';

import Form from 'components/Form';
import Wrapper from 'components/Wrapper';
import Title from 'components/Title';
import { ErrorText } from 'components/Text';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      email: '',
      password: '',
      loading: false,
      error: '',
    };
  }

  handleOnChange = ({ target: { name, value } }) =>
    this.setState(() => ({ [name]: value }));

  handleSubmit = () => {
    const { email, password } = this.state;
    if (email && password) {
      return this.setState(() => ({ loading: true, error: '' }));
      //handle submit
    }

    this.setState(() => ({ error: 'Please complete the form' }));
  };

  render() {
    const { email, password, error, loading } = this.state;

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
    ];

    return (
      <Wrapper>
        <Title>Login</Title>
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

export default Login;
