import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoIosPlay } from 'react-icons/io';
import ModalVideo from 'react-modal-video';

import ServiceThumb from '../assets/service-thumb.png';
import shapePattern from '../assets/shape-pattern1.png';
import Smart from '../assets/services/smart.svg';
import Secure from '../assets/services/secure.svg';

const features = [
    {
      id: 1,
      imgSrc: Smart,
      altText: 'Smart Features',
      title: 'Smart Features',
      text:
        'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
    },
    {
      id: 2,
      imgSrc: Secure,
      altText: 'Secure Contents',
      title: 'Secure Contents',
      text:
        'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
    },
  ];

const Container = styled.div`
display: flex;
margin: 8vw 10vw;
justify-content: center; 
flex-direction: row;
gap: 1rem;
@media (max-width: 1300px) {
    margin: 8vw 8vw;
  }
@media (max-width: 1024px) {
    align-items: center;
    margin: 8vw 6vw;  
}
@media (max-width: 850px) {
    flex-direction: column;
    margin: 12vw 6vw;  
}
`
const scale = keyframes`
from {
    transform: scale(1);
    opacity: 1;
}
to {
    transform: scale(3);
    opacity: 0;
}
`
const Video = styled.div`
position: relative;
flex: 1;
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
    .play{
        position: absolute;
        top: 45%;
        left: 38%;
        transform: translate(-50%, -50%);
        color: #fff;
        background-color: #f50056;
        border-radius: 50%;
        animation: ${scale} 1.5s ease-out infinite;
        cursor: pointer;
        z-index: 2;
    }
}
&>:nth-child(2) {
    position: absolute;
    bottom: -6vh;
    left: -22vh;
    z-index: -1;
    @media (max-width: 1300px) {
        bottom: -8vh;
        left: -14vh;
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
    }   
    @media (max-width: 600px) {
        font-size: 25px;
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
}
@media (max-width: 600px) {
    flex-direction: column;
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

const KeyFeature = () => {
    const [videoOpen, setVideoOpen] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setVideoOpen(true);
      }
    
  return(
    <Container id='services'> 
        <Video>
            <div>
                <img src={ServiceThumb} alt='serviceThumbnail' />
                <IoIosPlay size={50} className='play' onClick={handleClick} />
            </div>
            <img src={shapePattern} alt='shapePattern' />
        </Video>
        <Content>
            <Title>
                <h4>Our Services</h4>
                <h1>Business Goals Achieved with Design</h1>
            </Title>
            <SubContent>
                {features.map((item) => (
                    <Text key={item.id}>
                        <img src={item.imgSrc} alt={item.altText} />
                        <div>
                            <ItemTitle>{item.title}</ItemTitle>
                            <Description>{item.text}</Description>
                        </div>
                    </Text>
                ))}
            </SubContent>
        </Content>
        <ModalVideo 
            channel="youtube"
            isOpen={videoOpen}
            videoId="20QUNgFIrK0"
            onClose={() => setVideoOpen(false)}
        />
    </Container>
    
  );
};

export default KeyFeature;
