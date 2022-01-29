import React from 'react';
import styled from 'styled-components';

import CoreFeature from '../assets/core-feature.png';
import shapePattern from '../assets/shape-pattern2.png';

const data = {
    subTitle: 'Core features',
    title: 'Smart Jackpots that you may love this anytime & anywhere',
    description:
      'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
    btnName: 'Get Started',
    btnURL: '#',
  };

const Container = styled.div`
display: flex;
flex-direction: row-reverse;
gap: 10vh;
margin: 8vw 10vw;
@media (max-width: 1300px) {
  margin: 8vw 8vw;
}
@media (max-width: 1024px) {
  align-items: center;
  margin: 8vw 6vw;  
}
@media (max-width: 850px) {
  gap: 2vh;
  flex-direction: column;
  margin: 12vw 6vw;  
}
`
const Video = styled.div`
position: relative;
flex:  1;
&>:nth-child(1) {
    position: relative;
    &>:nth-child(1) {
      @media (max-width: 1300px) {
          width: calc(20vw + 20rem);
      }
      @media (max-width: 1024px) {
          width: calc(15vw + 20rem);
      }
      @media (max-width: 850px) {
          width: 100%;
      }
  }
}
&>:nth-child(2) {
    position: absolute;
    bottom: -6vh;
    right: -12vh;
    z-index: -1;
    @media (max-width: 1300px) {
      bottom: -8vh;
      right: -8vh;
    }
    @media (max-width: 1024px) {
        display: none;
    }
}
`
const Content = styled.div`
flex: 0.6;
display: flex;
flex-direction: column;
gap: 3vh;
`
const Title = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
@media (max-width: 850px) {
  justify-content: center;
  align-items: center;
}
&>:nth-child(1){
  font-size: 14px;
  color: #f50056;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
}
&>:nth-child(2){
    font-size: 40px;
    @media (max-width: 850px) {
      font-size: 30px;
      text-align: center;
      width: 90%;
    }   
    @media (max-width: 600px) {
        font-size: 25px;
        width: 100%;
    }
    @media (max-width: 400px) {
        font-size: 20px;
    }
    margin-top: 0;
}
`
const SubContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 5vh;
@media (max-width: 850px) {
  flex-direction: row;
  gap: 5vh;
  align-items: center;
  justify-content: center;
}
@media (max-width: 600px) {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
&>:nth-child(2) {
    cursor: pointer;
    font-size: 1.1rem;
    border-radius: 2rem;
    padding: 12px 24px;
    color: #fff;
    background-color: #f50056;
    border: 2px solid #f50056;
    transition: all 0.3s ease;
    &:hover{
      box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.2);
    }
    z-index: 10;
    @media (max-width: 850px) {
      padding: 10px 20px;
      font-size: 1rem;
    }
  }
`
const Description = styled.div`
font-size: 1.2rem;
line-height: 1.8em;
@media (max-width: 850px) {
  width: 60%;
}   
@media (max-width: 600px) {
  font-size: 1rem;
  text-align: center;
  width: 100%;
}
`

const CoreFeatures = () => {
  return(
    <Container id="corefeatures"> 
        <Video>
            <div>
                <img src={CoreFeature} alt='serviceThumbnail' />
            </div>
            <img src={shapePattern} alt='shapePattern' />
        </Video>
        <Content>
            <Title>
                <h4>{data.subTitle}</h4>
                <h1>{data.title}</h1>
            </Title>
            <SubContent>
                <Description>
                    {data.description}
                </Description>
                <button>Get Started</button>
            </SubContent>
        </Content>
    </Container>
  );
};

export default CoreFeatures;
