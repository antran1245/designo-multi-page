import { Container, Nav, Navbar } from 'react-bootstrap';
import '../sass/navigation.scss'

export default function Navigation() {
    return(
        <Navbar expand="md">
            <Container>
                <Navbar.Brand><img src={require('../assets/shared/desktop/logo-dark.png')} alt="logo dark"/></Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-togglers'/>
                <Navbar.Collapse id='navbar-togglers'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='#'>OUR COMPANY</Nav.Link>
                        <Nav.Link href='#'>LOCATIONS</Nav.Link>
                        <Nav.Link href='#'>CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}