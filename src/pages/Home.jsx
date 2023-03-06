import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../assets/data/products'

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css' 
import '../styles/clock.css' 
import '../styles/product-card.css'
import '../styles/about-carousel.css'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.svg'
import vasoPlanta from '../assets/images/vaso-planta.svg'
import plantaAbout from '../assets/images/Agave.svg'



import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'

import Clock from '../components/UI/Clock'

import AboutCarousel from '../components/UI/AboutCarousel'

import counterImg from '../assets/images/counter-timer-img.png'

const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])


  const year = new Date().getFullYear()

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'chair'
      );

    const filteredBestSaleProducts = products.filter(
      (item) => item.category === 'sofa'
      );

    const filteredMobileProducts = products.filter(
      (item) => item.category === 'mobile'
      );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === 'wireless'
      );

    const filteredPopularProducts = products.filter(
      (item) => item.category === 'watch'
      );

      setTrendingProducts(filteredTrendingProducts)
      setMobileProducts(filteredMobileProducts)
      setWirelessProducts(filteredWirelessProducts)
      setPopularProducts(filteredPopularProducts)

  }, []);

  return <Helmet title={'Home'}>
    <section className="hero__section">
      <Container>
        <Row>
            <div className='hero__content'>
              <p classname='hero__subtitle'>5% OFF no primeiro mês</p>
              <h2>Estar com nós, é apoiar a Natureza.</h2>
              <p>Descubra uma nova forma de se conectar com a natureza e<br/>
              cultivar um ambiente mais verde.</p>
                <motion.button whileTap={{scale: 1.03}}
                className="buy__btn">
                  <Link to='/shop'>Veja mais</Link>
                </motion.button>
                
            </div>
        </Row>
      </Container>
    </section>

    <section className='about__section'>
      <Container>
        <Row>
          <Col lg='12' className='text-left'>
             
            <div className='about__card' >
                    <img src={plantaAbout} alt="" class='planta__about'/>
                    <Col className='text-center'>
                      <img src={vasoPlanta} alt="" class='vaso__about' id= 'about__plant'/>
                    </Col>
                    <Col>
                        <h2 className='about__title'>Sobre nós</h2>
                        <p className='about__subtitle' id='about__info'>Somos uma equipe de apaixonados por plantas e pela natureza, que acredita que a conexão com o meio ambiente é essencial para uma vida equilibrada e saudável. Além de oferecermos pacotes de assinatura de plantas, nosso objetivo é promover a conscientização sobre a importância da preservação da natureza e incentivar práticas sustentáveis. Queremos inspirar as pessoas a cuidar de suas plantas e a cuidar do planeta.</p>
                        <button class="buy__btn store__btn" onClick={AboutCarousel}>Mudar</button>
                    </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Services/>

    <section className='trending__products'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Trending products</h2>
          </Col>
          <ProductsList data={trendingProducts}/>
        </Row>
      </Container>
    </section>

    {/* <section className='best__sales'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Best Sales</h2>
          </Col>

          <ProductsList data={bestSalesProducts} />
        </Row>
      </Container>
    </section>

    <section className='timer__count'>
      <Container>
        <Row>
          <Col lg='6' md='12' classname='count__down-col'>
          <div className='clock__top-content'>
            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
            <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
          </div>
            <Clock />

            <motion.button whileTap={{scale: 1.03}} className='buy__btn store__btn'>
              <Link to='/shop'>Visit Store</Link>
            </motion.button>
          </Col>

          <Col lg='6' md='12' className='text-end counter__img'>
            <img src={counterImg} alt=''/>
          </Col>
        </Row>
      </Container>
    </section> */}

    <section className='new_arrivals'>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>New Arrivals</h2>
          </Col>
          <ProductsList data={mobileProducts} />
          <ProductsList data={wirelessProducts} />
        </Row>
      </Container>
    </section>

    <section className='popular__category'>
      <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
    </section>
  </Helmet>
}

export default Home