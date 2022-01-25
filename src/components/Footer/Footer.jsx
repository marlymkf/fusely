import React from "react";
import {
  Rodape,
  Text1,
  Ul,
  ListaLink,
  Coluna,
  Social,
  Content,
  RodapePeq,Text2,
} from "./styles";
const Footer = () => {
  return (
    <Rodape>
      <Content>
        <Coluna>
          <Text1>Product</Text1>
          <Ul>
            <li>
              <ListaLink href="How it works">How it works</ListaLink>
            </li>
            <li>
              <ListaLink href="Features">Features</ListaLink>
            </li>
            <li>
              <ListaLink href="Pricing"> Pricing</ListaLink>
            </li>
            <li>
              <ListaLink href="FAQ"> FAQ </ListaLink>
            </li>
            <li>
              <ListaLink href="Download"> Download </ListaLink>
            </li>
          </Ul>
        </Coluna>
        <Coluna>
          <Text1>Company</Text1>
          <Ul>
            <li>
              <ListaLink href="About">About</ListaLink>
            </li>
            <li>
              <ListaLink href="Blog">Blog</ListaLink>
            </li>
            <li>
              <ListaLink href="Partnership">Partnership</ListaLink>
            </li>
            <li>
              <ListaLink href="Terms of use">Terms of use</ListaLink>
            </li>
            <li>
              <ListaLink href="Privacy policy">Privacy policy</ListaLink>
            </li>
          </Ul>
        </Coluna>
        <Coluna>
          <Text1>Support</Text1>
          <Ul>
            <li>
              <ListaLink href="Help center">Help center</ListaLink>
            </li>
            <li>
              <ListaLink href="Contact us">Contact us</ListaLink>
            </li>
          </Ul>
        </Coluna>
        <Coluna>
          <Text1>Get in touch</Text1>
          <Social>
            <a href="/">
              <img src="img/facebook.png" alt="f" width="32" heigth="32" />
            </a>

            <a href="/">
              <img src="img/twitter.png" alt="t" width="32" heigth="32" />
            </a>
            <a href="/">
              <img src="img/linkedin.png" alt="l" width="32" heigth="32" />
            </a>
          </Social>
        </Coluna>
      </Content>
      <RodapePeq>
        <img src="img/fusely logo.png" alt="" />
        <Text2>© Fusely 2021. All rights reserved.</Text2>
      </RodapePeq>
    </Rodape>
  );
};

export default Footer;
