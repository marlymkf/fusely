import styled from "styled-components";
export const Content = styled.div`
  justify-content: space-between;
  display: flex;
  max-width: 1180px;
  margin: auto;
  margin-right: 49px;

`;

export const Left = styled.div`
  max-width: 489px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const H1 = styled.h1`
  color: #2f2e41;
  font-weight: bold;
  font-size: 86px;
  line-height: 88px;
  margin: 30px 0px;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    font-size: 60px;
    line-height: 60px;
  }
`;

export const Texto = styled.p`
  color: #9893a3;
  font-weight: normal;
  font-size: 20px;
  line-height: 34px;
  margin: 30px 0;
`;

export const Right = styled.div`
  width: 55%;

  @media (max-width: 991px) {
    display: none;
  }
`;
