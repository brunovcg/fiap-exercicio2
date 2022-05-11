import { Styled, ContentStyled } from "./style.js";
import Content from "../../components/Content";
import { useBD } from "../../provider/bancoDeDados";
import { useParams } from "react-router-dom";
import Building from "../../components/Building"
import Button from "../../components/Button"
import {useNavigate} from "react-router-dom"

function Listar() {
  const { userId } = useParams();
  const navigate = useNavigate()
  const { bancoCidadao, bancoImovel } = useBD();

  const conteudo = (
    <ContentStyled>
      <section>
        <div>
          <span className="negrito">Usuário: </span>
          {bancoCidadao.find((item) => item.id === Number(userId)).nome}
        </div>
        <div>
          <span className="negrito">CPF: </span>{" "}
          {bancoCidadao.find((item) => item.id === Number(userId)).cpf}
        </div>

        <Button onClick={()=>navigate(`/cadastrar/${userId}`)}>Cadastrar</Button>
      </section>

      <section style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ width: "100%", textAlign: "center", margin: "30px 0" }}>
          Imóveis
        </h3>
        {bancoImovel
          .filter((imovel) => imovel.proprietario === Number(userId))
          .map((item) => (
            <Building item={item} key={item.id}/>
          ))}
      </section>
    </ContentStyled>
  );

  return (
    <Styled>
      <Content  conteudo={conteudo} showBar/>
    </Styled>
  );
}

export default Listar;
