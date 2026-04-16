import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import About from "@/components/About";
import FlowCommerce from "@/components/FlowCommerce";
import CaseStudy from "@/components/CaseStudy";
import Pablo from "@/components/Pablo";
import Timeline from "@/components/Timeline";
import Team from "@/components/Team";
import Press from "@/components/Press";
import LatestPosts from "@/components/LatestPosts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <FlowCommerce />
      <CaseStudy />
      <Pablo />
      <Timeline />
      <Team />
      <Press />
      <LatestPosts />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
