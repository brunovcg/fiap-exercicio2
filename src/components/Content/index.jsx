import Styled from "./styles.js";
import LOGO from "../../assets/logo_gestao_pcr_alt_horizontal.png";
import { useNavigate, useParams } from "react-router-dom";

function Content({ conteudo, title, showBar = false }) {
  const navigate = useNavigate();
  const { userId } = useParams();

  const style = (background = "var(--grey)", color = "var(--white)") => {
    return { padding: "10px", background, color };
  };

  const go = (path) => {
    navigate(path);
  };

  return (
    <Styled>
      <figure>
        <img src={LOGO} alt="imagem" />
      </figure>
      <h2>{title}</h2>
      {showBar && (
        <nav
          style={{
            margin: "5px 0",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap:"10px"
          }}
        >
          <button onClick={()=>go('/')} style={style("var(--red)")}>Logout</button>
          <button onClick={()=>go(`/${userId}`)} style={style("var(--green)")}>Home</button>
          <button onClick={()=>go(`/imoveis/${userId}`)} style={style("var(--blue)")}>Imóveis</button>
        </nav>
      )}
      <div className="conteudo">{conteudo}</div>
    </Styled>
  );
}

export default Content;
