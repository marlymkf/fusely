import React from "react";
import Title from "../Title/Title";
import { Content, Left,  Texto, Text, Right } from "./styles";
const Solutions = () => {
  return (
    <Content>
      <Left>
        <Title>Creative Solutions</Title>
        <Texto>
          A daily dataset to keep you up to date on subscription market trends
          and what's happening in your vertical.
        </Texto>
        <Text>Learn more</Text>
      </Left>
      <Right>
        <img src="img/Section Image (1).png" alt="" width={600} height={497} />
      </Right>
    </Content>
  );
};

export default Solutions;
