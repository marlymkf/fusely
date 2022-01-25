import React from "react";
import Title from "../Title/Title";
import {Content, Left, Right, Texto, Text } from "./styles";
const Team = () => {
    return ( 
      <Content>
        <Left>
          <img src="img/section Image (2).png" alt="" width={600} height={406} />
        </Left>
        <Right>
          <Title>Professional Team</Title>
          <Texto>
          Well, obviously, we're professionals. Don't hesitate - get to know us better.
          </Texto>
          <Text>Learn more</Text>
        </Right>
       
      </Content>
    );
  };

 
export default Team;