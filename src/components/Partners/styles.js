import styled from "styled-components";
export const Logotipos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: auto;
  margin-top: 120px;
  margin-bottom: 220px;

  @media (max-width: 991px) {
    margin-bottom: 120px;
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;
    margin-right: 20px;
    margin-top: 60px;

    img {
      &:first-child,
      &:last-child {
        display: none;
      }
    }
  }
`;
