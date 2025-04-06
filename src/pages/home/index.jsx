import About from "./sections/About";
import Apprentices from "./sections/Apprentices";
import Contact from "./sections/Contact";
import CTA from "./sections/CTA";
import Employers from "./sections/Employers";
import Hero from "./sections/Hero";
import Teams from "./sections/Teams";
import Testimonials from "./sections/Testimonials";
import Tools from "./sections/Tools";
import Universities from "./sections/Universities";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Employers />
      <Apprentices />
      <Universities />
      <Teams />
      <CTA />
      <Tools />
      <Contact />
    </div>
  );
};

export default Home;
