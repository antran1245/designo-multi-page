import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import GetInTouch from "./GetInTouch";
import '../sass/design.scss'

export default function Design({data, designs}) {
    const navigate = useNavigate()
        window.scrollTo(0, -100)
    useEffect(() => {

    }, [])

    const transition = (page) => {
        navigate(`/${page.toLowerCase().split(" design")[0]}`)
    }
    return(
        <>
            <span id="leaf-image-left"></span>
            <Row className="peach-box design-box">
                <Col md={6}>
                    <p className="heading1">Web Design</p>
                    <p>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
                </Col>
            </Row>
            <Row id="cards">
                {data.map((item, index) => {
                return <Col md={4} key={index}>
                    <Card className="h-100">
                        <Card.Img variant="top" src={require(`../assets${item.img}`)}/>
                        <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.info}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                })}
            </Row>
            <Row id="other-designs">
                {designs.map((item, index) => {
                    return <Col key={index}>
                        <Card onClick={() => transition(item.title)}>
                            <Card.Img src={require(`../assets/home/desktop/${item.img}`)}/>
                            <Card.ImgOverlay>
                                <Card.Title className="heading1">{item.title}</Card.Title>
                                <Card.Text>VIEW PROJECTS <span>&#8250;</span></Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                })}
            </Row>
            <GetInTouch/>
        </>
    )
}