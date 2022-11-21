import { Col, Row, Button } from "react-bootstrap";
import Footer from "./Footer";
import singleCircle from '../assets/home/desktop/bg-pattern-hero-home.svg'
import smallCircle from '../assets/shared/desktop/bg-pattern-small-circle.svg'
import passionate from '../assets/home/desktop/illustration-passionate.svg'
import resourceful from '../assets/home/desktop/illustration-resourceful.svg'
import friendly from '../assets/home/desktop/illustration-friendly.svg'
import '../sass/home.scss'
import '../sass/projects.scss'
import '../sass/core.scss'

export default function Home() {
    return(
        <>
            <Row id="headerBox" className="peach-box">
                <Col xs={12} lg={{offset: 1, span: 6}} id="headerText">
                    <Row>
                        <Col>
                            <p className="heading">Award-winning custom designs and digital branding solutions</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={10}>
                            <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button>LEARN MORE</Button>
                        </Col>
                    </Row>
                </Col>
                <div id="headerImages">
                    <img src={singleCircle} alt="big single circle" id="singleCircle"/>
                    <img src={require('../assets/home/desktop/image-hero-phone.png')} alt="phone" id="phone"/>
                </div>
            </Row>
            <Row id="projects">
                    <div className="d-none d-md-block row-2">
                        <img src={require('../assets/home/desktop/image-web-design-large.jpg')} alt="large web design"/>
                        <div className="overlay">
                            <p className="heading2">WEB DESIGN</p>
                            <p>VIEW PROJECTS</p>
                        </div>
                    </div>
                    <div className="d-block d-md-none">
                        <img src={require('../assets/home/desktop/image-web-design-small.jpg')} alt="small web design"/>
                        <div className="overlay">
                            <p className="heading2">WEB DESIGN</p>
                            <p>VIEW PROJECTS</p>
                        </div>
                    </div>
                    <div>
                        <img src={require('../assets/home/desktop/image-app-design.jpg')} alt="app design"/>
                        <div className="overlay">
                            <p className="heading2">APP DESIGN</p>
                            <p>VIEW PROJECTS</p>
                        </div>
                    </div>
                    <div className="project-last">
                        <img src={require('../assets/home/desktop/image-graphic-design.jpg')} alt="Graphic design"/>
                        <div className="overlay">
                            <p className="heading2">GRAPHIC DESIGN</p>
                            <p>VIEW PROJECTS</p>
                        </div>
                    </div>
            </Row>
            <Row id="core">
                <Col lg={4}>
                    <div className="imagesContainer">
                        <img src={smallCircle} alt="smallCircle"/>
                        <img src={passionate} alt="passionate"/>
                    </div>
                    <div className="text">
                        <p>PASSIONATE</p>
                        <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="imagesContainer">
                        <img src={smallCircle} alt="smallCircle"/>
                        <img src={resourceful} alt="resourceful"/>
                    </div>
                    <div className="text">
                        <p>RESOURCEFUL</p>
                        <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients&#39; needs.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="imagesContainer">
                        <img src={smallCircle} alt="smallCircle"/>
                        <img src={friendly} alt="friendly"/>
                    </div>
                    <div className="text">
                        <p>FRIENDLY</p>
                        <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                    </div>
                </Col>
            </Row>
        </>
    )
}