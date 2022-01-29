import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import React, { Suspense } from 'react';
import FlippingSquare from "react-cssfx-loading/lib/FlippingSquare";
import styled from 'styled-components';
import Sponsors from './components/Sponsors';

const Layout = React.lazy(() => import('./components/header/layout'));
const Home = React.lazy(() => import('./components/Home'));
const Products = React.lazy(() => import('./components/Products'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const Footer = React.lazy(() => import('./components/Footer'));
const KeyFeature = React.lazy(() => import('./components/KeyFeature'));
const QualityFeatures = React.lazy(() => import('./components/QualityFeatures'));
const CoreFeatures = React.lazy(() => import('./components/CoreFeatures'));
const Process = React.lazy(() => import('./components/Process'));
const Team = React.lazy(() => import('./components/Team'));
const Testimonial = React.lazy(() => import('./components/Testimonial'));
const Blog = React.lazy(() => import('./components/Blog'));
const Subscribe = React.lazy(() => import('./components/Subscribe'));

const Center = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background-color: #fff;
`
const Loader = () => (
  <Center>
    <FlippingSquare color="#000" width="100px" height="100px" />
  </Center>
)

function App() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Suspense fallback={<Loader />}>
        <Layout />
        <Home />
        <Products />
        <KeyFeature />
        <QualityFeatures />
        <Sponsors />
        <CoreFeatures />
        <Process />
        <Pricing />
        <Team />
        <Testimonial />
        <Blog />
        <Subscribe />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
