import { useState } from "react";
import "./Calculadora.css";

export default function calculadora() {
  const [num, setNum] = useState("0");
  const [oldNum, setOldNum] = useState<string | undefined>();
  const [operador, setOperador] = useState<string | undefined>();

  const linhas: string[][] = [
    ["AC", "+/-", "%", "/"],
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["rs", "0", ",", "="],
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const valor = e.currentTarget.value;

    console.log(isNaN(Number(valor)));

    if (!isNaN(Number(valor))) {
      // número
      setNum((prev) => (prev === "0" ? valor : prev + valor));
      return;
    }

    switch (valor) {
      case "AC":
        setNum("0");
        setOldNum(undefined);
        setOperador(undefined);
        break;

      case "%":
        setNum(String(Number(num) / 100));
        break;

      case "+/-":
        setNum(String(Number(num) * -1));
        break;

      case "/":
      case "X":
      case "-":
      case "+":
        setOperador(valor);
        setOldNum(num);
        setNum("");
        break;

      default:
        break;
    }
  };

  const calcular = () => {
    if (!operador || oldNum === undefined) return;

    const atual = Number(num);
    const anterior = Number(oldNum);
    let resultado = 0;

    switch (operador) {
      case "+":
        resultado = anterior + atual;
        break;
      case "-":
        resultado = anterior - atual;
        break;
      case "X":
        resultado = anterior * atual;
        break;
      case "/":
        resultado = anterior / atual;
        break;
    }

    setNum(String(resultado));
    setOperador(undefined);
    setOldNum(undefined);
  };

  return (
    <div className="calculadora">
      <section className="border">
        <div className="painel">{num}</div>
        {linhas.map((linha: string[], i: number) => (
          <div className="linha" key={i}>
            {linha.map((valor: string, j: number) => {
              if (valor === "=") {
                return (
                  <button
                    onClick={calcular}
                    className="btn"
                    key={j}
                    value={valor}
                  >
                    {valor}
                  </button>
                );
              } else {
                return (
                  <button
                    onClick={handleClick}
                    className="btn"
                    key={j}
                    value={valor}
                  >
                    {valor}
                  </button>
                );
              }
            })}
          </div>
        ))}
      </section>
    </div>
  );
}
