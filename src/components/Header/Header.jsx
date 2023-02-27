import React, {useRef, useEffect} from 'react'

import { NavLink } from 'react-router-dom';
import './header.css'

import {motion} from 'framer-motion'

import logo from '../../assets/images/LogoSmima.svg'
import userIcon from '../../assets/images/user-icon.svg'
import heartLine from '../../assets/images/heart-line.svg'
import bagLine from '../../assets/images/bag-line.svg'
import menuLine from '../../assets/images/menu-line.svg'

import { Container, Row } from 'reactstrap';

const nav__links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },

]

const Header = () => {
  const headerRef = useRef(null)

  const menuRef = useRef(null)

  const stickyHeaderFunc = ()=> {
    window.addEventListener('scroll', ()=>{
      if(
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop
        > 80){
          headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc()

    return ()=> window.removeEventListener("scroll", stickyHeaderFunc)
  })

  const menuToggle = ()=> menuRef.current.classList.toggle('active__menu')

  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper">
          <div className="logo">
            <div>
              <img src={logo} alt="logo" /> 
            </div>
          </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {
                  nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "nav__active" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <img src={heartLine} alt="logo" /> 
                <span className="badge">2</span>
              </span>
              <span className="cart__icon">
                <img src={bagLine} alt="" /> 
                <span className="badge">2</span>
              </span>

              <span>
                <motion.img whileTap={{ scale:1.2 }} src={userIcon}
                alt="" />
              </span>
              <div className="mobile__menu">
              <span onClick={menuToggle}>
                <img src={menuLine} alt="logo" /> 
              </span>
            </div>
            </div>
        </div>
      </Row>
    </Container>
  </header>
};

export default Header;