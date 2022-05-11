import Content from "../../components/Content";
import { useBD } from "../../provider/bancoDeDados";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Impostos from "./personasPages/Impostos";
import Regulacao from "./personasPages/Regulacao";
import Noticias from "./personasPages/Noticias";
import Empreendedor from "./personasPages/Empreendedor";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import PHOTO from "../../assets/outros.png";

function Home() {
  const [userPersona, setPersona] = useState("");
  const navigate = useNavigate();
  const { userId } = useParams();
  const { getPersona, getUser } = useBD();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setPersona(getPersona(userId));
  }, [getPersona, userId]);

  const toggle = () => {
    setShow(!show);
  };

  const conteudo = (
    <div style={{ width: "100%", minWidth: "100%" }}>
      <h2>Olá {getUser(userId)?.nome}</h2>

      <Button onClick={() => navigate(`/imoveis/${userId}`)}>
        Meus Imóveis
      </Button>
      <Button onClick={toggle}>Outros Serviços</Button>

      {show && (
        <figure style={{ width: "100%"}}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={PHOTO}
            alt="any"
          />
        </figure>
      )}

      <h4 style={{margin:"15px 0 0 0"}}>Serviços</h4>

      {userPersona === "impostos" ? (
        <Impostos />
      ) : userPersona === "noticias" ? (
        <Noticias />
      ) : userPersona === "empreendedor" ? (
        <Empreendedor />
      ) : (
        <Regulacao />
      )}
    </div>
  );

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Content conteudo={conteudo} showBar/>
    </section>
  );
}

export default Home;
