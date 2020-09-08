import React from 'react'

import { Container, Row, Col } from '@/common/reusecore/Layout'
import SectionTitle from '@/common/reusecore/SectionTitle'
import Button from '@/common/reusecore/Button'
import VintageBox from '@/common/reusecore/VintageBox'
import ParticleComponent from '@/common/reusecore/Particle'

import { FaPlay, FaDownload } from 'react-icons/fa'

import BannerSectionWrapper from './banner.style'
import imgHero from '@/common/assets/images/app/hero/mobile-screen.png'
const BannerModern = () => {
  return (
    <BannerSectionWrapper>
      <ParticleComponent />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col sm={7} md={6}>
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h1>
                Make your own Food Delivery App with <span>Food Star</span>
              </h1>
            </SectionTitle>
            <p>
              Food Star is a modern, well-crafted Food Delivery React Native App
              Template that can help create a next hit app in Food Delivery
              industry
            </p>
            <VintageBox right={true} vintageOne={true}>
              <Button className="banner-btn one">
                <FaDownload className="icon-left" />
                Buy Now
              </Button>
              <Button className="banner-btn two">
                <FaPlay className="icon-left" /> Watch Preview
              </Button>
            </VintageBox>
          </Col>
          <Col sm={5} md={6}>
            <img src={imgHero} className="hero-img" alt="prime-app hero" />
          </Col>
        </Row>
      </Container>
    </BannerSectionWrapper>
  )
}

export default BannerModern
