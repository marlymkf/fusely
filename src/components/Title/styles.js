import styled from "styled-components";

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 60px;
  line-height: 64px;
  margin: 24px 0px;
  color: #2f2e41;
  margin-bottom: 24px;

  @media (max-width: 991px) {
    font-size: 68px;
    line-height: 88px;
    margin-top: 50px;
  }
  @media (max-width: 767px) {
    font-size: 40px;
    line-height: 44px;
    margin-bottom: 12px;
  }

  /* @media (max-width: 1366px) {
    font-size: 48px;
  } */
`;
