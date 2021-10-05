import styled from "styled-components";

export const Ghost = styled.img`
  width: 100%;

  animation: float 6s ease-in-out infinite;

  @media (max-width: 320px) {
    width: 75%;
  }

  @media (max-width: 480px) {
    width: 75%;
  }

  @media (max-width: 600px) {
    width: 75%;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const Ghost2 = styled.img`
  width: 100%;
  margin-left: -160px;

  @media (max-width: 320px) {
    width: 70%;
    margin-left: -80px;
  }

  @media (max-width: 480px) {
    width: 75%;
    margin-left: -130px;
  }

  @media (max-width: 600px) {
    width: 75%;
    margin-left: -135px;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
