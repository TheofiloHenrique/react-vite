const NavBar = () => {
  return (
    <div class="header">
      <a href="#default" class="logo">
        Minha Logo era pra estar aqui...
      </a>
      <div class="header-right">
        <a class="active" href="#home">
          Home
        </a>
        <br />
        <a href="#contact">Contato</a>
        <a href="#about">Sobre</a>
      </div>
    </div>
  );
};

export default NavBar;
