import { Row, Col, Button } from "react-bootstrap";
import australia from '../assets/shared/desktop/illustration-australia.svg'
import canada from '../assets/shared/desktop/illustration-canada.svg'
import unitedKingdom from '../assets/shared/desktop/illustration-united-kingdom.svg'
import smallCircle from '../assets/shared/desktop/bg-pattern-small-circle.svg'
import '../sass/countries.scss'

const data = [
    {
        "img": canada,
        "name": "canada"
    },
    {
        "img": australia,
        "name": "australia"
    },
    {
        "img": unitedKingdom,
        "name": "united kingdom"
    }
]
export default function Countries() {
    return(
        <Row id="countries">
            {data.map((item, index) => {
                return <Col key={index} xs={12} lg={4}>
                            <Row>
                                <Col className="country-icon">
                                    <img src={smallCircle} alt="small circle" className="circle"/>
                                    <img src={item.img} alt={item.name} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{item.name.toUpperCase()}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button>SEE LOCATION</Button>
                                </Col>
                            </Row>
                        </Col>
            })}
        </Row>
    )
}