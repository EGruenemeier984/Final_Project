import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
    return (
        <Navbar  bg="light" expand="lg">
            <Navbar.Brand href="#home">Cruise Lookup</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/ships">Ships</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Port Schedules</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Itineraries</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">How busy is the Port?</NavDropdown.Item>
                <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">About</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;