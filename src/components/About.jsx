import { Col, Row } from "react-bootstrap";
import circle from '../assets/about/desktop/bg-pattern-hero-about-desktop.svg'
import '../sass/about.scss'

export default function About() {
    return(
        <>
            <Row id="aboutUs">
                <Col md={7}>
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
            <Row id="worldClassTalent">
                <Col md={5}>
                    <img src={require('../assets/about/desktop/image-world-class-talent.jpg')} alt="world class talent"/>
                </Col>
                <Col md={{span: 5, offset: 1}}>
                    <p className="heading2">World-class talent</p>
                    <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
                        <br/><br/>
Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand&#8217;s story and mission.
                        
                    </p>
                </Col>
            </Row>
        </>
    )
}