import React from 'react'
import { Link } from 'gatsby'

import { Container, Row, Col } from '@/common/reusecore/Layout'
import { FaAndroid, FaAppStoreIos } from 'react-icons/fa'

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
              <h3>Try before you buy</h3>
              <div className="btn-block">
                <Link
                  target="_blank"
                  to="https://testflight.apple.com/join/YlfHiibQ"
                  className="getapp-btn ios"
                >
                  <FaAppStoreIos />
                  <p>
                    Check it out on
                    <span>Apple TestFlight</span>
                  </p>
                </Link>

                <Link
                  target="_blank"
                  to="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-templa-198db.appspot.com/o/food-star-app.apk?alt=media&token=c59d70c0-45a2-4699-9ce2-be4666d274d2"
                  className="getapp-btn android"
                >
                  <FaAndroid />
                  <p>
                    Download and install
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
