import React from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import styled from 'styled-components';

import Blog1 from '../assets/blog/1.jpg';
import Blog2 from '../assets/blog/2.jpg';
import Blog3 from '../assets/blog/3.jpg';

const Carousel = React.lazy(() => import('react-multi-carousel'));

const data = [
    {
        id: 1,
        img: Blog1,
        title: 'Product Marketing: Creative Market',
        name: 'James Carter',
        date: 'Oct 20, 2020',
    },
    {
        id: 2,
        img: Blog2,
        title: 'Product Marketing: Startup Product Sales',
        name: 'Aston Aagar',
        date: 'Oct 20, 2020',
    },
    {
        id: 3,
        img: Blog3,
        title: 'Product Marketing: Monopoly Market',
        name: 'Cali Cartel',
        date: 'Oct 20, 2020',
    },
];
const Container = styled.div`
margin: 2vh 0;
`
const Title = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2vh 0;
&>:nth-child(1){
  font-size: 14px;
  color: #f50056;
  font-weight: 600;
  letter-spacing: 2px;
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
&>:nth-child(3){
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
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1619 },
        items: 4,
        slidesToSlide: 4, // optional, default to 1.
    },
    laptop: {
        breakpoint: { max: 1619, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};    
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    &>*{
        background-color: #fff;
        border: 0px solid;
        outline: none;
        font-size: 40px;
        color: #BBC7D7;
        cursor: pointer;
        transition: all 0.25s;
        &:hover{
            color: rgba(0, 0, 0, 0.7);
        }
    }
`
const ButtonGroup = ({next, previous}) => (
        <div>
            <Buttons>
                <button onClick={previous} aria-label="Previous">
                    <IoIosArrowRoundBack />
                </button>
                <button onClick={next} aria-label="Next">
                    <IoIosArrowRoundForward />
                </button>
            </Buttons>
        </div>
)
const carouselParams = {
    additionalTransfrom:0,
    arrows:false,
    autoPlaySpeed:3000,
    centerMode:false,
    className:"",
    containerClass:"carousel-container",
    customButtonGroup: <ButtonGroup />,
    dotListClass:"",
    draggable: true,
    focusOnSelect: false,
    infinite:true,
    itemClass:"",
    keyBoardControl: true,
    minimumTouchDrag:80,
    renderButtonGroupOutside: true,
    renderDotsOutside:false,
    responsive:responsive,
    showDots:false,
    sliderClass:"",
    slidesToSlide:1,
}
const Content = styled.div`
height: 80vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
gap: 5vh;
&>.carousel-container{
    width: 80%;
    @media (max-width: 639px){
        width: 70%;
    }
    @media (max-width: 500px){
        width: 75%;
    }
    @media (max-width: 400px){
        width: 80%;
    }
    @media (max-width: 380px){
        width: 85%;
    }
    @media (max-width: 320px){
        width: 80%;
    }
    @media (max-width: 310px){
        width: 85%;
    }
}
`
const Post = styled.div`
height: 30vh;
width: 15vw;
margin: 1rem 1rem;
display: flex;
flex-direction: column;
overflow: hidden;
position: relative;
align-items: center;
justify-content: space-between;
box-shadow: 0px 0px 1px rgba(38, 78, 118, 0.35);
background-color: #fff;
transition: all 0.3s;
border-radius: 6px;
padding: 4rem;
&:hover{
    box-shadow: 0px 6px 6px rgba(38, 78, 118, 0.1);
}

@media (max-width: 1300px){
    gap: 1rem;
}
@media (max-width: 1200px){
    width: calc(8vw + 5rem);
}
@media (max-width: 1150px){
    width: calc(6vw + 5rem);
}
@media (max-width: 1024px){
    width: 23vw;
}
@media (max-width: 850px){
    width: 20vw;
}
@media (max-width: 768px){
    width: 20vw;
}
@media (max-width: 700px){
    width: 18vw;
}
@media (max-width: 639px){
    width: 40vw;
    gap: 1.5rem;
}
@media (max-width: 350px){
    width: 35vw;
    gap: 1rem;
}
@media (max-width: 320px){
    width: 32vw;
    gap: 1rem;
}

&>:nth-child(3) {
    display: flex;
    flex-direction: row;
    gap: 7rem;
    position: absolute;
    bottom: 0;
    padding: 1rem;
    @media (max-width: 320px){
        gap: 4rem;
    }
}
`
const Picture = styled.div`
&>*{
    height: 30vh;
    top: 0;
    left: 0;
    position: absolute;
    @media (max-width: 1024px){
        width: 40vw;
    }
    @media (max-width: 768px){
        width: 40vw;
    }
    @media (max-width: 700px){
        width: 40vw;
    }
    @media (max-width: 639px){
        width: 70vw;
    }
    @media (max-width: 400px){
        width: 80vw;
    }
    @media (max-width: 320px){
        width: 90vw;
    }
}
`
const PostTitle = styled.div`
display: flex;
width : 100%;
align-items: center;
justify-content: center;
text-align: center;
height: 6vh;
font-size: 20px;
font-weight: 650;
cursor: pointer;
&:hover {
    color: #f50056;
}
@media (max-width: 1300px){
    font-size: 18px;
    font-weight: 600;
}
@media (max-width: 1200px){
    font-size: 18px;
    font-weight: 600;
}
@media (max-width: 1150px){
    font-size: 16px;
}
@media (max-width: 1024px){
    font-size: 16px;
}
@media (max-width: 700px){
    width: calc(6vw + 10rem);
}
@media (max-width: 639px){
    font-size: 18px;
    font-weight: 650;
}
@media (max-width: 350px){
    font-size: 16px;
    font-weight: 600;
}
@media (max-width: 320px){
    
}
`
const Name = styled.div`
font-size: 16px;
color: #f50056;
@media (max-width: 350px){
    font-size: 14px;
}
`
const Date = styled.div`
font-size: 16px;
color: rgba(0, 0, 0, 0.7);
@media (max-width: 350px){
    font-size: 14px;
}
`

const Blog = () => {
  return(
    <Container id="blog">
        <Title>
            <h4>OUR BLOG</h4>
            <h1>Explore our products for your</h1>
            <h1>business solution</h1>
        </Title>
        <Content>
            <Carousel {...carouselParams}>
                {data.map((item) => (
                    <Post key={item.id}>
                        <Picture><img src={item.img} alt={item.title} /></Picture>
                        <PostTitle>{item.title}</PostTitle>
                        <div>
                            <Name>{item.name}</Name>
                            <Date>{item.date}</Date>
                        </div>
                    </Post>
                ))}
            </Carousel>
        </Content>
    </Container>
  );
};

export default Blog;
