import React from "react";
import Button from "../Button/Button";
import {
  H3,
  Coluna,
  Box,
  Text1,
  Text2,
  Text3,
  Box1,
  Text4,
  Text0,
  Valor,
  Mes,
  Valor1,
  Mes1,
  List,Text5
} from "./styles";
const Choose = () => {
  return (
    <>
      <H3>Choose your plan</H3>
      <Coluna>
        <Box>
          <Text1>Starter</Text1>
          <Text2>Free</Text2>
          <Text3>Dashboard</Text3>
          <Text3>Limited Support</Text3>
          <Text3>Forever free</Text3>
          <Button className="botao-2">Get Started</Button>
        </Box>
        <Box1>
          <Text0>Premium</Text0>
          <List>
            <Valor>$29</Valor>
            <Mes>/month</Mes>
          </List>
          <Text5>Dashboard & Analysis</Text5>
          <Text4>Premium Support</Text4>
          <Text4>Tracking Service</Text4>

          <Button className="botao-3">Get Started</Button>
        </Box1>
        <Box>
          <Text1>Enterprise</Text1>
          <List>
            <Valor1>$49</Valor1>
            <Mes1>/month</Mes1>
          </List>
          <Text3>All features in Premium</Text3>
          <Text3>Realtime overview</Text3>
          <Text3>Mobile app</Text3>
          <Button className="botao-2">Get Started</Button>
        </Box>
      </Coluna>
    </>
  );
};

export default Choose;
