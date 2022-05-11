import styled from "styled-components";

const Styled = styled.div`
  background: var(--white);
  width: 80vw;
  min-height: 80vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    width: 95vw;
  }

  h2 {
    margin: 30px;
  }

  figure {
    margin-top: 30px;
    img {
      width: 200px;
      height: 60px;
    }
  }

  .conteudo {
    border: 1px solid var(--grey);
    width: 80%;
    height: 60%;
    padding: 20px;

    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;

export default Styled;
