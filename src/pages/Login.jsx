import React, {useState, useEffect} from 'react'

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'
import '../styles/login.css'

import { Container, Row, Col } from 'reactstrap'

import logo from '../assets/images/LogoSmima.svg'
import iconGoogle from '../assets/images/icon-google.svg'
import iconOutlook from '../assets/images/icon-outlook.svg'
import iconFacebook from '../assets/images/icon-facebook.svg'

const Login = () => {

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return <Helmet title={'Login'}>
    <section className='login__section'>
      <Container>
        <Row>
          <Col lg='mb-2' className='text-left'>
            <div className='login__card' >
                <img src={logo} alt="" class='logoIcon'/>
                <h2 className='login__title'>Login</h2>

                <h4>E-mail</h4>
                <input className='login__input' placeholder='exemplo@gmail.com' required></input>

                <h4 htmlFor="standard-adornment-password">Senha</h4>
                <input
                className='login__input'
                placeholder='Digite sua senha'
                />
                <h6><a>Esqueceu a senha?</a></h6>

                <button className='login__button'>Entrar</button>

                <h5 className='login__text'>ou continue com</h5>

                <div className='login__iconsEmail'>
                  <button className='login__buttonEmail'><img src={iconGoogle} alt="" class='iconEmail'/></button>
                  <button className='login__buttonEmail'><img src={iconOutlook} alt="" class='iconEmail'/></button>
                  <button className='login__buttonEmail'><img src={iconFacebook} alt="" class='iconEmail'/></button>
                </div>

                <h5 className='login__text'>Não tem uma conta ainda? <a className='login__textLink' href='/Signup'>Registre-se gratuitamente.</a></h5>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login