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
      title: 'Assembly retrieves funds from your account',
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
width: 100vw;
margin-bottom: 6vw;
display: flex;
flex-direction: column;
gap: 0;
background: url(${Pattern});
background-size: cover;
background-position: center center;
background-color: #EA3A60;
background-repeat: no-repeat;
position: relative;
`
const Flex = styled.div`
display: flex;
flex-direction: row;
gap: 3vw;
width: 100vw;
padding: 5vh 10vw;
`
const Card = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 18vw;
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
}
&>:nth-child(3){
    color: #fff;
    line-height: 1.8em;
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
