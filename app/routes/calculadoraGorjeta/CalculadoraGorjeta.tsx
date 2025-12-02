import { useState } from "react";

import { TextInput } from "@mantine/core";
import classes from "./styles/Input.module.css";

import "./CalculadoraGorjeta.css";

function CalculadoraGorjeta() {
  const [conta, setConta] = useState("");
  const [gorjeta, setGorjeta] = useState("");

  const [total, setTotal] = useState("R$ 0.00");

  const [focused, setFocused] = useState(false);

  const floating = conta.trim().length !== 0 || focused || undefined;

  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let porcentagem = Number(gorjeta) / 100;
    let total = Number(conta) * porcentagem;

    if (isNaN(Number(conta)) && isNaN(Number(gorjeta))) {
      setTotal("R$ 0.00");
      setError("Porfavor, digite um numero valido");
      return;
    }
    if (conta === "") {
      setError("Por favor, adicione o valor da conta.");
    } else if (gorjeta === "") {
      setError("Por favor, adicione a porcentagem da gorjeta.");
    } else {
      setError("");
    }

    setTotal(
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(total)
    );
  };

  return (
    <div className="container">
      <section className="calculadoraGorjeta">
        <h1>Calculadora de gorjetas</h1>
        <p>
          Insira o valor da conta e a porcentagem da gorjeta para calcular o
          total.
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            <TextInput
              label="Valor da conta:  "
              placeholder="Digite o valor da conta."
              required
              classNames={classes}
              value={conta}
              onChange={(event) => setConta(event.currentTarget.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              mt="xl"
              autoComplete="nope"
              data-floating={floating}
              labelProps={{ "data-floating": floating }}
            />
          </label>

          <label>
            <TextInput
              label="Porcentagem da gorjeta:  "
              placeholder="Digite a Porcentagem da gorjeta."
              required
              classNames={classes}
              value={gorjeta}
              onChange={(event) => setGorjeta(event.currentTarget.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              mt="xl"
              autoComplete="nope"
              data-floating={floating}
              labelProps={{ "data-floating": floating }}
            />
          </label>

          <button type="submit" className="btn-gorjeta">
            Calcular
          </button>
        </form>
        {error && <p>{error}</p>}

        <div className="rodape">
          <p>
            Total: <span className="total">{total}</span>
          </p>
          <button
            className="btn-x"
            onClick={() => {
              setConta("");
              setGorjeta("");
              setTotal("R$ 0.00");
              setError("");
            }}
          >
            limpar
          </button>
        </div>
      </section>
    </div>
  );
}

export default CalculadoraGorjeta;
