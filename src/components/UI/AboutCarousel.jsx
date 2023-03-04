import React, { useState } from 'react'
import { Container, Row, Col, Carousel } from 'reactstrap'
// import vasoPlanta from '../assets/images/vaso-planta.svg'

function About() {
  const [aboutText, setAboutText] = useState(1);

  function aboutCarousel() {
    if (aboutText === 1) {
      setAboutText(2);
    } else if (aboutText === 2) {
      setAboutText(3);
    } else {
      setAboutText(1);
    }
  }

  let paragraph;

  if (aboutText === 1) {
    paragraph = (
      <p className='about__subtitle' id='about__info'>
        Somos uma equipe de apaixonados por plantas e pela natureza, que acredita que a conexão com o meio ambiente é essencial para uma vida equilibrada e saudável. Além de oferecermos pacotes de assinatura de plantas, nosso objetivo é promover a conscientização sobre a importância da preservação da natureza e incentivar práticas sustentáveis. Queremos inspirar as pessoas a cuidar de suas plantas e a cuidar do planeta.
      </p>
    );
  } else if (aboutText === 2) {
    paragraph = (
      <p className='about__subtitle' id='about__info'>
        Nossa empresa se preocupa com a sustentabilidade ecológica e social, por isso, nossos produtos são cultivados organicamente e adquiridos de pequenos produtores locais.
      </p>
    );
  } else {
    paragraph = (
      <p className='about__subtitle' id='about__info'>
        Acreditamos que nosso negócio é uma tendência no mercado e estamos comprometidos em fornecer benefícios exclusivos em cada plano de assinatura, além de oferecer um serviço de atendimento ao cliente de alta qualidade junto com nosso aplicativo de dispositivo móvel para a interação com os clientes em uma comunidade.
      </p>
    );
  }

  return (
    <section className='about__section'>
      <Container>
        <Row>
          <Col lg='12' className='text-left'>
            <div className='about__card'>
              <Col className='text-center'>
                {/* <img src={vasoPlanta} alt='' className='vaso__about' id='about__plant' /> */}
              </Col>
              <Col>
                <h2 className='about__title'>Sobre nós</h2>
                {paragraph}
                <button className='buy__btn store__btn' onClick={aboutCarousel}>
                  Mudar
                </button>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
