import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Design from './components/Design';
import Footer from "./components/Footer";
import data from '../src/data.json'
import './App.css';
import './sass/App.scss'

function App() {
  console.log(data)
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
            <Route path='web' element={<Design data={data['web-design']}/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
