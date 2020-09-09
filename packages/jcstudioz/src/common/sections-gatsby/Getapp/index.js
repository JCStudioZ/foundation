import React from 'react'
import { Link } from 'gatsby'

import { Container, Row, Col } from '@/common/reusecore/Layout'
import { DiAppstore } from 'react-icons/di'
import { FaGooglePlay } from 'react-icons/fa'

import AppSecreenImage from '@/common/assets/images/app/get-app/get-app-screen.png'
import particle1 from '@/common/assets/images/app/particle/09.png'
import particle2 from '@/common/assets/images/app/particle/10.png'
import particle3 from '@/common/assets/images/app/particle/11.png'
import particle4 from '@/common/assets/images/app/particle/13.png'

import GetAppSectionWrap from './getAppSection.style'

const GetApp = () => {
  return (
    <GetAppSectionWrap>
      <img className="section__particle one" src={particle1} alt="img" />
      <img className="section__particle two" src={particle2} alt="img" />
      <img className="section__particle three" src={particle3} alt="img" />
      <img className="section__particle four" src={particle4} alt="img" />
      <Container>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <div className="getapp-block">
              <h3>Try before you buye</h3>
              <p>
                Any F&B startup is planning to kick start their own app? Let’s
                make it easier with FOOD STAR template. Ready-made with the
                latest technology and for sure will step up your app game and
                make it less than a pain in the ass with very detailed
                instruction.
              </p>
              <div className="btn-block">
                <Link to="#" className="getapp-btn apl-btn">
                  <DiAppstore />
                  <p>
                    Check it out on
                    <span>Apple TestFlight</span>
                  </p>
                </Link>

                <Link to="#" className="getapp-btn">
                  <FaGooglePlay />
                  <p>
                    Download it now
                    <span>Android APK File</span>
                  </p>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="getapp-thumb">
              <img src={AppSecreenImage} alt="get the app" />
            </div>
          </Col>
        </Row>
      </Container>
    </GetAppSectionWrap>
  )
}

export default GetApp
