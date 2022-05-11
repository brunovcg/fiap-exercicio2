import { Styled, ContentStyled } from "./style.js";
import Content from "../../components/Content";
import { useBD } from "../../provider/banco_de_dados";
import { useParams } from "react-router-dom";
import Building from "../../components/Building"

function Listar() {
  const { userId } = useParams();

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
      <Content title="Listar Imóveis" conteudo={conteudo} />
    </Styled>
  );
}

export default Listar;
