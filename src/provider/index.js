import { BancoDados } from "./banco_de_dados";
import { ModalProvider } from "./modal";

const Providers = ({ children }) => {
  return (
    <BancoDados>
      <ModalProvider>{children}</ModalProvider>
    </BancoDados>
  );
};

export default Providers;
