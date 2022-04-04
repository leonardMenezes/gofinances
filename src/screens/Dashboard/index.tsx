import React from "react";

import { 
    Container,
    Header,
    UseInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
 } from './styles'
 
import { HighlightCard } from "../../components/HighlightCard";
export function Dashboard(){

    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UseInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/100393797?v=4'}}/>
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Leonardo</UserName>
                        </User>
                    </UseInfo>   
                    <Icon name='power'/>   
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>
        </Container>
    )
}