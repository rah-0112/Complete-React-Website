import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll'; 

import logo from '../assets/icons8-bbb.svg';

const data = {
  menuItem: [
    {
      path: 'home',
      label: 'Home',
    },
    {
      path: '/',
      label: 'Adversite',
    },
    {
      path: '/',
      label: 'Supports',
    },
    {
      path: '/',
      label: 'Marketing',
    },
    {
      path: '/',
      label: 'Contact',
    },
  ],
};

const Container = styled.div`
display: flex;
flex-direction: column;
`;
const Logo = styled.div`
border-top: 1px solid rgba(0, 0, 0, 0.1);
padding-top: 10vh;
margin: 5vh 0;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Mochiy Pop P One', sans-serif;
font-size: 1.5rem;
&>*{
  cursor: pointer;
}
@media (max-width: 1024px) {
  font-size: 1.2rem;
}
`
const Items = styled.div`
display: flex;
align-items: center;
justify-content: center;
&>*{
  padding: 0 1rem;
  padding-bottom: 1.5rem;
  cursor: pointer;
  &:hover{
    color: #f50056;
  }
}
`
const Copy= styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 15vh;
`

const Footer = () => {
  return(
    <Container>
        <Logo>
            <img src={logo} alt="logo"></img><span>Startup</span>
        </Logo>
      <Items>
        {data.menuItem.map((item) =>(
          <span key={item.id}>
            <Link
          activeClass="active"
          to={item.path}
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          >
            {item.label}
            </Link>
          </span>
        ))}
      </Items>
      <Copy>Copyright © by 2022 Company Name</Copy>
    </Container>
  );
};

export default Footer;
