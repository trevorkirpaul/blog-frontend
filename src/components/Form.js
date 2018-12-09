import React from 'react';
import styled from 'styled-components';

// styles

const FormWrapper = styled.div``;

const Input = styled.input`
  display: block;
  border: 1px solid #383838;
  padding: 5px 10px;
  color: #383838;
  background: #f8f8f8;
  margin-bottom: 10px;
`;

const Button = styled.button`
  display: block;
  background: #383838;
  color: #f8f8f8;
  padding: 5px 10px;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Form = ({ fields, handleOnChange, handleSubmit, loading }) => {
  return (
    <FormWrapper>
      {fields &&
        fields.map(field => (
          <Input
            key={field.id}
            name={field.name}
            type={field.type}
            value={field.value}
            placeholder={field.placeholder}
            onChange={handleOnChange}
          />
        ))}

      <Button onClick={handleSubmit}>
        {loading ? '...loading' : 'Log In'}
      </Button>
    </FormWrapper>
  );
};

export default Form;
