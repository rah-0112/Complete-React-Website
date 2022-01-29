import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`
const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
justify-content: space-evenly;
background-color: transparent;
height: 10vh;
transition: all 0.5s ease;
padding-top: 0.5rem;
animation: ${positionAnim} 0.5s ease;
&.sticky{
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  padding-top: 0;
}
`
const Menu = styled.div`
display: none;
flex: 1;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
@media (min-width: 1024px) {
  display: flex; 
}  
`
const MenuItem = styled.div`
display: flex;
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
display: flex;
flex: 1;
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
  @media (max-width: 375px) {
    padding: 10px 20px;
    border-radius: 1.4rem;
  }
}
`
const Logo = styled.div`
flex: 1;
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
@media (max-width: 375px) {
  font-size: 1rem;
}
`

export default function Header({ className }) {
  return (
        <Container className={className}>
          <Logo>
            <span>Startup</span>
          </Logo>
          <Menu>
            {menuItems.map((item, i) => (
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
          <MobileDrawer />
        </Container>
  );
}