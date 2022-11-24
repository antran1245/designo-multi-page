import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from "./components/Footer";
import './App.css';
import './sass/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Design from './components/Design';

function App() {
  return (
    <BrowserRouter>
      {/* Container for full width */}
      <Container fluid className='p-0' id='content'>
        {/* Container for content width */}
        <Container>
          <span id="leaf-image-left"></span>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='web' element={<Design/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
