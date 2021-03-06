import React from 'react';
import { HistoryCard } from '../../components/historyCard';

import {
    Container,
    Header,
    Title
} from './style'

export function Resume() {
    return (
        <Container>
            <Header>
                <Title>Resumo por categoria</Title>
            </Header>

            <HistoryCard 
                title='Compras'
                amount='R$ 150,50'
                color='red'
            />
        </Container>
    );
}