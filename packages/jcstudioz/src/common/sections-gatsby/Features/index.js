import React from 'react'

import { Container, Row, Col } from '@/common/reusecore/Layout'
import SectionTitle from '@/common/reusecore/SectionTitle'

import Icon1 from '@/common/assets/images/app/features/01.svg'
import Icon2 from '@/common/assets/images/app/features/02.svg'
import Icon3 from '@/common/assets/images/app/features/03.svg'
import Icon4 from '@/common/assets/images/app/features/04.svg'
import Icon5 from '@/common/assets/images/app/features/05.svg'
import Icon6 from '@/common/assets/images/app/features/06.svg'

import FeturesSectionWrapper from './fetures.style'

const Features = () => {
  return (
    <FeturesSectionWrapper id="features">
      <Container fullWidthSM>
        <SectionTitle UniWidth="65%">
          <h4>Amazing Features</h4>
          <h2>
            <span>Some of the best features </span> you find in FoodStar.
          </h2>
        </SectionTitle>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block v1">
              <div className="fetures-icon-block">
                <img src={Icon1} alt="img" />
              </div>
              <h3>Tons Of Amazing Components</h3>
              <p>
                Provide UI KIT to build a complete Food Delivery app with total
                of 25+ sample screens and 20+ ready-to-use components
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block v2">
              <div className="fetures-icon-block">
                <img src={Icon2} alt="img" />
              </div>
              <h3>Support Dark Theme</h3>
              <p>
                Switch between the dark and the light theme as per your user's
                preference.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block v2">
              <div className="fetures-icon-block">
                <img src={Icon4} alt="img" />
              </div>
              <h3>Seamless Cross-Platform</h3>
              <p>
                Save time writing the code one time and it will be automatically
                converted to native iOS and Android code.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block v1">
              <div className="fetures-icon-block">
                <img src={Icon3} alt="img" />
              </div>
              <h3>Built With Latest Technology</h3>
              <p>
                FoodStar is a fully coded app template built over the latest
                version of React Native, TypeScript to allow you to create high
                performance and beautiful Food Delivery mobile apps
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block v2">
              <div className="fetures-icon-block">
                <img src={Icon6} alt="img" />
              </div>
              <h3>Easy To Customize</h3>
              <p>
                Built-in theming system and all components made with pure React
                Native allow you to easily customize it for your business
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block v1">
              <div className="fetures-icon-block">
                <img src={Icon5} alt="img" />
              </div>
              <h3>Documentation</h3>
              <p>
                A detailed documentation for guiding how to setup and run the
                source code will be included. Also all components come with
                their own description and examples of how to use them
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </FeturesSectionWrapper>
  )
}

export default Features
