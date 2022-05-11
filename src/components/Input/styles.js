import styled from "styled-components";

const Styled = styled.div`
  margin: 10px 0;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  label {
    width: 25%;
    margin-right: 15px;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }

  input {
    width: 75%;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }

    ::placeholder {
      padding-left: 5px;
    }
  }
`;

export default Styled;
