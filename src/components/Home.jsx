import { Col, Row, Button } from "react-bootstrap";
import singleCircle from '../assets/shared/desktop/bg-pattern-small-circle.svg'
import '../sass/home.scss'

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
        </>
    )
}