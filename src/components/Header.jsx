// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { IoMdMenu, IoMdClose } from 'react-icons/io';

// const items = [
//     {
//       path: 'home',
//       label: 'Home',
//     },
//     {
//       path: 'feature',
//       label: 'Features',
//     },
//     {
//         path: 'pricing',
//         label: 'Pricing',
//     },
//     {
//         path: 'testimonial',
//         label: 'Testimonial',
//     },
// ];

// const extra = [
//   {
//     path: 'services',
//     label: 'Our Services',
//   },
//   {
//     path: 'team',
//     label: 'Team',
//   },
//   {
//       path: 'workflow',
//       label: 'WorkFlow',
//   },
//   {
//       path: 'corefeatures', 
//       label: 'Core Features',
//   },
//   {
//       path: 'blog',
//       label: 'Blog',
//   },
//   {
//       path: 'subscription', 
//       label: 'Subscription',
//   },
//   {
//     path: 'sponsors', 
//     label: 'Sponsors',
// },
// ];

// const Container = styled.div`
// height: 10vh;
// width: 100vw;
// display: flex;
// align-items: center;
// position: fixed;
// top: 0;
// left: 0;
// padding: 0.5vh 0;
// backdrop-filter: blur(4px);
// border-bottom: 1px solid rgba(0, 0, 0, 0.1);
// z-index: 100;
// background-color: #fff;
// `
// const Logo = styled.div`
// flex: 1;
// display: flex;
// justify-content: center; 
// @media (min-width: 768px) {
//   margin: 20px;
// }  
// font-family: 'Mochiy Pop P One', sans-serif;
// font-size: 1.5rem;
// &>*{
//   cursor: pointer;
// }
// @media (max-width: 1024px) {
//   font-size: 1.2rem;
// }
// `
// const Menu = styled.div`
// flex: 1;
// display: flex;
// flex-direction: row;
// align-items: center;
// justify-content: center;

// @media (max-width: 1024px) {
//   display: none;
// }
// `
// const MenuItem = styled.div`
// flex: 0.2;
// display: flex;
// align-items: center;
// justify-content: center;
// transition: all 0.3s ease;
// cursor: pointer;

// &:hover{
//   color: #f50056;
//   transform: translateY(-10%);
// }
// .active{
//   color: #f50056;
// }
// `
// const SignUp = styled.div`
// flex: 0.8;
// display: flex;
// align-items: center;
// justify-content: center;

// &>*{
//   cursor: pointer;
//   font-size: 1.1rem;
//   border-radius: 2rem;
//   padding: 14px 32px;
//   color: #f50056;
//   background-color: #fff;
//   border: 2px solid #f50056;
//   transition: all 0.3s ease;
//   &:hover{
//     background-color: #f50056;
//     color: #fff;
//   }
//   @media (max-width: 1024px) {
//     font-size: 1rem;
//     padding: 12px 24px;
//     border-radius: 1.6rem;
//   }
// }


// `


// const Header = () => {
//   return (
//     <>
//     <Container>
//         <Logo>
//             <img src={logo} alt="logo"></img>
//             <span>Startup</span>
//         </Logo>
//         <Menu>
//             {items.map((item, i) => (
//               <MenuItem key={i}>
//                 <Link
//                 activeClass="active"
//                 to={item.path}
//                 spy={true}
//                 smooth={true}
//                 offset={-150}
//                 duration={500}
//                 key={i}
//                 >
//                   {item.label}
//                 </Link>
//               </MenuItem>
//             ))}
//         </Menu>
//         <SignUp>
//             <button>Get Started</button>
//         </SignUp>
//     </Container>
//     </>
//   );
// };

// export default Header;