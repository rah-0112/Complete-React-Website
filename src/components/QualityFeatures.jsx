import React from 'react';
import styled from 'styled-components';

import feature1 from '../assets/feature/partnership.svg';
import feature2 from '../assets/feature/performance.svg';
import feature3 from '../assets/feature/subscription.svg';
import feature4 from '../assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: feature2,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    id: 2,
    imgSrc: feature1,
    altText: 'Pro Subscription',
    title: 'Pro Subscription',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 3,
    imgSrc: feature3,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    id: 4,
    imgSrc: feature4,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
];
  

const Container = styled.div`
margin: 2vw 20vw;
@media (max-width: 1200px) {
  margin: 2vw 10vw;
}
@media (max-width: 800px) {
  margin: 2vw 6vw;
}
@media (max-width: 700px) {
  margin: 2vw 10vw;
}
@media (max-width: 320px) {
  margin: 2vw 5vw;
}
`
const Title = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&>:nth-child(1){
  font-size: 14px;
  color: #f50056;
  font-weight: 500;
  letter-spacing: 2px;
  @media (max-width: 450px) {
    font-size: 12px;
  }
}
&>:nth-child(2){
  margin-top: 0;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 30px;
  }
  @media (max-width: 450px) {
    font-size: 23px;
  }
}
`
const Grid = styled.div`
display: grid;
align-items: center;
grid-template-columns: repeat(2, 1fr);
grid-gap: 5vw;
margin-top: 1vh;
@media (max-width: 700px) {
  grid-template-columns: repeat(1, 1fr);
}
`
const Text = styled.div`
display: flex;
flex-direction: row;
text-align: left;
gap: 5vh;
&>:nth-child(1){
   flex: 0.2; 
}
&>:nth-child(2){
  flex: 1;
}
`
const ItemTitle = styled.h3`
margin-bottom: 2vh;
font-weight: 600;
`
const Description = styled.div`
line-height: 1.8em;
`

const QualityFeatures = () => {
  return(
      <>
        <Title>
        <h4>QUALITY FEATURES</h4>
        <h1>Amazing useful features</h1>
        </Title>
        <Container>
            <Grid>
                {data.map((item) => (
                    <Text key={item.id}>
                        <img src={item.imgSrc} alt={item.altText} />
                        <div>
                            <ItemTitle>{item.title}</ItemTitle>
                            <Description>{item.text}</Description>
                        </div>
                    </Text>
                ))}
            </Grid>
        </Container>
    </>
  );
};

export default QualityFeatures;
