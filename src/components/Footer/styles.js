import styled from "styled-components";

export const Rodape = styled.footer`
  background-color: #ecebff;
  margin-top: -140px;
  padding-bottom: 37px;
  padding: 233px 2.5% 0;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: auto;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    max-width: 650px;
  }
  @media (max-width: 767px) {
    align-items: center;
  }
`;
export const Text1 = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #2f2e41;
  padding-bottom: 12px;
`;
export const Ul = styled.ul`
  list-style: none;
`;
export const ListaLink = styled.a`
  text-decoration: none;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #717082;
  padding-top: 8px;
`;
export const Coluna = styled.div`
  max-width: 101px;
  margin-right: 82px;

  @media (max-width: 767px) {
    flex-direction: column;
    padding-bottom: 20px;
    margin-right: 70px;
  }

  &:last-child {
    margin-right: 0;
    max-width: 120px;

    @media (max-width: 767px) {
      margin-right: 55px;
    }
  }
`;
export const Social = styled.div`
  margin-right: 6px;
  width: 100%;

  a {
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
export const RodapePeq = styled.div`
  justify-content: space-between;
  display: flex;
  max-width: 1280px;
  margin: auto;
  margin-top: 92px;
  padding-bottom: 37px;

  @media (max-width: 1200px) {
    margin-left: 20px;

    &:last-child {
      margin-right: 20px;
    }
  }

  @media (max-width: 991px) {
    max-width: 700px;
  }
`;
export const Text2 = styled.p`
  color: #9893a3;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`;
