import { createContext, useState, useContext } from "react";
import { cidadao } from "../../database/cidadao.js";
import { imoveis } from "../../database/imoveis.js";
import { personas } from "../../database/personas";

const BancoDadosContext = createContext([]);

export const BancoDados = ({ children }) => {
  const [bancoCidadao, setBancoCidadao] = useState(cidadao);
  const [bancoPersona, setBancoPersona] = useState(personas);
  const [bancoImovel, setBancoImovel] = useState(imoveis);

  const deleteImovel = (id) => {
    let newDados = bancoImovel.filter((imovel) => imovel.id !== id);

    setBancoImovel(newDados);
  };

  const updateImovel = (id, payload) => {
    const newDados = [...bancoImovel];

    const imovelFiltrado = bancoImovel.findIndex((imovel) => imovel.id === id);
    newDados[imovelFiltrado] = payload;
    setBancoImovel(newDados);
  };

  const createImovel = (imovel) => {
    setBancoImovel([...bancoImovel, imovel]);
  };

  const doesProprietarioExists = (id) => {
    return bancoCidadao.find((item) => item.id === Number(id))?.nome;
  };

  const getPersona = (id) => {
    let persona = bancoCidadao.find((item) => item.id === Number(id))?.persona;
    return bancoPersona.find((item) => item.id === persona)?.nome;
  };

  const getUser = (id) => {
    return bancoCidadao.find(item=> item.id === Number(id))
  }

  return (
    <BancoDadosContext.Provider
      value={{
        bancoImovel,
        setBancoImovel,
        bancoCidadao,
        setBancoCidadao,
        deleteImovel,
        updateImovel,
        createImovel,
        doesProprietarioExists,
        getPersona,
        getUser
      }}
    >
      {children}
    </BancoDadosContext.Provider>
  );
};

export const useBD = () => useContext(BancoDadosContext);
