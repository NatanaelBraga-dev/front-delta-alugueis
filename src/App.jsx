import Header from './components/header/header';
import HeroSection from './components/hero_section/HeroSection';
import VehiclesSection from './components/vehicles_section/VehiclesSection';
import PartnersSection from './components/partners_section/PartnersSection';
import Footer from './components/footer/Footer';

import './App.css';

function App() {

    return (

        <div className="app-container">

            <Header />

            <HeroSection />

            <VehiclesSection />

            <PartnersSection />

            <Footer />

        </div>

    );
}

export default App;