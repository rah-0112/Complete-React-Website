import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { keyframes } from 'styled-components';

const packages = {
  monthly: [
    {
      id: 1,
      name: 'Free Plan',
      description: 'For Small teams or office',
      buttonText: 'Start free trail',
      priceWithUnit: '$0',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCloseCircle />,
          text: 'eCommerce Store ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Business king',
      description: 'For Enterprise business',
      priceWithUnit: '$15',
      buttonText: 'Create account',
      anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'eCommerce Store ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: 'Suggested',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Pro Master',
      description: 'For pro level developers',
      priceWithUnit: '$24',
      buttonText: 'Create account',
      anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'eCommerce Store ',
          isAvailable: true,
        },
      ],
    },
  ],
  annual: [
    {
      id: 1,
      name: 'Free Plan',
      description: 'For Small teams or office',
      buttonText: 'Start free trail',
      priceWithUnit: '$0',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCloseCircle />,
          text: 'eCommerce Store ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Business king',
      description: 'For Enterprise business',
      priceWithUnit: '$25',
      buttonText: 'Create account',
      anotherOption: 'Or Start 10 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'eCommerce Store',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: 'Suggested',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Pro Master',
      description: 'For pro level developers',
      priceWithUnit: '$39',
      buttonText: 'Create account',
      anotherOption: 'Or Start 10 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'eCommerce Store',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder ',
          isAvailable: true,
        },
      ],
    },
  ],
};

const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 10vh;
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
  font-weight: 600;
  letter-spacing: 2px;
}
&>:nth-child(2){
  margin-top: 0;
}
`
const Buttons = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 1rem 0;
`
const Wrapper = styled.div`
display: flex;
flex-direction: row;
padding: 0.5rem 0.5rem;
border-radius: 5px;
background-color: #F7F8FB;
&>:nth-child(1) {
  padding: 1rem 2rem;
  background-color: transparent;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;
}
&>:nth-child(2) {
  padding: 1rem 2rem;
  background-color: transparent;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;
}
&>*.active {
  color: #0f2137;
  background-color: #fff;
  box-shadow: 0 3px 4px rgba(38, 78, 118, 0.1);
}
`
const Content = styled.div`
height: 70vh;
width: 100vw;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 2rem;
margin-top: 5vh;
margin-bottom: 12vh;
transition: all 0.3s;
`
const fade = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`
const fade1 = keyframes`
from{
  opacity: 0;
  transform: translateY(50%);
}
to{
  opacity: 1;
  transform: translateY(0);
}
`
const CardContainer = styled.div`
width: 25vw;
height: 70vh;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
border-radius: 5%;
border: 3px solid #F7F8FB;
transition: all 0.3s;
&:hover{
  box-shadow: 0px 4px 25px rgba(38, 78, 118, 0.1);
}
`
const CardTitle = styled.div`
display: flex;
flex-direction: column;
padding: 0 3rem;
animation: ${fade} 0.8s ease-in;
&>:nth-child(1) {
  display: flex;
  flex-direction: row;
  gap: 5vw;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1vh;
  position: relative;
  &>:nth-child(2) {
    color: #fff;
    position: absolute;
    right: -5vw;
    top: -5vh;
    background-color: #edc305;
    padding: 5px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
  }
}
&>:nth-child(2) {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
}
`
const CardContent= styled.div`
&>:first-child {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 2rem 1rem;
  &>*{
    animation: ${fade1} 0.7s ease-in;
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    &>:nth-child(1){
      font-size: 20px;
      color: #f50056;
    }
    &>:nth-child(2){
      color: rgba(0, 0, 0, 0.7);
    }
  }
}
`
const CardPrice = styled.div`
animation: ${fade1} 0.9s ease-in;
margin: 1rem 7rem;
margin-bottom: 0;
display: flex;
flex-direction: row;
align-items: center;
gap: 0.2rem;
&>:nth-child(1){
  font-size: 30px;
  font-weight: 600;
}
&>:nth-child(2){
  font-size: 20px;
  color: rgba(0, 0, 0, 0.7);
}
`
const CardButton = styled.div`
animation: ${fade1} 1s ease-in;
margin: 3rem 6rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
&>:nth-child(1){
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 2rem;
  padding: 12px 24px;
  color: #fff;
  background-color: #f50056;
  transition: all 0.3s ease;
  &:hover{
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
  }
  z-index: 1;
}
&>:nth-child(2){
  cursor: pointer;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  border-bottom: 0.1px solid rgba(0, 0, 0, 0);
  &:hover{
    color: rgba(0, 0, 0,1);
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.4);
  }
}

`

const Card = (props) => {
    const { data: {
      header,
      name,
      description,
      priceWithUnit,
      buttonText = 'Start Free Trial',
      anotherOption,
      points,
    } } = props;

    return(
      <CardContainer>
        <CardTitle>
          <h3>
            <div>{name}</div>
            <div>{header ? header : 'New'}</div>
          </h3>
          <div>{description}</div>
        </CardTitle>
        <CardContent>
          <ul>
            {points.map((point) => (
              <li key={point.id}>
                <div>{point.icon}</div>
                <div>{point.text}</div>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardPrice><span>{priceWithUnit}</span><span>/Monthly</span></CardPrice>
        <CardButton><span>{buttonText}</span><span>{anotherOption}</span></CardButton>
      </CardContainer>
    );
} 

const Pricing = () => {
  const { monthly, annual } = packages;
  const [plan, setPlan] = useState({
    pricingPlan: monthly,
    active: 'monthly',
  });
  const Render = ({ plan }) => (
    <Content>
      {plan.pricingPlan.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </Content>
  )
  return(
    <Container id='pricing'>
      <Title>
        <h4>PRICING PLAN</h4>
        <h1>Choose your pricing plan</h1>
      </Title>
      <Buttons>
        <Wrapper>
          <button 
            type='button' 
            className={plan.active === 'monthly' ? 'active' : ''} 
            onClick={() => setPlan({ pricingPlan: monthly, active: 'monthly' })}
          >Monthly Plan</button>
          <button 
            type='button' 
            className={plan.active === 'annual' ? 'active' : ''} 
            onClick={() => {
              setPlan({ pricingPlan: annual, active: 'annual' })
            }}
          >Annual Plan</button>
        </Wrapper>
      </Buttons>
      {plan && <Render plan={plan} /> }
    </Container>
  );
};

export default Pricing;
