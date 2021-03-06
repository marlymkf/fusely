import styled from "styled-components";

export const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  margin-bottom: 80px;

  @media (max-width: 991px){
    margin-bottom:20px;
  }

  @media (max-width: 767px) {
    margin-bottom: 10px;
    padding: 16px 0px;

    &.active #hamburger {
      border-top-color: transparent;
    }
    &.active #hamburger::before {
      transform: rotate(135deg);
    }
    &.active #hamburger::after {
      transform: rotate(-135deg);
      top: -7px;
    }
    &.active .nav {
      height: calc(100% - 93px);
      visibility: visible;
      overflow-y: auto;
      padding: 0 2.7%;
    }
  }
`;

export const Hamburger = styled.span`
  @media (max-width: 767px) {
    border-top: 2px solid;
    width: 20px;
  }

  &::after,
  &::before {
    content: "";
    width: 20px;
    display: block;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }
`;
export const BtnMobile = styled.menu`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    padding: 0.5rem 8px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    gap: 0.5rem;
    color: #000;
    background: none;
    text-indent: -10000px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Lista = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin-left: 0px;

  li:first-child a {
    color: #2f2e41;
    border-bottom: 4px solid #9e99ff;
    padding-bottom: 10px;
  }

  @media (max-width: 767px) {
    display: block;
    position: absolute;
    width: 100%;
    top: 93px;
    right: 0;
    padding-left: 0;
    height: 0;
    transition: 0.6s;
    z-index: 1000;
    visibility: hidden;
    overflow-y: hidden;
    background: #ffffff;
  }
`;
export const ListaLink = styled.a`
  text-decoration: none;
  margin: 0 18px;
  font-size: 16px;
  line-height: 22px;
  color: #9893a3;

  @media (max-width: 767px) {
    font-size: 22px;
    line-height: 32px;
    padding-top: 30px;
    display: block;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    margin: 0;
  }
`;
