import './App.css';
import { Routes, Route,} from "react-router-dom";
import Header from './Compotment/Header/Header';
import Footer from './Compotment/Footer/Footer';
import ScrollToTop from './Compotment/Features/ScrollToTop';
import WhatsAppButton from './Compotment/Features/WhatsAppButton';
import Home from './Page/home/Home';
import ErrorPage from './Page/error/ErrorPage';
import Services from './Page/services/Services';
import About from './Page/about/About';
import Contact from './Page/contact/Contact';
import ServiceDetail from './Compotment/Services/ServiceDetail';
import Project from './Page/project/Project';
import Blog from './Page/blog/Blog';
import BlogDetail from './Compotment/Blog/BlogDetail';


function App() {
  return (
     <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path='/blog/:id' element={<BlogDetail/>}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/project' element={<Project/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <WhatsAppButton/>
      <ScrollToTop/>
      <Footer/>
    </div>
  );
}

export default App;
