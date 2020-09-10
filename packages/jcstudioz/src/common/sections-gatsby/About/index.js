import React from 'react'

import { Container, Row, Col } from '@/common/reusecore/Layout'
import SectionTitle from '@/common/reusecore/SectionTitle'

import imgAbout from '@/common/assets/images/app/about.png'
import particle1 from '@/common/assets/images/app/particle/05.png'
import particle2 from '@/common/assets/images/app/particle/06.png'

import AboutSectionWrapper from './about.style'

const About = () => {
  return (
    <AboutSectionWrapper id="about">
      <img className="section__particle one" src={particle1} alt="img" />
      <img className="section__particle two" src={particle2} alt="img" />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <img
              className="about-thumb"
              src={imgAbout}
              alt="This is about UNI-Prime"
            />
          </Col>
          <Col xs={12} sm={6} className="about-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              {' '}
              <h4>About us</h4>
              <h2>
                We’re a creative team that specializes in Premium Mobile
                Templates
              </h2>
            </SectionTitle>
            <p className="about-text text-one">
              We’re incredibly passionate about our work. Building on our
              experience, talent, skills and core values has made this team what
              it is today. A solid source for a strikingly beautiful premium
              mobile app template collection.
            </p>
            <p className="about-text text-two">
              Let's make your dream product possible with us!
            </p>
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  )
}

export default About
