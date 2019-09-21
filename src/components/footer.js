import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import Logo from './logo'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center'>
            <Logo />
            <p className='small text-muted'>
              Copyright © 2019 Tech Monday. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>

  );
}

export default Footer;