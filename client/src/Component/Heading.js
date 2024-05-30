import React from 'react';
import {useSelector} from "react-redux";
import firebase from "../firebase";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Heading() {
    const user = useSelector(state => state.user);
    const logoutHandler = () => {
        firebase.auth().signOut();
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">InuAttention</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/list"   style={{marginRight:"20px"}}>Image2Voice</Nav.Link>
                        {/*<Nav.Link href="/voice-clone"   style={{marginRight:"20px"}}>Voice Clone</Nav.Link>*/}
                        <Nav.Link href="/tutorial"   style={{marginRight:"20px"}}>Tutorial</Nav.Link>
                        <Nav.Link href="/faq"   style={{marginRight:"20px"}}>FAQ</Nav.Link>

                        {/*<Nav.Link href="/update"   style={{marginRight:"20px"}}>Update</Nav.Link>*/}
                    </Nav>
                        {user.accessToken ? (
                            <>
                                <NavDropdown.Divider />
                                <NavDropdown title={user.displayName} id="basic-nav-dropdown">
                                    {/*<NavDropdown.Item href="/">Profile</NavDropdown.Item>*/}
                                    <NavDropdown.Item href="/survey">Survey</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={() => logoutHandler()} href="/">
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <Nav.Link href="/login">Login</Nav.Link>
                        )}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Heading;