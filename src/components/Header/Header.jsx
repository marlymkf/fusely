import React, { useState } from "react";
import Button from "../Button/Button";
import { Cabecalho, Lista, ListaLink, Left, Hamburger,
  BtnMobile, } from "./styles";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Cabecalho className={isMenuOpen ? "active" : ""}>
      <img src="img/Logo (3).png" alt="fusely" width="78" height="28" />
      <Lista className="nav">
        <li>
          <ListaLink href="Home">Home</ListaLink>
        </li>
        <li>
          <ListaLink href="Features">Features</ListaLink>
        </li>
        <li>
          <ListaLink href="Pricing">Pricing</ListaLink>
        </li>
        <li>
          <ListaLink href="Blog">Blog</ListaLink>
        </li>
      </Lista>
      <Left>
        <Button className="botao-1">Log in</Button>
        <Button className="botao">Get Started</Button>
        <BtnMobile id="btn-mobile" onClick={handleMenu}>
          Menu
          <Hamburger id="hamburger" />
        </BtnMobile>
      </Left>
    </Cabecalho>
  );
};

export default Header;
