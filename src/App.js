import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Compotment/Header/Header';
import Footer from './Compotment/Footer/Footer';
import ScrollToTop from './Compotment/features/ScrollToTop';
import WhatsAppButton from './Compotment/features/WhatsAppButton';
import Home from './Compotment/Home/Home';
import ErrorPage from './Compotment/ErrorPage';
import Blog from './Compotment/Blog/Blog';
import Services from './Compotment/Services';
import About from './Compotment/About';
import Contact from './Compotment/Contact';

function App() {
  return (
     <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <WhatsAppButton/>
      <ScrollToTop/>
      <Footer/>
    </div>
  );
}

export default App;
