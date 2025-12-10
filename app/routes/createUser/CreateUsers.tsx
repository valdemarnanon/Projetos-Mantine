import Navbar from "../components/navbar/Navbar";
import {
  IconUserPlus,
  IconUserMinus,
  IconUserSquare,
} from "@tabler/icons-react";

const CreateUsers = () => {
  const linksMockdata = [
    { icon: IconUserPlus, label: "Cadastrar usuário", url: "falstau" },
    { icon: IconUserMinus, label: "Remover usuário", url: "falstau" },
    { icon: IconUserSquare, label: "Lista de usuário", url: "falstau" },
  ];
  return (
    <div>
      <Navbar linksMockdata={linksMockdata} />
    </div>
  );
};

export default CreateUsers;
