import { Col, Container, Row } from 'react-bootstrap'
import '../sass/footer.scss'

export default function Footer() {
    return(
        <div id="footer" style={{height: "393px"}}>
            <Container>
                <Row className='nav'>
                    <img src={require('../assets/shared/desktop/logo-light.png')} alt="logo light"/>
                    <div>
                        <p>OUR COMPANY</p>
                        <p>LOCATIONS</p>
                        <p>CONTACT</p>
                    </div>
                </Row>
                <Row className='contact'>
                    <Col>
                        <div>
                            <p><b>Designo Central Office</b></p>
                            <p>3886 Wellington Street</p>
                            <p>Toronto, Ontario M9C 3J5</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p><b>Contact Us &#40;Central Office&#41;</b></p>
                            <p><b>P : +1 253-863-8967</b></p>
                            <p><b>M : contact@designo.co</b></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}