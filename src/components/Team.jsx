import React from 'react';
import styled from 'styled-components';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from '../assets/team/member-1.png';
import Member2 from '../assets/team/member-2.png';
import Member3 from '../assets/team/member-3.png';
import Member4 from '../assets/team/member-4.png';
import Member5 from '../assets/team/member-5.png';
import Member6 from '../assets/team/member-6.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Saimon Harmer',
    title: 'Saimon Harmer',
    designation: 'CEO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Aaron Nunez',
    title: 'Aaron Nunez',
    designation: 'Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Aaron Nunez',
    title: 'Aaron Nunez',
    designation: 'Web Designer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Lina Jutila',
    title: 'Lina Jutila',
    designation: 'Web Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Saimon Harmer',
    title: 'Saimon Harmer',
    designation: 'CEO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Aaron Nunez',
    title: 'Aaron Nunez',
    designation: 'Web Designer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
];

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
margin-top: 5vh;
margin-bottom: 10vh;
`
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
&>:nth-child(3){
  margin-top: 0;
}
`
const Grid = styled.div`
margin: 0vw 10vw;
display: grid;
grid-column-gap: 1vw;
grid-row-gap: 4vw;
grid-template-columns: repeat(3, 1fr);
`
const Card = styled.div`
height: 35vh;
width: 24vw;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.8rem;
position: relative;
transition: ease-in-out 0.4s;
&:hover{
  box-shadow: 0 4px 10px rgba(39, 83, 123, 0.12);
}
`
const CardPhoto = styled.div`
border: 2px solid #f50056;
border-radius: 50%;
display: flex;
`
const CardTitle = styled.div`
font-size: 20px;
font-weight: 600;
transition: color 0.25s;
${Card}:hover &{
  color: #f50056;
}
`
const CardDesignation = styled.div`
color: rgba(0, 0, 0, 0.7);
transition: color 0.25s;
${Card}:hover &{
  color: #f50056;
}
`
const CardSocial = styled.div`
position: absolute;
display: flex;
flex-direction: column;
gap: 1rem;
right: 2rem;
bottom: 2rem;
color: #f50056;
opacity: 0;
padding: -1rem;
margin-bottom: -1rem;
transition: all 0.25s;
line-height: 0.5rem;
${Card}:hover &{
  opacity: 1;
  padding: 0;
  margin-bottom: 0;
  line-height: 1.5rem;
}   
&>*{
  &:hover {
    color: #000;
  }
  transition: all 0.1s;
  cursor: pointer;
}

`

const TeamCard = ({ src, altText, title, designation, social }) => {
  return(
    <Card>
      <CardPhoto><img src={src} alt={altText}/></CardPhoto>
      <CardTitle>{title}</CardTitle>
      <CardDesignation>{designation}</CardDesignation>
      <CardSocial>
        {social.map((item) => (
          <span key={item.id}>{item.icon}</span>
        ))}
      </CardSocial>
    </Card>
  );
}

const Team = () => {
  return(
    <Container id="team">
      <Title>
        <h4>OUR TEAM</h4>
        <h1>The most qualified and talented</h1>
        <h1>individuals</h1>
      </Title>
      <Grid>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
            ))}
        </Grid>
    </Container>
  );
};

export default Team;
