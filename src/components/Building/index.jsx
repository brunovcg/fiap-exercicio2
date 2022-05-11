import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import React, { useRef } from "react";
import Button from "../../components/Button";
import { useBD } from "../../provider/bancoDeDados";
import { useModal } from "../../provider/modal";
import Input from "../../components/Input";
import Styled from "./styles.js"

const Building = ({ item }) => {
  const { deleteImovel, updateImovel, bancoImovel } = useBD();
  const { openModal, modalReset } = useModal();

  const enderecoRef = useRef(null);
  const cepRef = useRef(null);
  const inscricaoRef = useRef(null);
  const tamanhoRef = useRef(null);

  const handleDelete = (imovel) => {
    openModal(
      "Deletar Imóvel",
      <div>
        Tem certeza que quer deletar o imóvel:
        <br />
        <span style={{ fontWeight: "bold" }}>
          {imovel?.inscricao} - {imovel?.endereco}
        </span>
      </div>,
      [
        {
          onClick: () => {
            deleteImovel(imovel.id);
            modalReset();
          },
          text: <FaTrash />,
          backgroundColor: "var(--red)",
          color: "var(--white)",
        },
      ]
    );
  };

  const handleUpdate = (imovel) => {
    const imovelIndex = bancoImovel.findIndex((item) => item.id === imovel.id);
    const selectedImovel = bancoImovel[imovelIndex]
    openModal(
      "Atualizar Imóvel",
      <>
        {[
          { label: "Inscrição", name: "inscricao", refs: inscricaoRef },
          { label: "Endereço", name: "endereco", refs: enderecoRef },
          { label: "CEP", name: "cep", refs: cepRef},
          { label: "Tamanho m2", name: "tamanho", refs: tamanhoRef},
        ].map((item, index) => (
          <Input
            key={index}
            label={item.label}
            value={selectedImovel[item.name]}
            type={item?.type}
            ref={item.refs}
          />
        ))}
      </>,
      [
        {
          onClick: () => {
            updateImovel(imovel.id, {
              id: imovel.id,
              proprietario: imovel.proprietario,
              inscricao: inscricaoRef.current?.inputValue,
              cep: cepRef.current?.inputValue,
              endereco: enderecoRef.current?.inputValue,
              tamanho: tamanhoRef.current?.inputValue,
              iptu: Number(tamanhoRef.current?.inputValue) *10
            });
            modalReset();
          },
          text: <FaCheck />,
          backgroundColor: "var(--yellow)",
          color: "var(--white)",
        },
      ]
    );
  };

  return (
    <Styled
      style={{
        margin: "10px 0",
        padding: "10px",
        backgroundColor: "var(--light-grey)",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div>
        <div className="imovel-info">
          <span className="negrito">Inscrição:</span> {item.inscricao}
        </div>
        <div className="imovel-info">
          <span className="negrito">Endereço:</span> {item.endereco}
        </div>
        <div className="imovel-info">
          <span className="negrito">CEP:</span> {item.cep}
        </div>
        <div className="imovel-info">
          <span className="negrito">Tamanho:</span> {item.tamanho} &nbsp; m2
        </div>
        <div className="imovel-info">
          <span className="negrito">IPTU:</span> R${item.iptu},00
        </div>
      </div>
      <div
        className="icons"
  
      >
        <Button isIcon color="var(--red)" onClick={() => handleDelete(item)}>
          <FaTrash />
        </Button>
        <Button
          isIcon
          color="var(--yellow)"
          onClick={() => {
            handleUpdate(item);
          }}
        >
          <FaEdit />
        </Button>
      </div>
    </Styled>
  );
};

export default Building;
