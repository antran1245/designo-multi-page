import { Col, Row } from "react-bootstrap";
import Countries from "./Countries";
import GetInTouch from "./GetInTouch";
import circle from '../assets/about/desktop/bg-pattern-hero-about-desktop.svg'
import mobileCircle from '../assets/about/mobile/bg-pattern-hero-about-mobile.svg'
import twoCircle from '../assets/shared/desktop/bg-pattern-two-circles.svg'
import threeCircle from '../assets/shared/desktop/bg-pattern-three-circles.svg'
import leaf from '../assets/shared/desktop/bg-pattern-leaf.svg'
import '../sass/about.scss'

export default function About() {
    return(
        <>
            <span id="leaf-image-left"></span>
            <Row id="aboutUs">
                <Col xs={{order: 2, span: 12}} md={{order: 1, span: 7}}>
                    <img src={circle} alt="circle" className="circle d-none d-sm-block"/>
                    <img src={mobileCircle} alt="mobile Circle" className="circle d-block d-sm-none"/>
                    <div>
                        <p className="heading1">About Us</p>
                        <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We&#8217;ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We&#8217;re always looking forward to creating brands, products, and digital experiences that connect with our clients&#8217; audiences.</p>
                    </div>
                </Col>
                <Col xs={{order: 1, span: 12}} md={{order: 2, span: 5}}>
                    <img src={require('../assets/about/desktop/image-about-hero.jpg')} alt="about us" className="d-none d-lg-block"/>
                    <img src={require('../assets/about/mobile/image-about-hero.jpg')} alt="about us" className="d-block d-sm-none"/>
                </Col>
            </Row>
            <Row id="worldClassTalent">
                <Col lg={5}>
                    <img src={require('../assets/about/desktop/image-world-class-talent.jpg')} alt="world class talent" className="d-none d-lg-block"/>
                    <img src={require('../assets/about/mobile/image-world-class-talent.jpg')} alt="world class talent" className="d-block d-sm-none"/>
                </Col>
                <Col lg={{span: 5, offset: 1}}>
                    <img src={threeCircle} alt="three cirlces" />
                    <div>
                        <p className="heading2">World-class talent</p>
                        <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
                            <br/><br/>
    Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand&#8217;s story and mission.
                            
                        </p>
                    </div>
                </Col>
            </Row>
            <Countries />
            <img src={leaf} alt="leaf" id="leaf" className="d-none d-lg-block"/>
            <Row id="realDeal">
                <Col xs={{order: 2, span: 12}} lg={{order: 1, span: 7}}>
                    <div>
                        <p className="heading2">The real deal</p>
                        <p>As strategic partners in our clients&#8217; businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.<br/><br/>
We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                    </div>
                    <img src={twoCircle} alt="two circles" className="d-none d-lg-block"/>
                    <img src={threeCircle} alt="three cirlces" className="d-block d-sm-none"/>
                </Col>
                <Col xs={{order: 1, span: 12}} lg={{order: 2, span: 5}}>
                    <img src={require('../assets/about/desktop/image-real-deal.jpg')} alt="real deal" className="d-none d-lg-block"/>
                    <img src={require('../assets/about/mobile/image-real-deal.jpg')} alt="real deal" className="d-block d-sm-none"/>
                </Col>
            </Row>
            <GetInTouch />
        </>
    )
}