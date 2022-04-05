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
    Transactions,
    Title,
 } from './styles'
 
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";
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
                <HighlightCard 
                type="up"
                    title='Entradas' 
                    amount='R$ 17.400,00' 
                    lastTansaction='Última entrada dia 13 de abril'
                />
                <HighlightCard 
                    type="down"
                    title='Saídas' 
                    amount='R$ 1.259,00' 
                    lastTansaction='Última saída dia 03 de abril'
                />
                <HighlightCard 
                    type="total"
                    title='Total' 
                    amount='R$ 16.141,00' 
                    lastTansaction='01 à 16 de abril'
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                
                <TransactionCard />
            </Transactions>
        </Container>
    )
}