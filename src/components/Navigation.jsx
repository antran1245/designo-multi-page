import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../sass/navigation.scss'

export default function Navigation() {
    const navigate = useNavigate()
    const transition = (page) => {
        navigate(`/${page}`)
    }

    return(
        <Navbar expand="md">
            <Container>
                <Navbar.Brand><img src={require('../assets/shared/desktop/logo-dark.png')} alt="logo dark" onClick={() => transition('')}/></Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-togglers'/>
                <Navbar.Collapse id='navbar-togglers'>
                    <Nav className='ms-auto'>
                        <Nav.Link onClick={() => transition('about')}>OUR COMPANY</Nav.Link>
                        <Nav.Link href='#'>LOCATIONS</Nav.Link>
                        <Nav.Link href='#'>CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}