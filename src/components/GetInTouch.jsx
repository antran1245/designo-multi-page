import { Row, Button, Col } from 'react-bootstrap'
import '../sass/getintouch.scss'

export default function GetInTouch() {
    return(
        <Row id="peach-project-box" className='peach-box'>
            <Col xs={12} md={8} lg={6}>
                <Row>
                    <Col md={12} xl={8}>
                        <p className='heading2'>Let's talk about your project</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} xl={10}>
                        <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                    </Col>
                </Row>
            </Col>
            <Col md={5} className='d-flex justify-content-center justify-content-lg-end'>
                <Button>GET IN TOUCH</Button>
            </Col>
        </Row>
    )
}