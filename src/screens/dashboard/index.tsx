import React, { useCallback, useEffect, useState } from 'react';
import { TransactionCard } from '../../components/TransactionCard';
import { Card } from './../../components/card/index';
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

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
    LogoutButton,
    Loading
} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface HighlightData {
    entries: {
        amount: string,
        lastTransactionDate: string
    },
    expensive: {
        amount: string,
        lastTransactionDate: string
    },
    total: {
        amount: string
    }
}

export function Dashboard() {
    const [isLoaging, setIsLoading] = useState(true);
    const [data, setData] = useState([])
    const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData)

    const theme = useTheme()

    useEffect(() => {
        const loading = async () => {
            let entriesTotal = 0;
            let expensiveTotal = 0;

            const response = await AsyncStorage.getItem('@controlfinances:transactions')
            const transactions = response ? JSON.parse(response) : [];

            const transactionsFormatted = transactions.map((item) => {

                if (item.transactionType === 'up') {
                    entriesTotal += Number(item.amount)
                } else {
                    expensiveTotal += Number(item.amount)
                }

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

            const total = entriesTotal - expensiveTotal

            const lastTransactionsEntries =  new Date(Math.max.apply(Math,
                transactions.filter(t => t.transactionType === 'up').map(t => new Date(t.date).getTime()))
            )
            const lastTransactionsEntriesFormatted = `${lastTransactionsEntries.getDate()} de ${lastTransactionsEntries.toLocaleString('pt-BR', {month: 'long'})}`


            const lastTransactionsExpensives =  new Date(Math.max.apply(Math,
                transactions.filter(t => t.transactionType === 'down').map(t => new Date(t.date).getTime()))
            )
            const lastTransactionsExpensivesFormatted = `${lastTransactionsExpensives.getDate()} de ${lastTransactionsExpensives.toLocaleString('pt-BR', {month: 'long'})}`

            setHighlightData({
                entries: {
                    amount: entriesTotal.toLocaleString('pt-BR', {
                        style: "currency",
                        currency: 'BRL'
                    }),
                    lastTransactionDate: `Última entrada dia ${lastTransactionsEntriesFormatted}` 
                },
                expensive: {
                    amount: expensiveTotal.toLocaleString('pt-BR', {
                        style: "currency",
                        currency: 'BRL'
                    }),
                    lastTransactionDate: `Útima saída dia ${lastTransactionsExpensivesFormatted}`
                },
                total: {
                    amount: total.toLocaleString('pt-BR', {
                        style: "currency",
                        currency: 'BRL',
                    })
                }
            })
            setData(transactionsFormatted)
            setIsLoading(false)

        }
        loading();
    }, []);

    useFocusEffect(useCallback(() => {
        const loading = async () => {
            let entriesTotal = 0;
            let expensiveTotal = 0;

            const response = await AsyncStorage.getItem('@controlfinances:transactions')
            const transactions = response ? JSON.parse(response) : [];

            const transactionsFormatted = transactions.map((item) => {

                if (item.transactionType === 'up') {
                    entriesTotal += Number(item.amount)
                } else {
                    expensiveTotal += Number(item.amount)
                }

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

            const total = entriesTotal - expensiveTotal

            const lastTransactionsEntries =  new Date(Math.max.apply(Math,
                transactions.filter(t => t.transactionType === 'up').map(t => new Date(t.date).getTime()))
            )
            const lastTransactionsEntriesFormatted = `${lastTransactionsEntries.getDate()} de ${lastTransactionsEntries.toLocaleString('pt-BR', {month: 'long'})}`


            const lastTransactionsExpensives =  new Date(Math.max.apply(Math,
                transactions.filter(t => t.transactionType === 'down').map(t => new Date(t.date).getTime()))
            )
            const lastTransactionsExpensivesFormatted = `${lastTransactionsExpensives.getDate()} de ${lastTransactionsExpensives.toLocaleString('pt-BR', {month: 'long'})}`

            setHighlightData({
                entries: {
                    amount: entriesTotal.toLocaleString('pt-BR', {
                        style: "currency",
                        currency: 'BRL'
                    }),
                    lastTransactionDate: `Última entrada dia ${lastTransactionsEntriesFormatted}` 
                },
                expensive: {
                    amount: expensiveTotal.toLocaleString('pt-BR', {
                        style: "currency",
                        currency: 'BRL'
                    }),
                    lastTransactionDate: `Útima saída dia ${lastTransactionsExpensivesFormatted}`
                },
                total: {
                    amount: total.toLocaleString('pt-BR', {
                        style: "currency",
                        currency: 'BRL',
                    })
                }
            })
            setData(transactionsFormatted)
            setIsLoading(false)

        }
        loading();
    }, []));

    return (
        <Container>
            {
                isLoaging ?
                    <>
                        <Loading>
                            <ActivityIndicator color={theme.colors.primary} size="large" />
                        </Loading>
                    </>

                    :
                    <>
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
                                amount={highlightData.entries.amount}
                                lastTransaction={highlightData.entries.lastTransactionDate}
                                type="up"
                            />

                            <Card
                                title="Saídas"
                                amount={highlightData.expensive.amount}
                                lastTransaction={highlightData.expensive.lastTransactionDate}
                                type="down"
                            />

                            <Card
                                title="Total"
                                amount={highlightData.total.amount}
                                lastTransaction=""
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
                    </>
            }
        </Container>
    )
}