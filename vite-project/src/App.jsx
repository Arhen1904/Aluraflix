import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import NuevoVideo from './components/NuevoVideo';
import GlobalStyles from './components/GlobalStyles'; 
import Footer from './components/Footer';


function App() {
  return (
    <>
      <GlobalStyles /> 
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuevo-video" element={<NuevoVideo />} /> 
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
