import styled from "styled-components";

export const Blog = styled.div`
  justify-content: space-between;
  display: flex;
  max-width: 1180px;
  margin: auto;
  margin-top: 220px;
  align-items: center;
  margin-bottom: 90px;

  @media (max-width: 767px) {
    margin-top: 20px;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Articles = styled.div`
  justify-content: flex-start;
  display: flex;
  max-width: 1180px;
  margin: auto;
  margin-bottom: 220px;

  @media (max-width: 991px) {
    margin-bottom: 80px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 60px;
  }
`;

export const Article = styled.article`
  max-width: 363px;
  width: 33%;
  flex-direction: column;
  margin: 0 22px;

  @media (max-width: 767px) {
    max-width: 95%;
    width: 100%;
  }
  @media (max-width: 991px) {
    margin: 0 10px;
  }
`;
export const Texto1 = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: -1px;
  color: #2f2e41;
  margin: 26px 0px 6px;
`;
export const Texto2 = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #9893a3;
  max-width: 363.63px;
  margin-bottom: 26px;
`;
export const Texto3 = styled.a`
  color: #2f2e41;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  margin: 0px 2px;
  position: relative;
  display: inline-block;
  text-decoration: none;

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

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`;
