import React from "react";
import {
     Container,
     Category,
     Icon,
     } from "./styled";

interface Props {
    title: string;
}

export function CatagorySelect({ title }: Props){
    return(
        <Container>
            <Category>{title}</Category>
            <Icon  name='chevron-down'/>

        </Container>
    )
}