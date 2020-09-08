import styled from 'styled-components'

import Vintage1 from '@/common/assets/images/app/features/vintage-1.png'
import Vintage2 from '@/common/assets/images/app/features/vintage-2.png'

const FeturesSectionWrapper = styled.section`
  padding: 95px 0 50px 0;

  .fetures-icon-block {
    height: 70px;
    width: 70px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    position: relative;
    border: 2px solid white;
    border-radius: 50%;
    transition: all 1s;
    img {
      display: block;
      margin: 0 auto;
    }
  }
  .fetures-block {
    .fetures-icon-block {
      &:before {
        position: absolute;
        display: inline-block;
        top: -3px;
        right: 0px;
        height: 70px;
        width: 70px;
        content: '';
        border-radius: 50%;
        z-index: -1;
        opacity: 0;
        transition: all 0.3s linear;
      }
    }
    &:hover {
      .fetures-icon-block {
        border-color: ${(props) => props.theme.primaryHoverColor};
      }
    }
    &.v1 {
      .fetures-icon-block {
        &:before {
          background: url(${Vintage1});
        }
      }
    }
    &.v2 {
      .fetures-icon-block {
        &:before {
          background: url(${Vintage2});
        }
      }
    }

    h3 {
      font-size: 22px;
      margin-bottom: 15px;
      font-weight: 600;
      line-height: 30px;
    }
    p {
      margin: 0 0 50px 0;
      font-weight: 300;
    }
  }
  @media only screen and (max-width: 912px) {
    padding: 80px 0 0px 0;
  }
  @media only screen and (max-width: 760px) {
    padding: 80px 0 50px 0;
  }
  @media only screen and (max-width: 568px) {
    .fetures-block {
      text-align: center;
    }
    .fetures-icon-block {
      margin: 0 auto 25px auto;
    }
  }
`

export default FeturesSectionWrapper
