import { Route, Routes } from "react-router-dom";
import Cadastro from "../pages/cadastro";
import Listar from "../pages/listar";
import Login from "../pages/login"
import Home from "../pages/home"

const Router = () => {
  return (
    <Routes style={{width: '100%', height: '100%'}}>
      <Route path="/" element={<Login />} />
      <Route path="/:userId" element={<Home />} />
      <Route path="/imoveis/:userId" element={<Listar />} />
      <Route path="/cadastrar/:userId" element={<Cadastro />} />
    </Routes>
  );
};

export default Router;
