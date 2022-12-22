import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import facebook from '../assets/shared/desktop/icon-facebook.svg'
import youtube from '../assets/shared/desktop/icon-youtube.svg'
import twitter from '../assets/shared/desktop/icon-twitter.svg'
import pinterest from '../assets/shared/desktop/icon-pinterest.svg'
import instagram from '../assets/shared/desktop/icon-instagram.svg'
import '../sass/footer.scss'

export default function Footer() {
    const navigate = useNavigate()
    const transition = (page) => {
        window.scrollTo({behavior: 'smooth', top: -100})
        navigate(`/${page}`)
    }
    return(
        <div id="footer">
            <Container>
                <Row className='nav'>
                    <div className='image-container'>
                        <img src={require('../assets/shared/desktop/logo-light.png')} alt="logo light" onClick={() => transition('')}/>
                    </div>
                    <div className='nav-links'>
                            <p onClick={() => transition('about')}>OUR COMPANY</p>
                            <p onClick={() => transition('locations')}>LOCATIONS</p>
                            <p onClick={() => transition('contact')}>CONTACT</p>
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
                    <Col id='links'>
                        <img src={facebook} alt="facebook"/>
                        <img src={youtube} alt="youtube"/>
                        <img src={twitter} alt="twitter"/>
                        <img src={pinterest} alt="pinterest"/>
                        <img src={instagram} alt="instagram"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}