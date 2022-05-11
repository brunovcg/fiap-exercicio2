import Styled from "./styles.js";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useRef } from "react";
import { useModal } from "../../provider/modal";
import { useBD } from "../../provider/bancoDeDados";

function Login() {
  const navigate = useNavigate();
  const { openModal } = useModal();
  const { doesProprietarioExists } = useBD();

  const userRef = useRef(null);
  const passwordRef = useRef(null);

  const move = (id) => {
    if (doesProprietarioExists(id) === "" || !passwordRef.current?.inputValue) {
      openModal("Atenção", "Usuário ou senha em branco", []);
    } else if (!doesProprietarioExists(id)) {
      openModal("Atenção", "Esse usuário não existe", []);
    } else {
      navigate(`/${id}`);
    }
  };

  const conteudo = (
    <>
      <div>
        <Input label="Código de Usuário" ref={userRef} type="number" />
        <Input label="Senha" ref={passwordRef} type="password"/>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button onClick={() => move(userRef.current?.inputValue)}>
            Login
          </Button>
        </div>
      </div>

      <footer
        style={{
          border: "1px solid var(--yellow)",
          marginTop: "80px",
          padding: "30px",
        }}
      >
        <h4 style={{ marginBottom: "30px" }}>Principais Atalhos</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Button backgroundColor="var(--red)" color="var(--white)" >
            IPTU
          </Button>
          <Button backgroundColor="var(--green)" color="var(--white)">
            Licitações
          </Button>
          <Button backgroundColor="var(--yellow)" color="var(--white)">
            Regulações
          </Button>
          <Button backgroundColor="var(--grey)" color="var(--white)">
            Covid-19
          </Button>
          <Button backgroundColor="var(--blue)" color="var(--white)">
            Notícias
          </Button>
        </div>
      </footer>
    </>
  );

  return (
    <Styled>
      <Content conteudo={conteudo} />
    </Styled>
  );
}

export default Login;
