import { Col, Row } from "react-bootstrap";
import circle from '../assets/about/desktop/bg-pattern-hero-about-desktop.svg'
import '../sass/about.scss'

export default function About() {
    return(
        <>
            <Row id="aboutUs">
                <Col>
                    <img src={circle} alt="circle" className="circle"/>
                    <div>
                        <p className="heading1">About Us</p>
                        <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We&#8217;ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We&#8217;re always looking forward to creating brands, products, and digital experiences that connect with our clients&#8217; audiences.</p>
                    </div>
                </Col>
                <Col>
                    <img src={require('../assets/about/desktop/image-about-hero.jpg')} alt="about us"/>
                </Col>
            </Row>
        </>
    )
}