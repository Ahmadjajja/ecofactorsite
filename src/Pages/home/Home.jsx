import Layout from "../../Components/constant/Layout";
import Contact from "../../Components/home sections/Contact";
import EcofactorAccess from "../../Components/home sections/EcofactorAccess";
import HeroSection from "../../Components/home sections/HeroSection";
import MainFeatures from "../../Components/home sections/MainFeatures";
import Team from "../../Components/home sections/Team";
import Testimonial from "../../Components/home sections/Testimonial";
import WhoWeAre from "../../Components/home sections/WhoWeAre";
import WhyEcofactor from "../../Components/home sections/WhyEcofactor";

const Home = () => {
  return <>
    <Layout>
      <div className="container">
        <HeroSection />
        <WhyEcofactor />
        <MainFeatures />
        <EcofactorAccess />
        <Team />
        <WhoWeAre />
        <Contact />
      </div>
    </Layout>
  </>;
};

export default Home;
