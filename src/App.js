import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Design from './components/Design';
import Footer from "./components/Footer";
import data from '../src/data.json'
import About from './components/About';
import Locations from './components/Locations';
import './App.css';
import './sass/App.scss'

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
            <Route path='web' element={<Design data={data['web-design']} designs={[{"img": "image-app-design.jpg", "title": "APP DESIGN"}, {"img": "image-graphic-design.jpg", "title": "GRAPHIC DESIGN"}]}/>} />
            <Route path='app' element={<Design data={data['app-design']} designs={[{"img": "image-web-design-small.jpg", "title": "WEB DESIGN"}, {"img": "image-graphic-design.jpg", "title": "GRAPHIC DESIGN"}]}/>} />
            <Route path='graphic' element={<Design data={data['graphic-design']} designs={[{"img": "image-app-design.jpg", "title": "APP DESIGN"}, {"img": "image-web-design-small.jpg", "title": "WEB DESIGN"}]}/>} />
            <Route path='about' element={<About/>}/>
            <Route path='locations' element={<Locations/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
