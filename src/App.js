import { Container, Nav, Navbar } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from "./components/Footer";
import './App.css';
import './sass/App.scss'

function App() {
  return (
    // Container for full width
    <Container fluid className='p-0'>
      {/* Container for content width */}
      <Container>
        <span id="leaf-image"></span>
        <Navigation />
        <Home/>
      </Container>
      <Footer/>
    </Container>
  );
}

export default App;
