import React from 'react';
import styled from 'styled-components';

import Sponsor1 from '../assets/sponsor/dropbox.svg';
import Sponsor2 from '../assets/sponsor/google.svg';
import Sponsor3 from '../assets/sponsor/paypal.svg';

const Content = styled.div`
height: 20vh;
width: 70vw;
margin: 0 15vw;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`
const Icon = styled.div``

const Title = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&>:nth-child(2){
  margin-top: 0;
}
`

const Sponsors = () => {
  return(
      <div id="sponsors">
        <Title>
            <h1>Sponsors</h1>
        </Title>
        <Content>
            <Icon><img src={Sponsor1} alt='' /></Icon>
            <Icon><img src={Sponsor2} alt='' /></Icon>
            <Icon><img src={Sponsor3} alt='' /></Icon>
        </Content>
      </div>
  );
};

export default Sponsors;
