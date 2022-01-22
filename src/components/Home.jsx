import React from 'react';
import styled from 'styled-components';
import ShapeLeft from '../assets/shape-left.png';
import ShapeRight from '../assets/shape-right.png';
import Banner from '../assets/banner-thumb.png';

const Container = styled.div`
margin-top: 10vh;
height: 180vh;
position: relative;
`
const Left = styled.div`
.img{
  top: 50vh;
  left: 0;
  position: absolute;
  z-index: -100;
  height: 100vh;
}
`
const Right = styled.div`
.img{
  top: 60vh;
  position: absolute;
  right: 0;
  z-index: -1;
  height: 100vh;
}
`
const Main = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height: 50vh;
width: 35vw;
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
}
&>:nth-child(2) {
  font-size: 1.3rem;
  line-height: 2.5rem;
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
}
`
const Img = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
top: 120vh;
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
          <img src={Banner} alt='page' />
        </Img>
        <Right>
          <img src={ShapeRight} alt='shaperight' className='img' />
        </Right>
    </Container>
    </>
   );
};

export default Home;
