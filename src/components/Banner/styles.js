import styled from "styled-components";
export const Bloco = styled.div`
  max-width: 900px;
  background: #2f2e41;
  border-radius: 2px;
  margin: auto;
  position: relative;
`;

export const Azul = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 84px;

  @media (max-width: 991px) {
    padding: 50px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 30px;
  }
`;

export const H4 = styled.h4`
  font-weight: bold;
  font-size: 50px;
  line-height: 56.5px;
  color: #ffffff;
  max-width: 390px;

  @media (max-width: 767px) {
    margin-bottom: 30px;
    font-size: 40px;
    line-height: 45px;
  }
`;
