import React from 'react';
import styled from 'styled-components';

import Pattern from '../assets/patternBG.png'
import ArrowOdd from '../assets/arrowOdd.svg';
import ArrowEven from '../assets/arrowEven.svg';

const data = [
    {
      id: 1,
      title: 'Set disbursement Instructions',
      text:
        'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
    {
      id: 2,
      title: 'Assembly retrieves funds from us',
      text:
        'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
    {
      id: 3,
      title: 'Assembly initiates disbursement',
      text:
        'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
    {
      id: 4,
      title: 'Customer receives funds payment',
      text:
        'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
  ];

const Container = styled.div`
height: 80vh;
width: calc(60vw+ 20rem);
margin-bottom: 6vw;
display: flex;
flex-direction: column;
background: url(${Pattern});
background-size: cover;
background-position: center center;
background-color: #EA3A60;
background-repeat: no-repeat;
position: relative;
@media (max-width: 1300px) {
  height: 90vh;
}
@media (max-width: 800px) {
  height: calc(90vh + 15rem);
}
@media (max-width: 600px) {
  height: calc(110vh + 20rem);
}
@media (max-width: 426px) {
  height: calc(110vh + 30rem);
}
@media (max-width: 400px) {
  height: calc(100vh + 20rem);
}
@media (max-width: 340px) {
  height: calc(110vh + 30rem);
}
`
const Flex = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 3vw;
width: calc(60vw+ 20rem);
margin: 5vh 10vw;
@media (max-width: 1300px) {
  margin: 5vh 5vw;
}
@media (max-width: 800px) {
  flex-wrap: wrap;
  gap: 2rem;
}
`
const Card = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: calc(10vw + 7.5rem);
@media (max-width: 1300px) {
  width: calc(10vw + 8rem);
}
@media (max-width: 800px) {
  width: calc(20vw + 8rem);
  align-items: center;
  justify-content: center;
}
@media (max-width: 600px) {
  width: calc(20vw + 20rem);
}
@media (max-width: 500px) {
  width: 100%;
}
&>:nth-child(1){
    font-size: 30px;
    background-color: #fff;
    padding: 0.8rem 1.4rem;
    border-radius: 40px;
    font-weight: 700;
    color: #554885;
    z-index: 1;
}
&>:nth-child(2){
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    @media (max-width: 800px) {
      text-align: center;
    }
    @media (max-width: 600px) {
      font-size: 25px;
    }
    @media (max-width: 400px) {
        font-size: 20px;
    }
}
&>:nth-child(3){
    color: #fff;
    line-height: 1.8em;
    @media (max-width: 800px) {
      text-align: center;
    }
    @media (max-width: 600px) {
      margin: 0;
    }
}
&:nth-of-type(2n-1)::before {
    content: '""';
    background-image: url(${ArrowOdd});
    width: 20vw;
    z-index: 0;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    height: 10vh;
    margin: 0 3rem;
    @media (max-width: 1024px) {
      display: none;
    }
  }
&:nth-of-type(2n)::before {
    content: '""';
    background-image: url(${ArrowEven});
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    width: 20vw;
    top: 100px;
    z-index: 0;
    height: 10vh;
    margin: 8rem 3rem;
    @media (max-width: 1024px) {
      display: none;
    }
}
&:last-child::before {
    display: none;
}
`
const Title = styled.div`
padding: 5vh 0;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&>:nth-child(1){
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  letter-spacing: 2px;
}
&>:nth-child(2){
  margin-top: 0;
  color: #fff;
  @media (max-width: 850px) {
    font-size: 30px;
    text-align: center;
    width: 90%;
  }   
  @media (max-width: 600px) {
      font-size: 25px;
  }
  @media (max-width: 400px) {
      font-size: 20px;
  }
}
@media (max-width: 600px) {
  padding: 0;
}
`

const Process = () => {
  return(
    <Container id="workflow">
        <Title>
        <h4>WHAT'S THE FUNCTION</h4>
        <h1>Meet the feature of our product</h1>
        </Title>
        <Flex>
            {data.map((item) => (
                <Card key={item.id}>
                    <span>{`0${item.id}`}</span>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                </Card>
            ))}
        </Flex>
    </Container>
  );
};

export default Process;
