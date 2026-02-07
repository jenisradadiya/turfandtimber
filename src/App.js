import logo from './logo.svg';
import './App.css';
import Header from './Compotment/Header/Header';
import Footer from './Compotment/Footer/Footer';
import Hero from './Compotment/Home/Hero';
import ScrollToTop from './Compotment/features/ScrollToTop';
import WhatsAppButton from './Compotment/features/WhatsAppButton';

function App() {
  return (
     <div>
      <Header />
      <Hero/>
      {/* Page Content */}
      <main className="p-6">
        <h1 className="text-3xl font-bold">
          Welcome to Turf & Timber
        </h1>
      </main>
      <Footer/>
      {/* Floating Buttons */}
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;
