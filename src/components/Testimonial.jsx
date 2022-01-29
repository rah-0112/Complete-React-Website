import React from 'react';
import styled from 'styled-components';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';

import Avatar1 from '../assets/testimonial/avatar1.png';
import Avatar2 from '../assets/testimonial/avatar2.png';
import Avatar3 from '../assets/testimonial/avatar3.png';
import Avatar4 from '../assets/testimonial/avatar4.png';

const Carousel = React.lazy(() => import('react-multi-carousel'));

const data = [
    {
      id: 1,
      title: 'Modern look & trending design',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar: Avatar1,
      name: 'Denny Hilguston',
      designation: '@denny.hil',
      review: 4,
    },
    {
      id: 2,
      title: 'Design Quality & performance',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar: Avatar2,
      name: 'Denny Hilguston',
      designation: '@denny.hil',
      review: 5,
    },
    {
      id: 3,
      title: 'Layout and organized layers',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar: Avatar3,
      name: 'Denny Hilguston',
      designation: '@denny.hil',
      review: 5,
    },
    {
      id: 4,
      title: 'Modern look & trending design',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar: Avatar4,
      name: 'Denny Hilguston',
      designation: '@denny.hil',
      review: 4,
    },
  ];
  
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

const Rating = ({ star }) => {
    const totalRating = []
    for(let i = 0; i < 5; i++)
    {
        if(i < star){
            totalRating.push(
                <li style={{ color: '#f50056' }}>
                    <FaStar />
                </li>
            )
        } else {
            totalRating.push(
                <li style={{ color: 'gray' }}>
                    <FaStar />
                </li>
            )
        }
    }
    return(
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'row' , padding: '0px', gap: '0.1em' }}>
            {totalRating}
        </ul>
    );
}

const Title = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    &>:nth-child(1){
    font-size: 14px;
    color: #f50056;
    font-weight: 600;
    letter-spacing: 2px;
    }
    &>:nth-child(2){
    margin-top: 0;
    }
`
const Container = styled.div`
height: 80vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
gap: 5vh;
&>.carousel-container{
    width: 80%;
}
`
const Review = styled.div`
height: 40vh;
width: 15vw;
display: flex;
flex-direction: column;
margin: 1rem 1rem;
align-items: flex-start;
justify-content: space-evenly;
gap: 2rem;
box-shadow: 0px 0px 1px rgba(38, 78, 118, 0.35);
background-color: #fff;
transition: all 0.3s;
border-radius: 6px;
padding: 4rem;
&:hover{
    box-shadow: 0px 6px 30px rgba(38, 78, 118, 0.1);
}

&>:nth-child(4) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    &>:nth-child(2) {
        display: flex;
        flex-direction: column;
        font-weight: 500;
        gap: 0.3rem;
        &>:nth-child(2) {
            color: #f50056;
        }
    }
}
`
const ReviewTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
`
const Description = styled.div`
    line-height: 1.6em;
    color: rgba(0, 0, 0, 0.8);
`
const Avatar = styled.div`
&>*{
    display: flex;
    border: 2px solid #f50056;
    border-radius: 50%;
    flex:1;
}
`
const Name = styled.div`

`
const Designation = styled.div`

`

const Testimonial = () => {
  return (
      <div id="testimonial">
        <Title>
            <h4>TESTIMONIAL</h4>
            <h1>Meet Client Satisfaction</h1>
        </Title>
        <Container>
            <Carousel {...carouselParams}>
                {data.map((item) => (
                    <Review key={item.id}>
                        <Rating star={item.review} />
                        <ReviewTitle>{item.title}</ReviewTitle>
                        <Description>{item.description}</Description>
                        <div>
                            <Avatar><img src={item.avatar} alt={item.title} /></Avatar>
                            <div>
                                <Name>{item.name}</Name>
                                <Designation>{item.designation}</Designation>
                            </div>
                        </div>
                    </Review>
                ))}
            </Carousel>
        </Container>
      </div>
  );
};

export default Testimonial;
