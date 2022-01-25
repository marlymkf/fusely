import React from "react";
import Title from "../Title/Title";
import { Content, Left, Right,  Texto, Text } from "./styles";
const Detailed = () => {
  return (
    <Content>
      <Left>
        <img src="img/Illustration.svg" alt="" width={600} height={442} />
      </Left>
      <Right>
        <Title>Detailed Examination</Title>
        <Texto>
          A daily dataset to keep you up to date on subscription market trends
          and what's happening in your vertical.
        </Texto>
        <Text>Learn more</Text>
      </Right>
     
    </Content>
  );
};

export default Detailed;
