import logo from './logo.svg';
import './App.css';
import Header from './Compotment/Header/Header';
import Footer from './Compotment/Footer/Footer';

function App() {
  return (
     <div>
      <Header />
      
      {/* Page Content */}
      <main className="p-6">
        <h1 className="text-3xl font-bold">
          Welcome to Turf & Timber
        </h1>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
