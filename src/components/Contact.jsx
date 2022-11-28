import { Col, Form, Row, Button } from "react-bootstrap";
import circle from '../assets/contact/desktop/bg-pattern-hero-desktop.svg'
import error from '../assets/contact/desktop/icon-error.svg'
import Countries from "./Countries";
import '../sass/contact.scss'

export default function Contact() {
    return(
        <>
            <Row id="contact-container">
                <Col id="contact-text">
                    <img src={circle} alt="circle"/>
                    <Col md={8}>
                        <p className="heading1">Contact Us</p>
                        <p>Ready to take it to the next level? Let&#8217;s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that&#8217;s relatable to your users, drop us a line.</p>
                    </Col>
                </Col>
                <Col>
                    <Form>
                        <Form.Group as={Row}>
                            <Col>
                                <Form.Control type="text" placeholder="Name"/>
                            </Col>
                            <Col md={1} className="errorBox">
                                <img src={error} alt="error icon"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col>
                                <Form.Control type="text" placeholder="Email Address"/>
                            </Col>
                            <Col md={1} className="errorBox">
                                <img src={error} alt="error icon"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col>
                                <Form.Control type="text" placeholder="Phone"/>
                            </Col>
                            <Col md={1} className="errorBox">
                                <img src={error} alt="error icon"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col>
                                <Form.Control as={"textarea"} placeholder="Message"/>
                            </Col>
                            <Col md={1} className="errorBox-textarea">
                                <img src={error} alt="error icon"/>
                            </Col>
                        </Form.Group>
                        <Row id="form-button">
                            <Col>
                                <Button>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Countries/>
        </>
    )
}