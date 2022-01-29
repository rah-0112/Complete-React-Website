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
margin: 0 12vw;
background-color: #EA3A60;
border-radius: 12px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
`
const Title = styled.div`
font-size: 35px;
font-weight: 700;
color: #fff;
`
const Description  = styled.div`
color: #fff;
line-height: 2rem;
text-align: center;
width: 32vw;
font-size: 18px;
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
&>:nth-child(1) {
  width: 28vw;
  font-size: 17px;
  outline: none;
  border: none;
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
  border: 2px solid #EA3A60;
  transition: all 0.3s ease;
  &:hover{
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.2);
  }
}
`

const Content = styled.div`
height: 40vh;
width: 70vw;
margin: 7vh 15vw;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`
const Info = styled.div`
width: 15vw;
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
