import { Route, Routes } from "react-router-dom";
import Cadastro from "../pages/cadastro";
import Listar from "../pages/listar";
import Home from "../pages/home"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:userId" element={<Listar />} />
      <Route path="/cadastrar" element={<Cadastro />} />
    </Routes>
  );
};

export default Router;
