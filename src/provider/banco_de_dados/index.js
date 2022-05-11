import { createContext, useState, useContext } from "react";
import { cidadao } from "../../database/cidadao.js";
import { imoveis } from "../../database/imoveis.js";

const BancoDadosContext = createContext([]);

export const BancoDados = ({ children }) => {
  const [bancoCidadao, setBancoCidadao] = useState(cidadao);

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
      }}
    >
      {children}
    </BancoDadosContext.Provider>
  );
};

export const useBD = () => useContext(BancoDadosContext);
