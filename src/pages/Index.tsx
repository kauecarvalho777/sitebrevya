import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FlowCommerce from "@/components/FlowCommerce";
import Pablo from "@/components/Pablo";
import Press from "@/components/Press";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <FlowCommerce />
      <Pablo />
      <Press />
      <Footer />
    </div>
  );
};

export default Index;
