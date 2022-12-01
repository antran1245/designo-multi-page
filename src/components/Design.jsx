import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import GetInTouch from "./GetInTouch";
import '../sass/design.scss'

export default function Design({title, detail, data, designs}) {
    const navigate = useNavigate()
    const transition = (page) => {
        window.scrollTo(0, -100)
        navigate(`/${page.toLowerCase().split(" design")[0]}`)
    }
    return(
        <>
            <span id="leaf-image-left"></span>
            <Row className="peach-box design-box">
                <Col lg={8}>
                    <p className="heading1">{title}</p>
                    <p>{detail}</p>
                </Col>
            </Row>
            <Row id="cards">
                {data.map((item, index) => {
                return <Col xs={11} md={12} lg={4} key={index}>
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
                    return <Col xs={11} md={12} lg={6} key={index}>
                        <Card onClick={() => transition(item.title)}>
                            <Card.Img src={require(`../assets/home/desktop/${item.img}`)} className="d-none d-lg-block"/>
                            <Card.Img src={require(`../assets/home/tablet/${item.img === 'image-web-design-small.jpg'? 'image-web-design.jpg' : item.img}`)} className="d-none d-md-block d-lg-none"/>
                            <Card.Img src={require(`../assets/home/mobile/${item.img === 'image-web-design-small.jpg'? 'image-web-design.jpg' : item.img}`)} className="d-block d-md-none"/>
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