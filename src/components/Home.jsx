import React from 'react';
import styled from 'styled-components';
import ShapeLeft from '../assets/shape-left.png';
import ShapeRight from '../assets/shape-right.png';
import Banner from '../assets/banner-thumb.png';

const Container = styled.div`
margin-top: 10vh;
height: 160vh;
position: relative;
`
const Left = styled.div`
.img{
  top: 50vh;
  left: 0;
  position: absolute;
  z-index: -100;
  height: 100vh;
  @media (max-width: 1200px) {
    height: calc(50vh + 15rem);
  }
  @media (max-width: 1024px) {
    height: calc(45vh + 12rem);
  }
  @media (max-width: 900px) {
    height: calc(35vh + 12rem);
  }
  @media (max-width: 600px) {
    height: calc(30vh + 10rem);
  }
  @media (max-width: 450px) {
    height: calc(25vh + 8rem);
  }
  @media (max-width: 400px) {
    height: calc(20vh + 8rem);
  }
  @media (max-width: 350px) {
    height: calc(10vh + 8rem);
  }
}
`
const Right = styled.div`
.img{
  top: 60vh;
  position: absolute;
  right: 0;
  z-index: -1;
  height: 100vh;
  @media (max-width: 1200px) {
    height: calc(50vh + 15rem);
  }
  @media (max-width: 1024px) {
    height: calc(45vh + 12rem);
  }
  @media (max-width: 900px) {
    height: calc(35vh + 12rem);
  }
  @media (max-width: 600px) {
    height: calc(30vh + 10rem);
  }
  @media (max-width: 450px) {
    height: calc(25vh + 8rem);
  }
  @media (max-width: 400px) {
    height: calc(20vh + 8rem);
  }
  @media (max-width: 350px) {
    height: calc(10vh + 8rem);
  }
}
`
const Img = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
top: 120vh;
.img{
  @media (max-width: 1200px) {
    width: calc(20vw + 40rem);
    height: 90vh;
  }
  @media (max-width: 900px) {
    width: calc(18vw + 35rem);
    height: 80vh;
  }
  @media (max-width: 768px) {
    width: calc(16vw + 30rem);
    height: 65vh;
  }
  @media (max-width: 600px) {
    width: calc(12vw + 25rem);
    height: 60vh;
  }
  @media (max-width: 450px) {
    width: calc(10vw + 20rem);
    height: 50vh;
  }
  @media (max-width: 400px) {
    width: calc(15vw + 15rem);
    height: 40vh;
  }
  @media (max-width: 350px) {
    width: calc(15vw + 15rem);
    height: 35vh;
  }
}
@media (max-width: 1200px) {
  top: 115vh;
}
@media (max-width: 1024px) {
  top: 100vh;
}
@media (max-width: 900px) {
  width: calc(20vw + 35rem);
  top: 95vh;
}
@media (max-width: 768px) {
  top: 90vh;
  left: 60%;
}
@media (max-width: 600px) {
  top: 85vh;
  left: 70%;
}
@media (max-width: 450px) {
  top: 82vh;
  left: 80%;
}
@media (max-width: 400px) {
  top: 80vh;
  left: 95%;
}
@media (max-width: 350px) {
  top: 75vh;
  left: 100%;
}
`
const Main = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: calc(10vw + 25rem);
z-index: 10;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
&>:nth-child(1) {
  font-size: 3.5rem;
  font-weight: 650;
  margin-bottom: 0;
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
}
&>:nth-child(2) {
  font-size: 1.3rem;
  line-height: 2.5rem;
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 2rem;
  }
}
&>:nth-child(3) {
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
  @media (max-width: 600px) {
    padding: 10px 20px;
  }
}
@media (max-width: 1024px) {
  top: 40%;
}
@media (max-width: 600px) {
  width: calc(10vw + 20rem);
}
@media (max-width: 375px) {
  width: calc(10vw + 15rem);
}
`

const Home = () => {
  return (
    <>
    <Main id='home'>
        <h1>High Quality Digital Products to Explore</h1>
        <p>Check out our website to find great software products and deals! If you need a website or web application this is the best place to go!</p>
        <button>Explore</button>
    </Main>
    <Container>
        <Left>
          <img src={ShapeLeft} alt='shapeleft' className='img' />
        </Left>
        <Img>
          <img src={Banner} alt='page' className='img' />
        </Img>
        <Right>
          <img src={ShapeRight} alt='shaperight' className='img' />
        </Right>
    </Container>
    </>
   );
};

export default Home;
