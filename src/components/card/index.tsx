import React from "react";

import {
    Container, Title, Icon, Footer, Amount, LastTransaction, Header
} from './style'

interface Props {
    title: String;
    amount: String;
    lastTransaction: String;
    type: 'up' | 'down' | 'total'
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function Card({title, amount, lastTransaction, type} : Props) {
    return (
        <Container type={type}>

            <Header>
                <Title type={type} >{title}</Title>
                <Icon name={icon[type]} type={type} />
            </Header>

            <Footer>
                <Amount type={type}>{amount}</Amount>
                <LastTransaction type={type} >{lastTransaction}</LastTransaction>
            </Footer>

        </Container>
    );
}