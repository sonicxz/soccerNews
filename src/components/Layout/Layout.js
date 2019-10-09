import React from 'react';
import AUX from '../../HOC/Auxiliary/Auxiliary';
import LayoutCSS from './Layout.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


// Layout Component as the name says is for setting the layout for the main app
const Layout = (attri) => {

    return (
        <AUX>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#home">SoccerWorld</Navbar.Brand>
                <Navbar.Toggle aria-controls="NavBar-News" />
                <Navbar.Collapse id="NavBar-News">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#news">News</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <main className={'container-fluid ' + LayoutCSS.Layout} id='news' >{attri.children}</main>
        
        </AUX>
    )
}
export default Layout;