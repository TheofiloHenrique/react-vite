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
function SimpleForm() {
  // Definindo o estado para armazenar o valor do campo de entrada
  const [name, setName] = useState("");
  const [idade, setIdade] = useState(0);

  // Função que será chamada sempre que o valor do input mudar
  const handleInputChange = (event) => {
    setName(event.target.value); // Atualiza o estado com o valor do input
  };

  const handleIdadeChange = (event) => {
    setIdade(event.target.value); // Atualiza o estado com o valor do input
  };

  // Função chamada quando o formulário for submetido
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    if (name == "") return alert("Insira um nome mula!");
    if (idade < 6)
      return alert(
        `${name}, acredito que com ${idade} anos você não sabe escrever nem ler mula, sai do fake kkkk`
      );

    alert(`Nome: ${name} \nIdade: ${idade} anos`);
    setName("");
    setIdade("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Idade:
        <input type="number" value={idade} onChange={handleIdadeChange} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export {
  ClickButton,
  KeyDownComponent,
  InputField,
  FocusBlurComponent,
  MouseNaDiv,
  Calculos,
  SimpleForm,
};
