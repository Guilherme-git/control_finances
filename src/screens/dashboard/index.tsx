import React, { useCallback, useEffect, useState } from 'react';
import { TransactionCard } from '../../components/TransactionCard';
import { Card } from './../../components/card/index';
import {useFocusEffect} from '@react-navigation/native';

import {
    Container,
    Header,
    UserInfo,
    UserPhoto,
    User,
    UserGreeting,
    UserName,
    UserContainer,
    Icon,
    Cards,
    Transactions,
    Title,
    TransactionList,
    LogoutButton
} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Dashboard() {
    const [data, setData] = useState([])

    useFocusEffect(useCallback(() => {
        const loading = async () => {
            const response = await AsyncStorage.getItem('@controlfinances:transactions')
            const transactions = response ? JSON.parse(response) : [];

            const transactionsFormatted = transactions.map((item) => {

                const amount = Number(item.amount).toLocaleString('pt-BR', {
                    style: "currency",
                    currency: 'BRL'
                });

                const date = Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                }).format(new Date(item.date))

                return {
                    id: item.id,
                    name: item.name,
                    amount,
                    type: item.transactionType,
                    category: item.category,
                    date
                }
            })
            setData(transactionsFormatted)
        }
        loading();
    }, []));

    useEffect(() => {
        const loading = async () => {
            const response = await AsyncStorage.getItem('@controlfinances:transactions')
            const transactions = response ? JSON.parse(response) : [];

            const transactionsFormatted = transactions.map((item) => {

                const amount = Number(item.amount).toLocaleString('pt-BR', {
                    style: "currency",
                    currency: 'BRL'
                });

                const date = Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                }).format(new Date(item.date))

                return {
                    id: item.id,
                    name: item.name,
                    amount,
                    type: item.transactionType,
                    category: item.category,
                    date
                }
            })
            setData(transactionsFormatted)


        }
        loading();
    }, []);

    return (
        <Container>

            <Header>
                <UserContainer>
                    <UserInfo>
                        <UserPhoto source={{ uri: 'https://avatars.githubusercontent.com/u/56366253?v=4' }} />

                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Guilherme</UserName>
                        </User>
                    </UserInfo>

                    <LogoutButton onPress={() => { }}>
                        <Icon name="power" />
                    </LogoutButton>
                </UserContainer>
            </Header>

            <Cards>
                <Card
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada dia 13 de abril"
                    type="up"
                />

                <Card
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última saída dia 03 de abril"
                    type="down"
                />

                <Card
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 à 16 de abril"
                    type="total"
                />

            </Cards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TransactionCard
                            data={item}
                        />
                    }
                />

            </Transactions>
        </Container>
    )
}