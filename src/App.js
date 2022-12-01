import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Design from './components/Design';
import Footer from "./components/Footer";
import About from './components/About';
import Locations from './components/Locations';
import Contact from './components/Contact';
import data from '../src/data.json'
import './App.css';
import './sass/App.scss'

function App() {
  return (
    <BrowserRouter>
      {/* Container for full width */}
      <Container fluid className='p-0' id='content'>
        {/* Container for content width */}
        <Navigation />
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='web' element={<Design title={'Web Design'} detail={"We build websites that serve as powerful marketing tools and bring memorable brand experiences."} data={data['web-design']} designs={[{"img": "image-app-design.jpg", "title": "APP DESIGN"}, {"img": "image-graphic-design.jpg", "title": "GRAPHIC DESIGN"}]}/>} />
            <Route path='app' element={<Design title={'App Design'} detail={"Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."} data={data['app-design']} designs={[{"img": "image-web-design-small.jpg", "title": "WEB DESIGN"}, {"img": "image-graphic-design.jpg", "title": "GRAPHIC DESIGN"}]}/>} />
            <Route path='graphic' element={<Design title={'Graphic Design'} detail={"We deliver eye-catching branding materials that are tailored to meet your business objectives."} data={data['graphic-design']} designs={[{"img": "image-app-design.jpg", "title": "APP DESIGN"}, {"img": "image-web-design-small.jpg", "title": "WEB DESIGN"}]}/>} />
            <Route path='about' element={<About/>}/>
            <Route path='locations' element={<Locations/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
