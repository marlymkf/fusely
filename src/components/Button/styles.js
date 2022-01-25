import styled from "styled-components";
export const Botao = styled.button`
  border: 1px solid #6c63ff;
  box-sizing: border-box;
  border-radius: 2px;
  background: #6c63ff;
  margin: 0px 8px;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  padding: 16px 30px;
  cursor: pointer;

  &.botao-1 {
    color: #6c63ff;
    background: #ffffff;
    padding: 16px 30px;
  }
  &.botao-2 {
    color: #6c63ff;
    background: #ffffff;
    padding: 16px 30px;
    margin-top: 30px;
  }
  &.botao-3 {
    padding: 16px 47px;
    background: #ffffff;
    color: #6c63ff;
    margin: 40px 0;
  }
  &.botao-4 {
    color: #6c63ff;
    background: #ffffff;
    padding: 16px 30px;
    max-width: 115px;
    height: 51px;
    margin-top: 24px;
  }
  &.botao-5 {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    margin: 0px 10px;
    padding: 16px 56px;
  }

  @media (max-width: 767px) {
    &.botao-1 {
      display: none;
    }
  }
`;
