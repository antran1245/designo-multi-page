import { Card, Col, Row } from "react-bootstrap";
import '../sass/design.scss'

export default function Design({data}) {
    return(
        <>
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
        </>
    )
}