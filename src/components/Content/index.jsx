import Styled from "./styles.js";
import LOGO from "../../assets/logo_gestao_pcr_alt_horizontal.png";


function Content({ conteudo, title }) {
  return (
    <Styled>
      
      <figure>
        <img src={LOGO} alt="imagem" />
        </figure>
        <h2>{title}</h2>
        <div className="conteudo">
          {conteudo}
        </div>
        
     
    </Styled>
  );
}

export default Content;
