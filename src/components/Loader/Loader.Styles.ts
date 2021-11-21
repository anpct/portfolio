import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.gradientBackground};
  z-index: 99999999999999;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -125%);
  background-color: ${(props) => props.theme.background};
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.background};
  font-size: 25px;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);

  @keyframes ldio-ueyahqym8tm {
    0% {
      opacity: 1;
      backface-visibility: hidden;
      transform: translateZ(0) scale(1.5, 1.5);
    }
    100% {
      opacity: 0;
      backface-visibility: hidden;
      transform: translateZ(0) scale(1, 1);
    }
  }
  .ldio-ueyahqym8tm div > div {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) => props.theme.background};
    animation: ldio-ueyahqym8tm 1s linear infinite;
  }
  .ldio-ueyahqym8tm div:nth-child(1) > div {
    left: 122px;
    top: 96px;
    animation-delay: -0.9s;
  }
  .ldio-ueyahqym8tm > div:nth-child(1) {
    transform: rotate(0deg);
    transform-origin: 126px 100px;
  }
  .ldio-ueyahqym8tm div:nth-child(2) > div {
    left: 117px;
    top: 111px;
    animation-delay: -0.8s;
  }
  .ldio-ueyahqym8tm > div:nth-child(2) {
    transform: rotate(36deg);
    transform-origin: 121px 115px;
  }
  .ldio-ueyahqym8tm div:nth-child(3) > div {
    left: 104px;
    top: 121px;
    animation-delay: -0.7s;
  }
  .ldio-ueyahqym8tm > div:nth-child(3) {
    transform: rotate(72deg);
    transform-origin: 108px 125px;
  }
  .ldio-ueyahqym8tm div:nth-child(4) > div {
    left: 88px;
    top: 121px;
    animation-delay: -0.6s;
  }
  .ldio-ueyahqym8tm > div:nth-child(4) {
    transform: rotate(108deg);
    transform-origin: 92px 125px;
  }
  .ldio-ueyahqym8tm div:nth-child(5) > div {
    left: 75px;
    top: 111px;
    animation-delay: -0.5s;
  }
  .ldio-ueyahqym8tm > div:nth-child(5) {
    transform: rotate(144deg);
    transform-origin: 79px 115px;
  }
  .ldio-ueyahqym8tm div:nth-child(6) > div {
    left: 70px;
    top: 96px;
    animation-delay: -0.4s;
  }
  .ldio-ueyahqym8tm > div:nth-child(6) {
    transform: rotate(180deg);
    transform-origin: 74px 100px;
  }
  .ldio-ueyahqym8tm div:nth-child(7) > div {
    left: 75px;
    top: 81px;
    animation-delay: -0.3s;
  }
  .ldio-ueyahqym8tm > div:nth-child(7) {
    transform: rotate(216deg);
    transform-origin: 79px 85px;
  }
  .ldio-ueyahqym8tm div:nth-child(8) > div {
    left: 88px;
    top: 71px;
    animation-delay: -0.2s;
  }
  .ldio-ueyahqym8tm > div:nth-child(8) {
    transform: rotate(252deg);
    transform-origin: 92px 75px;
  }
  .ldio-ueyahqym8tm div:nth-child(9) > div {
    left: 104px;
    top: 71px;
    animation-delay: -0.1s;
  }
  .ldio-ueyahqym8tm > div:nth-child(9) {
    transform: rotate(288deg);
    transform-origin: 108px 75px;
  }
  .ldio-ueyahqym8tm div:nth-child(10) > div {
    left: 117px;
    top: 81px;
    animation-delay: 0s;
  }
  .ldio-ueyahqym8tm > div:nth-child(10) {
    transform: rotate(324deg);
    transform-origin: 121px 85px;
  }
  .loadingio-spinner-spin-vsrxwg2jhrh {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-ueyahqym8tm {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  .ldio-ueyahqym8tm div {
    box-sizing: content-box;
  }
`;
