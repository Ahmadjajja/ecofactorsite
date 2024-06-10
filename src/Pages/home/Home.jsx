import Layout from "../../Components/constant/Layout";
import Contact from "../../Components/home sections/Contact";
import DemoDataset from "../../Components/home sections/DemoDataset";
import EcofactorAccess from "../../Components/home sections/EcofactorAccess";
import HeroSection from "../../Components/home sections/HeroSection";
import MainFeatures from "../../Components/home sections/MainFeatures";
import Team from "../../Components/home sections/Team";
import WhoWeAre from "../../Components/home sections/WhoWeAre";
import WhyEcofactor from "../../Components/home sections/WhyEcofactor";

const Home = () => {
  return <>
    <Layout>
      <div className="container">
        <HeroSection />
        <WhyEcofactor />
        <MainFeatures />
        <DemoDataset />
        <EcofactorAccess />
        <Team />
        <WhoWeAre />
        <Contact />
      </div>
    </Layout>
  </>;
};

export default Home;
