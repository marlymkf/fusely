import React from "react";
import Button from "../Button/Button";
import { Left, H1, Texto, Right, Content } from "./styles";
const Together = () => {
  return (
    <Content>
      <Left>
        <H1>Let’s get fusely together</H1>
        <Texto>Outcome-centered product that reduce churn, optimize pricing, and grow your subscription business end-to-end.</Texto>
        <Button className="botao">Get Started</Button>
      </Left>
      <Right>
        <img src="img/Hero image.png" alt="" width={642}height={559} />
      </Right>
    </Content>
    
        
          
         
     
        


  );
};

export default Together;
