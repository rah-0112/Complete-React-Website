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
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    imgSrc: feature1,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    imgSrc: feature3,
    altText: 'Pro Subscription',
    title: 'Pro Subscription',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    imgSrc: feature4,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 5vh;
margin-top: 3vw;
@media (max-width: 1000px) {
  margin-top: 0;
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
    font-size: 26px;
  }
  @media (max-width: 450px) {
    font-size: 20px;
  }
}
`
const Grid = styled.div`
display: grid;
align-items: center;
grid-template-columns: repeat(4, 240px);
grid-column-gap: calc(2vw + 2rem);
margin-top: 1vh;
@media (max-width: 1200px) {
  grid-gap: calc(2vw + 2rem);
  grid-template-columns: repeat(3, 240px);
}
@media (max-width: 1024px) {
  grid-column-gap: calc(4vw + 4rem);
  grid-template-columns: repeat(2, 240px);
}
@media (max-width: 600px) {
  grid-template-columns: repeat(1, 240px);
}
`
const GridItem = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: left;
&>:nth-child(1){
  margin-top: 0;
}
&>:nth-child(2){
  margin-top: 0;
}
&>:nth-child(3){
  margin-top: 0;
}
@media (max-width: 1024px) {
  align-items: center;
  text-align: center;
}
`
const ItemTitle = styled.h3`
margin-bottom: 2vh;
font-weight: 600;
`
const Description = styled.div`
line-height: 1.8em;
@media (max-width: 1200px) {
  line-height: 1.5em;
}

`

const Products = () => {
  return(
    <Container id='feature'>
      <Title>
        <h4>WHAT'S THE FUNCTION</h4>
        <h1>Meet the feature of our product</h1>
      </Title>
      <Grid>
        {data.map((item) => (
          <GridItem key={item.id}>
            <img src={item.imgSrc} alt={item.altText} />
            <ItemTitle>{item.title}</ItemTitle>
            <Description>{item.text}</Description>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
