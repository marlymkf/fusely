import styled from "styled-components";
export const H3 = styled.h3`
  font-weight: bold;
  font-size: 60px;
  line-height: 64px;
  color: #2f2e41;
  margin-bottom: 90px;
  text-align: center;

  @media (max-width: 767px) {
    margin-bottom: 30px;
    font-size: 40px;
  }
`;
export const Coluna = styled.div`
  justify-content: space-between;
  display: flex;
  align-content: center;
  max-width: 1180px;
  margin: 40px auto;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  max-width: 363px;
  width: 33%;
  text-align: center;
  padding: 46px;
  margin: 0 22px;
  background: rgba(236, 235, 255, 0.3);
  border-radius: 2px;
  align-self: center;

  @media (max-width: 991px) {
    max-width: 300px;
    margin: 0;
    padding: 20px;
  }
  @media (max-width: 767px) {
    max-width: 100%;
    margin: 0;
    width: 100%;
    
  }
`;
export const Box1 = styled.div`
  max-width: 363px;
  width: 33%;
  text-align: center;
  padding: 70px;
  margin: 0px 22px;
  background: #6c63ff;
  border-radius: 2px;
  align-self: center;

  @media (max-width: 767px) {
    max-width: 100%;
    margin: 0;
    width: 100%;
  }

  @media (max-width: 991px) {
    max-width: 300px;
    margin: 0;
    padding: 20px;
  }

  @media (max-width: 767px) {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
`;
export const Text1 = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #717082;
  margin: 30px 0;
`;
export const Text5 = styled.p`
  margin-top: 40px;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #fff;
`;
export const Text0 = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  margin: 0 0 40px 0;
`;
export const Text2 = styled.p`
  font-weight: bold;
  font-size: 50px;
  line-height: 56px;
  color: #2f2e41;
  margin: 14px 0;
`;

export const Text3 = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #717082;
  margin: 14px 0;
`;
export const Text4 = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  margin: 14px 0;
`;
export const Valor = styled.span`
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  font-size: 50px;
  line-height: 56px;
`;
export const Mes = styled.span`
  color: #ffffff;
  text-decoration: none;
`;
export const Valor1 = styled.span`
  font-weight: bold;
  font-size: 50px;
  line-height: 56px;
  color: #2f2e41;
  margin: 40px 0;
`;
export const Mes1 = styled.span``;
export const List = styled.span``;
