import PHOTO from "../../../assets/noticias.png";

function Noticias() {
  return (
    <div style={{ width: "100%", overflowY:"scrool"}}>
    <figure style={{ width: "100%", margin: "0"}}>
 
      <img src={PHOTO} alt="logo" style={{ width: "100%", height:"500%"}} />
    </figure>
    </div>
  );
}

export default Noticias;
