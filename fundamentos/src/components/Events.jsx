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
  //Tentei declarar as variaveis com var para acessar globalmente e evitar a repetição no código usando const porém estava dando algum tipo de erro
  function soma() {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);

    alert("Operação Selecionada:Soma\n" + (num1 + num2));
  }

  function subtracao() {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);

    alert("Operação Selecionada:Subtração\n" + (num1 - num2));
  }

  function divisao() {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);

    alert("Operação Selecionada:Divisão\n" + (num1 / num2));
  }

  function multiplicacao() {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);

    alert("Operação Selecionada:Multiplicação\n" + (num1 * num2));
  }

  return (
    <div>
      <label>Insira seu primeiro número</label>
      <input type="number" name="num1" id="num1" />
      <br />
      <label>Insira seu segundo número</label>
      <input type="number" name="num2" id="num2" />
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
