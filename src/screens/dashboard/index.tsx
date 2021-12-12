import React from 'react';
import { View, Text } from 'react-native'
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
    Cards
} from './style';

export function Dashboard() {
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
        </Container>
    )
}