import React, { useState } from 'react';
import styled from 'styled-components';

import Icon1 from '../assets/widget/chat.svg';
import Icon2 from '../assets/widget/community.svg';
import Icon3 from '../assets/widget/github.svg';

const data = [
  {
    id: 1,
    img: Icon1,
    title: 'Join the Community',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.'
},
{
    id: 2,
    img: Icon2,
    title: 'Chat Communication',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.'
},
{
    id: 3,
    img: Icon3,
    title: 'Github Access',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.'
},
];

const Container = styled.div`
height: 55vh;
width: 75vw;
margin: 10vh 12vw;
background-color: #EA3A60;
border-radius: 12px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
@media (max-width: 1200px) {
  height: 70vh;
}
@media (max-width: 750px) {
  height: 80vh;
  margin-bottom: 20vh;
}
@media (max-width: 550px) {
  height: 90vh;
  margin-bottom: 30vh;
  margin: 6vh 12vw;
}
`
const Title = styled.div`
font-size: 35px;
font-weight: 700;
color: #fff;
@media (max-width: 550px) {
  font-size: 30px;
}
@media (max-width: 450px) {
  font-size: 25px;
}
@media (max-width: 350px) {
  font-size: 20px;
}
`
const Description  = styled.div`
color: #fff;
line-height: 2rem;
text-align: center;
width: 32vw;
font-size: 18px;
@media (max-width: 450px) {
  width: 70%;
}
`
const Email = styled.div`
width: 36vw;
background-color: #fff;
border-radius: 50px;
padding: 20px 6px;
height: 4vh;
display: flex;
flex-direction: row;
align-items: center;
gap: 2rem;
@media (max-width: 1200px) {
  flex-direction: column;
  width: 70%;
}
&>:nth-child(1) {
  width: 28vw;
  font-size: 17px;
  outline: none;
  border: none;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 80%;
  }
  margin-left: 2rem;
  &::placeholder {
    color: #f50056;
  }
}
&>:nth-child(2) {
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 2rem;
  padding: 16px 32px;
  color: #fff;
  background-color: #EA3A60;
  border: 2px solid #fff;
  transition: all 0.3s ease;
  &:hover{
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.2);
  }
}
`

const Content = styled.div`
height: 40vh;
width: 100%;
display: flex;
gap: 2rem;
flex-direction: row;
align-items: center;
justify-content: center;
flex-wrap: wrap;
@media (max-width: 776px) {
  height: 70vh;
}
@media (max-width: 440px) {
  height: 120vh;
}
`
const Info = styled.div`
width: calc(10vw + 10rem);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1.3rem;
`
const Icon = styled.div``
const InfoTitle = styled.div`
font-size: 20px;
font-weight: 649;
text-align: center;
`
const InfoDescription = styled.div`
color: rgba(0, 0, 0, 0.8);
text-align: center;
line-height: 2rem;
`

const Subscribe = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <Container id="subscription">
        <Title>Subscribe to our Blog</Title>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor incididunt labore dolore.</Description>
        <Email>
          <input type="email" placeholder="Enter your email address"/>
          <button type="button" onClick={() => setState(true)}>{state ? 'Sumbitting...' : 'Subscribe'}</button>
        </Email>
      </Container>
      <Content>
        {data.map((item) => (
          <Info key={item.id}>
            <Icon><img src={item.img} alt={item.title} /></Icon>
            <InfoTitle>{item.title}</InfoTitle>
            <InfoDescription>{item.description}</InfoDescription>
          </Info>
        ))}
      </Content>
    </>
  );
};

export default Subscribe;
