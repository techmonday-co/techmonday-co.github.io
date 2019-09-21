// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

import Logo from './logo';

const Header = ({ siteTitle }) => (
  <header>
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/"><Logo /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/page-2">Screencasts</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
