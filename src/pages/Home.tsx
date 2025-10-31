import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <ServicesOverview />
      <About />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;