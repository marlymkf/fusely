import React from "react";
import Button from "../Button/Button";
import Title from "../Title/Title";
import { Article, Articles, Blog, Texto1, Texto2, Texto3} from "./styles";
const From = () => {
  return (
    <>
      <Blog>
        <Title>From our blog</Title>
        <Button className="botao-4">View all</Button>
      </Blog>
      <Articles>
          <Article>
          <img src="img/Rectangle 11.png" alt="" />
          <Texto1>What’s Fusely?</Texto1>
          <Texto2>A brand new company, created for everyone. This article will help you understand what "fusely" stands for.</Texto2>
          <Texto3 href="">Read more</Texto3>
          </Article>
          <Article>
          <img src="img/Rectangle 10 (1).png" alt="" />
          <Texto1>Introducing Fusely Engage</Texto1>
          <Texto2>We’re happy to announce the Fusely Engage. The first growth automation platform designed for the digital interactions.</Texto2>
          <Texto3 href="">Read more</Texto3>
          </Article>
          <Article>
          <img src="img/Rectangle 11 (2).png" alt="" />
          <Texto1>Premium vs Enterprise plan</Texto1>
          <Texto2>Let’s compare our most popular plans: Premium and Enterprise. This article will help you decide which one will be better for your needs. </Texto2>
          <Texto3 href="">Read more</Texto3>
          </Article>
      </Articles>
    </>
  );
};

export default From;
