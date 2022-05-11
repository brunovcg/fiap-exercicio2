import Router from "./routes";
import Styled from "./styles/AppStyled";
import {useModal} from "./provider/modal"
import ModalCustom from "./pages/modal"

function App() {

  const {show} = useModal()
  return (
    <Styled className="App" >
      <Router />
      {show && <ModalCustom/>}
    </Styled>
  );
}

export default App;
