import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProcessCards from '@/components/ProcessCards';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <Hero />
      <ProcessCards />
      <Footer />
    </div>
  );
};

export default Home;
