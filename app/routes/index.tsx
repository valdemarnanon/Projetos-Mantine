import { Icon12Hours } from "@tabler/icons-react";
import Navbar from "./components/navbar/Navbar";

export default function Index() {
  const linksMockdata = [{ icon: Icon12Hours, label: "Construir" }];

  return (
    <div>
      <Navbar linksMockdata={linksMockdata} />
    </div>
  );
}
