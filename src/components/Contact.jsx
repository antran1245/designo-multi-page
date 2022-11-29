import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import circle from '../assets/contact/desktop/bg-pattern-hero-desktop.svg'
import mobileCircle from '../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg'
import error from '../assets/contact/desktop/icon-error.svg'
import Countries from "./Countries";
import '../sass/contact.scss'

const Contact = () => {
    // Display errors on form
    const [errors, setErrors] = useState({name: false, email: false, phone: false, message: false})
    const [form, setForm] = useState({name: "", email: "", phone: "", message: ""})

    const submitForm = (e) => {
        e.preventDefault()
        setErrors({name: form.name === "", email: form.email === "", phone: form.phone === "",  message: form.message === ""})
        if(form.name !== "" && form.email !== "" && form.phone !== "" && form.message !== "") {
            alert('Form submmited')
        }
    }
    return(
        <>
            <Row id="contact-container">
                <div className="circle-container d-block d-sm-none">
                    <img src={mobileCircle} alt="mobile circle"/>
                </div>
                <Col xs={12} md={8} lg={6} xl={6} id="contact-text">
                    <div className="circle-container d-none d-sm-block">
                        <img src={circle} alt="circle" width={"100%"}/>
                    </div>
                    <Col xs={12} lg={8}>
                        <p className="heading1">Contact Us</p>
                        <p>Ready to take it to the next level? Let&#8217;s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that&#8217;s relatable to your users, drop us a line.</p>
                    </Col>
                </Col>
                <Col xs={12} lg={6}>
                    <Form onSubmit={submitForm}>
                        <Form.Group as={Row}>
                            <Col>
                                <Form.Control type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
                            </Col>
                            {
                                errors.name?
                                <Col md={3} className="errorBox">
                                    <p>Can&#8217;t be empty</p>
                                    <img src={error} alt="error icon"/>
                                </Col> : null
                            }
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col>
                                <Form.Control type="text" placeholder="Email Address" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
                            </Col>
                            {
                                errors.email?
                                <Col md={3} className="errorBox">
                                    <p>Can&#8217;t be empty</p>
                                    <img src={error} alt="error icon"/>
                                </Col> : null
                            }
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col>
                                <Form.Control type="text" placeholder="Phone" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}/>
                            </Col>
                            {
                                errors.phone?
                                <Col md={3} className="errorBox">
                                    <p>Can&#8217;t be empty</p>
                                    <img src={error} alt="error icon"/>
                                </Col> : null
                            }
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col>
                                <Form.Control as={"textarea"} placeholder="Message" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}/>
                            </Col>
                            {
                                errors.message?
                                <Col md={3} className="errorBox">
                                    <p>Can&#8217;t be empty</p>
                                    <img src={error} alt="error icon"/>
                                </Col> : null
                            }
                        </Form.Group>
                        <Row id="form-button">
                            <Col>
                                <Button type="submit">
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

export default Contact;