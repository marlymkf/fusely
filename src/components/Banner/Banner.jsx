import React from "react";
import Button from "../Button/Button";
import {Bloco, Azul, H4  } from "./styles";
const Banner = () => {
    return ( 
        <Bloco>
            <Azul>
                <H4>Interested in getting fusely?</H4>
                <Button className="botao-5">Let’s talk</Button>
            </Azul>

        </Bloco>
     );
}
 
export default Banner;