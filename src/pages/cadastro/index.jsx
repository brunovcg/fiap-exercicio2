import { Styled, ContentStyled } from "./style.js";
import Content from "../../components/Content";
import { useRef, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useBD } from "../../provider/banco_de_dados";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const enderecoRef = useRef(null);
  const cepRef = useRef(null);
  const inscricaoRef = useRef(null);
  const proprietarioRef = useRef(null);
  const [proprietario, setProprietario] = useState("");
  const navigate = useNavigate();

  const { bancoCidadao, createImovel, bancoImovel } = useBD();

  const handleCadastrar = () => {
    let newDados = {
      id: Math.max(...bancoImovel.map(item => item.id)) + 1,
      proprietario: Number(proprietario),
      cep: cepRef.current?.inputValue,
      inscricao: inscricaoRef.current?.inputValue,
      endereco: enderecoRef.current?.inputValue,
    };

    createImovel(newDados);

    navigate(`/${proprietario}`);
  };

  const doesProprietarioExists = () => {
    return bancoCidadao.find((item) => item.id === Number(proprietario))?.nome;
  };

  const conteudo = (
    <ContentStyled>
      {[
        { label: "Inscrição", name: "inscricao", refs: inscricaoRef },
        { label: "Endereço", name: "endereco", refs: enderecoRef },
        { label: "CEP", name: "cep", refs: cepRef },
        {
          label: "Cod. Proprietário",
          name: "proprietario",
          refs: proprietarioRef,
          value: proprietario,
          onChange: (evt) => setProprietario(evt.target.value),
        },
      ].map((item, index) => (
        <Input
          key={index}
          label={item.label}
          ref={item.refs}
          value={item.proprietario ?? ""}
          placeholder="insira os dados"
          onChange={item.onChange}
        />
      ))}
      {proprietario && (
        <div
          style={{ width: "100%", textAlign: "center" }}
          className={doesProprietarioExists() ? "porprietario" : "error"}
        >
          Proprietário: {doesProprietarioExists() || "Não cadastrado"}
        </div>
      )}
      <div className="button">
        <Button
          width="150px"
          height="60px"
          backgroundColor="var(--green)"
          color="var(--white)"
          onClick={handleCadastrar}
          disabled={!doesProprietarioExists()}
        >
          Cadastrar
        </Button>
      </div>
    </ContentStyled>
  );

  return (
    <Styled>
      <Content title="Cadastrar Imóvel" conteudo={conteudo} />
    </Styled>
  );
}

export default Cadastro;
