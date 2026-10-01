import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import SystemWorkflow from './components/sections/SystemWorkflow';
import FinancialProfile from './components/sections/FinancialProfile';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Hero />
        <SystemWorkflow />
        <FinancialProfile />
      </main>
      <Footer />
    </div>
  );
}
