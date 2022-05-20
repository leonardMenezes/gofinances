import React, { useState, useEffect, useCallback } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useFocusEffect } from "@react-navigation/native";

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
 import { Loading } from "../../components/Loading/Loading";
 
 export interface DataListProps extends TransactionCardProps{
     id: string;
 }

 interface HighlighProps {
    amount: string;
 }

 interface HighlightData {
     entries: HighlighProps;
     expensives: HighlighProps ;
     total: HighlighProps
 }
 

export function Dashboard(){
    const [isLoaading, setIsloading] = useState(true)
    const [transactions, setTransactions] = useState<DataListProps[]>([])
    const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData)

    const loadTransactions = async () => {
        const dataKey = "@gofinances:transactions"
        const response = await AsyncStorage.getItem(dataKey)
        const transactions = response ? JSON.parse(response) : [];

        let entriesTotal = 0;
        let expensiveTotal = 0;

        const transactionsFormated: DataListProps[]  = transactions
        .map((item: DataListProps) =>{

            if(item.type === 'positive'){
                entriesTotal += Number(item.amount)
            }else{
                expensiveTotal += Number(item.amount)
            }

            const amount = Number(item.amount).toLocaleString('pt-BR', {
                style: "currency",
                currency: "BRL"
            })

            const date = Intl.DateTimeFormat('pt-BR', {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit"
            }).format(new Date(item.date))

            return {
                id: item.id,
                name: item.name,
                amount,
                type: item.type,
                category: item.category,
                date
            }
        })

        setTransactions(transactionsFormated)

        const total = entriesTotal - expensiveTotal;

        setHighlightData({
            entries:{
                amount: entriesTotal.toLocaleString('pt-BR', {
                    style: "currency",
                    currency: "BRL"
                })
            },
            expensives:{
                amount: expensiveTotal.toLocaleString('pt-BR', {
                    style: "currency",
                    currency: "BRL"
                })
            },
            total:{
                amount: total.toLocaleString('pt-BR', {
                    style: "currency",
                    currency: "BRL"
                })
            }
        })
        
        setIsloading(false)
    }

    useEffect(()=>{
        loadTransactions()
    }, [])

    //useFocusEffect age como o useEffect na página que estiver em foco
    useFocusEffect(useCallback(()=>{
        loadTransactions()
    },[]))

    return(
        <Container>
            { isLoaading ? <Loading /> :
                <>
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
                        amount={highlightData.entries.amount}
                        lastTansaction='Última entrada dia 13 de abril'
                    />
                    <HighlightCard 
                        type="down"
                        title='Saídas' 
                        amount={highlightData.expensives.amount}
                        lastTansaction='Última saída dia 03 de abril'
                    />
                    <HighlightCard 
                        type="total"
                        title='Total' 
                        amount={highlightData.total.amount}
                        lastTansaction='01 à 16 de abril'
                    />
                </HighlightCards>

                <Transactions>
                    <Title>Listagem</Title>

                    <TransactionList 
                        data={transactions}
                        keyExtractor={ item => item.id}
                        renderItem={({ item })=> <TransactionCard data={item} />}
                    />
                    
                    
                </Transactions>
            </>
        }
        </Container>
    )
}