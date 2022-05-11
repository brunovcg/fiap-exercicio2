import { Styled, ContentStyled } from "./style.js";
import Content from "../../components/Content";
import { useRef, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useBD } from "../../provider/bancoDeDados";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const enderecoRef = useRef(null);
  const cepRef = useRef(null);
  const inscricaoRef = useRef(null);
  const proprietarioRef = useRef(null);
  const tamanhoRef = useRef(null);
  const [proprietario, setProprietario] = useState("");
  const navigate = useNavigate();

  const { createImovel, bancoImovel, doesProprietarioExists } = useBD();

  const handleCadastrar = () => {
    let newDados = {
      id: Math.max(...bancoImovel.map(item => item.id)) + 1,
      proprietario: Number(proprietario),
      cep: cepRef.current?.inputValue,
      inscricao: inscricaoRef.current?.inputValue,
      endereco: enderecoRef.current?.inputValue,
      tamanho: tamanhoRef.current?.inputValue,
      iptu: Number(tamanhoRef.current?.inputValue) * 10
    };

    createImovel(newDados);

    navigate(`/imoveis/${proprietario}`);
  };

  

  const conteudo = (
    <ContentStyled>
      {[
        { label: "Inscrição", name: "inscricao", refs: inscricaoRef },
        { label: "Endereço", name: "endereco", refs: enderecoRef },
        { label: "CEP", name: "cep", refs: cepRef },
        { label: "Tamanho m2", name: "tamanho", refs: tamanhoRef },
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
          className={doesProprietarioExists(proprietario) ? "porprietario" : "error"}
        >
          Proprietário: {doesProprietarioExists(proprietario) || "Não cadastrado"}
        </div>
      )}
      <div className="button">
        <Button
          width="150px"
          height="60px"
          backgroundColor="var(--green)"
          color="var(--white)"
          onClick={handleCadastrar}
          disabled={!doesProprietarioExists(proprietario)}
        >
          Cadastrar
        </Button>
      </div>
    </ContentStyled>
  );

  return (
    <Styled>
      <Content title="Cadastrar Imóvel" conteudo={conteudo} showBar/>
    </Styled>
  );
}

export default Cadastro;
