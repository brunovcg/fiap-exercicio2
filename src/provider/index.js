import { BancoDados } from "./bancoDeDados";
import { ModalProvider } from "./modal";

const Providers = ({ children }) => {
  return (
    <BancoDados>
      <ModalProvider>{children}</ModalProvider>
    </BancoDados>
  );
};

export default Providers;
