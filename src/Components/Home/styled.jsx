import styled from "styled-components";

export const BackgroundHome = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #000;
`;

export const HomeContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  display: flex;
`;

export const SetaContainer = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 5.1rem;
  height: 5.5rem;
  bottom: 0%;
  left: 50%;
  right: 50%;
`;

export const Seta = styled.div`
  position: absolute;

  width: 3.1rem;
  height: 0.5rem;
  opacity: 0;
  transform: scale(0.3);
  -webkit-animation: move 3s ease-out infinite;
  animation: move 3s ease-out infinite;
  :first-child {
    -webkit-animation: move 3s ease-out 1s infinite;
    animation: move 3s ease-out 1s infinite;
  }
  :nth-child(2) {
    -webkit-animation: move 3s ease-out 2s infinite;
    animation: move 3s ease-out 2s infinite;
  }
  :before,
  :after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    background: #fff;
  }
  :before {
    left: 0;
    transform: skewY(30deg);
  }
  :after {
    right: 0;
    width: 50%;
    transform: skewY(-30deg);
  }
  @-webkit-keyframes move {
    25% {
      opacity: 1;
    }
    33.3% {
      opacity: 1;
      transform: translateY(2.28rem);
    }
    66.6% {
      opacity: 1;
      transform: translateY(3.12rem);
    }
    100% {
      opacity: 0;
      transform: translateY(4.8rem) scale(0.5);
    }
  }

  @keyframes move {
    25% {
      opacity: 1;
    }
    33.3% {
      opacity: 1;
      transform: translateY(2.28rem);
    }
    66.6% {
      opacity: 1;
      transform: translateY(3.12rem);
    }
    100% {
      opacity: 0;
      transform: translateY(4.8rem) scale(0.5);
    }
  }
`;
