import React from 'react';
import './footer.css'
import logo from '../../assets/images/eco-logo.png'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
          <div className="logo">
              <div>
                <h1 className='text-white'>Multimart</h1>
              </div>
          </div>
          <p className='footer__text mt-4'>Consequat reprehenderit eiusmod occaecat eiusmod exercitation dolore labore. Nulla voluptate cupidatat nulla excepteur deserunt proident cupidatat.</p>
          </Col>
          
          <Col lg='3'>
            <div className='footer__quick-link'>
              <h4 className='quick__links-title'>Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 footer__text'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0 footer__text'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 footer__text'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 footer__text'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='2'>
          <div className='footer__quick-link'>
              <h4 className='quick__links-title'>Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 footer__text'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0 footer__text'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 footer__text'>
                  <Link to='/ogin'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 footer__text'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='3'>
          <div className='footer__quick-link'>
              <h4 className='quick__links-title'>Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 footer__text'>
                  <span><i className='ri-map-pin-line'></i></span>
                  <p>123 ZindaBazar, Sylhet, Bangladesh</p>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 footer__text'>
                  <span><i className='ri-phone-line'></i></span>
                  <p>+0881234567890</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 footer__text'>
                <span><i className='ri-mail-line'></i></span>
                <p>example123@gmail.com</p>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className='footer__copyright'>Copyright {year} developed bby Muhibur Rahman. All rights reserved.</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer