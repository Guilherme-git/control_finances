import React from 'react';
import { TransactionCard } from '../../components/TransactionCard';
import { Card } from './../../components/card/index';

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
    TransactionList
} from './style';

export function Dashboard() {
    const data = [{
        id: '1',
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,50",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign',
        },
        date: '01/01/2022',
        type: 'positive'
    },
    {
        id: '2',
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,50",
        category: {
            name: 'Alimentação',
            icon: 'coffee',
        },
        date: '01/01/2022',
        type: 'negative'
    },
    {
        id: '3',
        title: "Aluguel do apartamento",
        amount: "R$ 12.000,50",
        category: {
            name: 'Casa',
            icon: 'shopping-bag',
        },
        date: '01/01/2022',
        type: 'positive'
    }
    ]

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

                    <Icon name="power" />
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