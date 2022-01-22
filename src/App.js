import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';

import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import KeyFeature from './components/KeyFeature';
import QualityFeatures from './components/QualityFeatures';
import CoreFeatures from './components/CoreFeatures';
import Process from './components/Process';
import Team from './components/Team';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Header />
      <Home />
      <Products />
      <KeyFeature />
      <QualityFeatures />
      <CoreFeatures />
      <Process />
      <Pricing />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
