import styled from "styled-components";

export const Styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const ContentStyled = styled.div`
  .imovel-info {
    margin: 5px 0;
  }

  .button {
    margin-top: 30px;
    width: 100%;
    text-align: center;
  }

  .error {
    border: 1px solid var(--red);
    
      color: var(--red);
    
  }
`;
