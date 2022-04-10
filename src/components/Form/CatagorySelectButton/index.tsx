import React from "react";
import {
     Container,
     Category,
     Icon,
     } from "./styled";

interface Props {
    title: string;
    onPress: () => void;
}

export function CatagorySelectButton({ 
    title, 
    onPress 
}: Props){
    return(
        <Container onPress={onPress}>
            <Category>{title}</Category>
            <Icon  name='chevron-down'/>

        </Container>
    )
}