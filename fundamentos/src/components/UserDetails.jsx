const DetalhesDeUsuario = () => {
  const Usuario = {
    nome: "Theo",
    idade: 20,
  };

  const verifica =
    Usuario.idade < 18
      ? "Você não pode tirar habilitação!"
      : "Você pode tirar sua habilitação!";

  return (
    <>
      <h3>Detalhes do Usuário</h3>
      <p>Nome: {Usuario.nome}</p>
      <p>Idade: {Usuario.idade}</p>
      <p>Habilitação: {verifica}</p>
    </>
  );
};

export default DetalhesDeUsuario;
