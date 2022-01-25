import styled from "styled-components";
export const Content = styled.div`
  justify-content: space-between;
  display: flex;
  max-width: 1180px;
  margin: auto;
  margin-top: 220px;
  margin-bottom:220px;

  @media (max-width: 991px) {
    flex-direction:column;
    margin-bottom: 110px;
  }

  @media (max-width: 767px) {
      margin-top: 60px;
      margin-bottom:60px;
  }

`;

export const Left = styled.div`
  /* width: 58%; */

  @media (max-width: 1200px) {
    max-width:55%;
  }
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
export const Right = styled.div`
  max-width: 400px;
 

  @media (max-width: 1200px) {
    max-width:%;
  }

  @media (max-width: 991px) {
   max-width: 100%
  }
`;


export const Texto = styled.p`
  font-size: 20px;
  line-height: 34px;
  color: #9893a3;
  margin-bottom: 24px;
`;
export const Text = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #2f2e41;
  position: relative;
  display: inline-block;

  &:before {
    content: "";
    width: calc(100% + 4px);
    height: 10px;
    background-color: rgba(197, 194, 255, 0.5);
    position: absolute;
    bottom: -2px;
    left: -2px;
    z-index: -1;
  }
`;