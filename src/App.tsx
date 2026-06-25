import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ScheduleSection from './components/ScheduleSection';
import OfferingsSection from './components/OfferingsSection';
import InstructorsSection from './components/InstructorsSection';
import BeginnersSection from './components/BeginnersSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ScheduleSection />
        <OfferingsSection />
        <InstructorsSection />
        <BeginnersSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
