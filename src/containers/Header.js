import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 25px;
  color: #383838;
`;

const LogoText = styled.span``;

const Nav = styled.nav``;

const UL = styled.ul`
  list-style: none;
`;

const LI = styled.li``;

const Span = styled.span``;

const Header = props => (
  <Wrapper>
    <LogoText>devBlog</LogoText>
    <Nav>
      <UL>
        <LI>
          <Link to="/">
            <Span>Home</Span>
          </Link>

          <Link to="/user/login">
            <Span>Login</Span>
          </Link>

          <Link to="/user/create">
            <Span>Create User</Span>
          </Link>
        </LI>
      </UL>
    </Nav>
  </Wrapper>
);

export default Header;
