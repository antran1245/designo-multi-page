import { Container, Nav, Navbar } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from "./components/Footer";
import './App.css';
import './sass/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Container for full width */}
      <Container fluid className='p-0'>
        {/* Container for content width */}
        <Container>
          <span id="leaf-image-left"></span>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
