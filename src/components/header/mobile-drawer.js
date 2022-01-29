import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from './drawer';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaGithubAlt, FaDribbble } from 'react-icons/fa';
import menuItems from './header.data';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const social = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    icon: <FaGithubAlt />,
  },
  {
    path: '/',
    icon: <FaDribbble />,
  },
];

const Menu = styled.div`
&>*{
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
     display: none;
  }  
  @media (min-width: 375px) {
    margin-right: 10px;
  }
}
`
const Content = styled.div`
width: 80%;
height: 75%;
dispaly: flex;
flex-direction: column;
padding-top: 100px;
padding-bottom: 40px;
padding-left: 30px;
padding-right: 30px;
`
const Menuu = styled.div`
width: 100%;
display: flex;
flex-direction: column;
.active{
  color: #00aaff;
}
&>*{
  font-size: 16px;
  font-weight: 500;
  color: #000;
  padding: 15px 0;
  cursor: pointer;
  transition: all 0.25s;
  border-bottom: 1px solid #e8e5e5;
  &:hover{
    color: #00aaff;
  }
}
`
const Footer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 15rem;
`
const Social = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
margin-right: 15px;
transition: all 0.25s;
cursor: pointer;
&>:last-child{
  margin-right: 0;
}
&:hover {
  color: #00aaff;
}
`

export default function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
   <Drawer
    width="320px"
    drawerHandler={
      <Menu>
        <IoMdMenu size="26px"/>
      </Menu>
    }
    open={isDrawerOpen}
    toggleHandler={() => setIsDrawerOpen((prevState) => !prevState )}
    closeButton={<IoMdClose size="24px" color='#000'  />}
   >
     <Scrollbars autoHide>
       <Content>
         <Menuu>
              {menuItems.map((menuItem, i) => (
                <Link
                  activeClass="active"
                  to={menuItem.path}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  key={i}
              >
                <div onClick={() => setIsDrawerOpen(false)}>{menuItem.label}</div>
              </Link>
              ))}
         </Menuu>
         <Footer sx={styles.menuFooter}>
           <Social>
             {social.map((socialItem, i) => (
                <Icon key={i} sx={styles.social.icon}>
                  <div>{socialItem.icon}</div>
                </Icon>
             ))}
           </Social>
         </Footer>
       </Content>
     </Scrollbars>
   </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};