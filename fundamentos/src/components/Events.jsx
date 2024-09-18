import { useState } from "react";

function ClickButton() {
  function handleClick() {
    alert("O botão foi clicado!");
  }
  return <button onClick={handleClick}>Clique Aqui</button>;
}

function KeyDownComponent() {
  function handleKeyDown(event) {
    console.log(`Tecla pressionada: ${event.key}`);
  }
  return <input type="text" onKeyDown={handleKeyDown}></input>;
}

function InputField() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Você Digitou: {value}</p>
    </div>
  );
}

function FocusBlurComponent() {
  function handleFocus() {
    console.log("Você está com o foco no Input!");
  }

  function handleBlur() {
    console.log("Você tirou o foco do Input");
  }

  return (
    <input
      type="text"
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="Input de Foco"
    ></input>
  );
}

function MouseNaDiv() {
  function handleMouseEnter() {
    console.log("O mouse está na Div!");
  }

  function handleMouseLeave() {
    console.log("O mouse saiu da Div!");
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      Passe o Mouse aqui ( ͡° ͜ʖ ͡°)
    </div>
  );
}

function Calculos() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function soma() {
    alert(`Operação Selecionada: Soma \n Resultado: ${num1 + num2}`);
  }

  function subtracao() {
    alert(`Operação Selecionada: Subtração \n Resultado: ${num1 - num2}`);
  }

  function divisao() {
    alert(`Operação Selecionada: Divisão \n Resultado: ${num1 / num2}`);
  }

  function multiplicacao() {
    alert(`Operação Selecionada: Multiplicação \n Resultado: ${num1 * num2}`);
  }

  return (
    <div>
      <label>Insira seu primeiro número: </label>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseInt(e.target.value))}
      />
      <br />
      <label>Insira seu segundo número: </label>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(parseInt(e.target.value))}
      />
      <br />
      <button onClick={soma}>Somar</button>
      <button onClick={subtracao}>Subtrair</button>
      <button onClick={divisao}>Dividir</button>
      <button onClick={multiplicacao}>Multiplicar</button>
    </div>
  );
}

export {
  ClickButton,
  KeyDownComponent,
  InputField,
  FocusBlurComponent,
  MouseNaDiv,
  Calculos,
};
