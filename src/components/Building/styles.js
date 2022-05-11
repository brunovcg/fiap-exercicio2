import styled from "styled-components";

const Styled = styled.article`
  margin: 10px 0;
  padding: 10px;
  background-color: var(--light-grey);
  display: flex;
  justify-content: space-around;

  .info {
    width: 70%;
  }

  .icons {
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: space-around;
    font-size: 30px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export default Styled;
