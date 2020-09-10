import styled from 'styled-components'

import AppSecreenBG from '@/common/assets/images/app/get-app/get-app-bg.png'

const AppScreenSctionWrapper = styled.section`
  padding: 130px 0 110px 0;
  background: url(${AppSecreenBG}) no-repeat;
  background-size: cover;
  background-position: center;

  .view-more-button {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .app__screen__slider {
    .slick-dots {
      right: -103%;
      bottom: 180px;
      width: auto;
      z-index: 999;
      li {
        width: 115px;
        height: 195px;
        margin: 0 8px;
        transition: all 0.3s ease-in;
        img {
          max-width: 100%;
        }
      }
      li.slick-active {
        box-shadow: -1px 25px 17px #b8b7b7;
      }
    }
  }

  .slick-slide {
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    opacity: 0.3;
    transition: all 300ms ease-in;
    transform: scale(0.9);
    cursor: pointer;
    &.slick-current.slick-active {
      opacity: 1;
      transform: scale(1);
    }
    &:hover {
      opacity: 1;
    }
  }

  .slick-arrow {
    border: none;
    position: absolute;
    top: -26%;
    right: 20%;
    background: none;
    font-size: 50px;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
      opacity: 1;
      color: ${(props) => props.theme.primaryColor};
    }
  }

  .slick-prev-icon {
    right: 25%;
  }
  @media only screen and (max-width: 912px) {
    padding: 130px 0 200px 0;
    .slick-arrow {
      top: auto;
      bottom: -100px;
      right: 42%;
    }
    .slick-prev-icon {
      right: 50%;
    }
  }
  @media only screen and (max-width: 568px) {
    .section-title-block {
      text-align: center;
      h4 {
        width: 100%;
      }
      img {
        display: none;
      }
    }
    .view-more-button {
      display: none;
    }
  }
  @media only screen and (max-width: 480px) {
    .slick-slide {
      img {
        margin: 0 auto;
      }
    }
    .slick-arrow {
      right: 37%;
    }
    .slick-prev-icon {
      right: 50%;
    }
  }
`

export default AppScreenSctionWrapper
