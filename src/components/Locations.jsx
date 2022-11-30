import { Col, Row } from 'react-bootstrap'
import GetInTouch from './GetInTouch'
import twoCircle from '../assets/shared/desktop/bg-pattern-two-circles.svg'
import threeCircle from '../assets/shared/desktop/bg-pattern-three-circles.svg'
import '../sass/locations.scss'

export default function Locations() {
    return(
        <>
            <Row>
                <Col xs={{order: 2, span: 12}} lg={{order: 1, span: 8}} className="contact-box">
                    <div>
                        <img src={twoCircle} alt="two circle" className='circle d-none d-sm-block'/>
                        <img src={threeCircle} alt="three circle" className='circle d-block d-sm-none'/>
                        <p className='heading2'>Canada</p>
                        <div className='info'>
                            <div className='office'>
                                <p><b>Designo Central Office</b></p>
                                <p>3886 Wellington Street</p>
                                <p>Toronto, Ontario M9C 3J5</p>
                            </div>
                            <div className='contact'>
                                <p><b>Contact</b></p>
                                <p>P : +1 253-863-8967</p>
                                <p>M : contact@designo.co</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={{order: 1, span: 12}} lg={{order: 2, span: 4}} className="pe-0 image-container">
                    <img src={require('../assets/locations/desktop/image-map-canada.png')} alt="canada" className='map'/>
                </Col>
            </Row>
            <Row>
                <Col lg={4} className="ps-0 image-container justify-content-lg-start">
                    <img src={require('../assets/locations/desktop/image-map-australia.png')} alt="australia" className='map'/>
                </Col>
                <Col lg={8} className="contact-box">
                    <div>
                        <img src={twoCircle} alt="two circle" className='circle d-none d-sm-block'/>
                        <img src={threeCircle} alt="three circle" className='circle d-block d-sm-none'/>
                        <p className='heading2'>Australia</p>
                        <div className='info'>
                            <div className='office'>
                                <p><b>Designo AU Office</b></p>
                                <p>19 Balonne Street</p>
                                <p>New South Wales 2443</p>
                            </div>
                            <div className='contact'>
                                <p><b>Contact</b></p>
                                <p>P : (02) 6720 9092</p>
                                <p>M : contact@designo.au</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={{order: 2, span: 12}} lg={{order: 1, span: 8}} className="contact-box">
                    <div>
                        <img src={twoCircle} alt="two circle" className='circle d-none d-sm-block'/>
                        <img src={threeCircle} alt="three circle" className='circle d-block d-sm-none'/>
                        <p className='heading2'>United Kingdom</p>
                        <div className='info'>
                            <div className='office'>
                                <p><b>Design Central Office</b></p>
                                <p>13 Colorado Way</p>
                                <p>Rhyd-y-fro SA8 9GA</p>
                            </div>
                            <div className='contact'>
                                <p><b>Contact</b></p>
                                <p>P : 078 3115 1400</p>
                                <p>M : contact@designo.uk</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={{order: 1, span: 12}} lg={{order: 2, span: 4}} className="pe-0 image-container">
                    <img src={require('../assets/locations/desktop/image-map-united-kingdom.png')} alt="united kingdom" className='map'/>
                </Col>
            </Row>
            <GetInTouch/>
        </>
    )
}