import { useState } from "react";

import { TextInput } from "@mantine/core";
import classes from "./components/Input.module.css";

import "./CalculadoraGorjeta.css";

function CalculadoraGorjeta() {
  const [conta, setConta] = useState("");
  const [gorjeta, setGorjeta] = useState("");

  const [total, setTotal] = useState("R$ 0.00");

  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const floating = value.trim().length !== 0 || focused || undefined;

  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let porcentagem = Number(gorjeta) / 100;
    let total = Number(conta) * porcentagem;

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
    <>
      <div className="container">
        <h1>Calculadora de gorjetas</h1>
        <p>
          Insira o valor da conta e a porcentagem da gorjeta para calcular o
          total.
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Valor da conta:</p>
            <input
              type="number"
              value={conta}
              onChange={(value) => setConta(value.target.value)}
              placeholder="Valor da conta"
            />
          </label>

          <label>
            <p>Porcentagem da gorjeta:</p>
            <input
              type="number"
              value={gorjeta}
              onChange={(value) => setGorjeta(value.target.value)}
              placeholder="Porcentagem da gorjeta"
            />
          </label>

          <button type="submit" className="btn-gorjeta">
            Calcular
          </button>
        </form>
        {error && <p>{error}</p>}
        <TextInput
          label="Valor da conta:  "
          placeholder="Digite o valor da conta."
          required
          classNames={classes}
          value={value}
          onChange={(event) => setConta(event.currentTarget.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          mt="md"
          autoComplete="nope"
          data-floating={floating}
          labelProps={{ "data-floating": floating }}
        />

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
      </div>
    </>
  );
}

export default CalculadoraGorjeta;
