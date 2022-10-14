import { FunctionComponent } from 'react';
import About from './Components/About';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
import Pricing from './Components/Pricing';
import Services from './Components/Services';
import Statis from './Components/Statis';

const Main: FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Statis />
      <Services />
      <About />
      <Pricing />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Main;
