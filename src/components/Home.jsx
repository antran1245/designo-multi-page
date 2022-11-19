import { Col, Row, Button } from "react-bootstrap";
import singleCircle from '../assets/home/desktop/bg-pattern-hero-home.svg'
import '../sass/home.scss'
import '../sass/projects.scss'

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

            </Row>
        </>
    )
}