import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

import logo from '../assets/icons8-bbb.svg';
import { Link } from 'react-scroll'; 

const items = [
    {
      path: 'home',
      label: 'Home',
    },
    {
      path: 'feature',
      label: 'Features',
    },
    {
        path: 'pricing',
        label: 'Pricing',
    },
    {
        path: 'testimonial',
        label: 'Testimonial',
    },
];

const extra = [
  {
    path: 'services',
    label: 'Our Services',
  },
  {
    path: 'team',
    label: 'Team',
  },
  {
      path: 'workflow',
      label: 'WorkFlow',
  },
  {
      path: 'corefeatures', 
      label: 'Core Features',
  },
];

const Container = styled.div`
height: 10vh;
width: 100vw;
display: flex;
align-items: center;
position: fixed;
top: 0;
left: 0;
padding: 0.5vh 0;
backdrop-filter: blur(4px);
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
z-index: 100;
background-color: #fff;
`
const Logo = styled.div`
flex: 0.8;
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
const Menu = styled.div`
flex: 1;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

@media (max-width: 1024px) {
  display: none;
}
`
const MenuItem = styled.div`
flex: 0.2;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.3s ease;
cursor: pointer;

&:hover{
  color: #f50056;
  transform: translateY(-10%);
}
.active{
  color: #f50056;
}
`
const SignUp = styled.div`
flex: 0.8;
display: flex;
align-items: center;
justify-content: center;

&>*{
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 2rem;
  padding: 14px 32px;
  color: #f50056;
  background-color: #fff;
  border: 2px solid #f50056;
  transition: all 0.3s ease;
  &:hover{
    background-color: #f50056;
    color: #fff;
  }
  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 12px 24px;
    border-radius: 1.6rem;
  }
}


`
const Drawer = styled.div`
flex: 0.2;
width: 100px;
align-items: center;
justify-content: center; 
display: flex;
position: relative;

@media (max-width: 1024px) {
  display: flex;
}
`
const Sidebar = styled.div`
height: 100vh;
width: 300px;
background: rgb(39, 51, 89, 0.4);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
backdrop-filter: blur(5px);
border: 1px solid rgba(0, 0, 0, 0.3);
position: fixed;
top: 0;
right: 0;
transition: all 1s ease-in-out;
z-index: 10;
`
const SidebarContainer = styled.div`
position: relative;
padding-top: 5rem;
`
const Close = styled.div`
position: absolute;
left: 10px;
top: 10px;
color: #fff;
&:hover{
  color: #f50056;
}
`
const SideItem = styled.div`
positon: absolute;
display: flex;
align-items: center;
justify-content: flex-end;
transition: all 0.2s ease;
color: #fff;
font-size: 1.2rem;
margin: 1rem 2rem;
padding: 1rem 2rem;
cursor: pointer;
transition: all 0.3s ease;
&:hover{
  color: #f50056;
  border-left: 3px solid #f50056;
  background-color: rgba(255, 255, 255, 0.1);
}
`
const Div = styled.div``

const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <>
    <Div>&nbsp;</Div>
    <Container>
        <Logo>
            <img src={logo} alt="logo"></img><span>Startup</span>
        </Logo>
        <Menu>
            {items.map((item, i) => (
              <MenuItem key={i}>
                <Link
                activeClass="active"
                to={item.path}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                key={i}
                >
                  {item.label}
                </Link>
              </MenuItem>
            ))}
        </Menu>
        <SignUp>
            <button>Get Started</button>
        </SignUp>
        <Drawer>
          <IoMdMenu size={30} onClick={() => setClick((prevState) => !prevState)} />
        </Drawer>
        {click && 
          <Sidebar>
            <SidebarContainer>
              <Close onClick={() => setClick(false)}>
                <IoMdClose size={30}/>
              </Close>
              {extra.map((item, i) => (
                <Link
                  activeClass="active"
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  key={i}
                >
                <SideItem key={i}> 
                    {item.label}
                </SideItem>
                </Link>
              ))}
            </SidebarContainer>
          </Sidebar>}
    </Container>
    </>
  );
};

export default Header;
