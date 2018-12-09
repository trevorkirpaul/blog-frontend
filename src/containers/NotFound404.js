import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Title = styled.h1``;

const SubTitle = styled.h2``;

const BodyText = styled.p``;

const NotFound404 = () => (
  <Wrapper>
    <Title>Page not found</Title>
    <SubTitle>404</SubTitle>

    <BodyText>
      Sorry, we're can't find the page you're looking for. Please contact us if
      you need further help
    </BodyText>
  </Wrapper>
);

export default NotFound404;
