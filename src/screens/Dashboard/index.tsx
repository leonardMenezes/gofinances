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
    TransactionList,
    LogoutButton,
 } from './styles'

 import { HighlightCard } from "../../components/HighlightCard";
 import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
 
 export interface DataListProps extends TransactionCardProps{
     id: string;
 }
 

export function Dashboard(){

    const data: DataListProps[] = [
        {   
            id: '1',
            type: 'positive',
            title:"Desenvolvimento de site",
            amount:"R$ 12.000,00",
            category:{
                name:'Vendas', 
                icon:'dollar-sign'
            },
            date:"13/04/2022"
        },
        {   
            id: '2',
            type: 'negative',
            title:"Hamburgueria Pizzy",
            amount:"R$ 59,00",
            category:{
                name:'Alimentação', 
                icon:'coffee'
            },
            date:"10/04/2022"
        },
        {   
            id: '3',
            type: 'negative',
            title:"Alugual do apartamento",
            amount:"R$ 1.200,00",
            category:{
                name:'Casa', 
                icon:'shopping-bag'
            },
            date:"10/04/2022"
        }
    ]

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
                    <LogoutButton onPress={()=>console.log('teste')}>
                        <Icon name='power'/>   
                    </LogoutButton>
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

                <TransactionList 
                    data={data}
                    keyExtractor={ item => item.id}
                    renderItem={({ item })=> <TransactionCard data={item} />}
                />
                
                
            </Transactions>
        </Container>
    )
}