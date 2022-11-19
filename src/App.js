import { Container, Nav, Navbar } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Home from './components/Home';
import './App.css';
import './sass/App.scss'

function App() {
  return (
    <Container>
      <span id="leaf-image"></span>
      <Navigation />
      <Home/>
    </Container>
  );
}

export default App;
