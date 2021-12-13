import React from 'react';
import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
} from './style';

interface Category {
    name: string;
    icon: string
}

interface Props {
    data: {
        title: string;
        amount: string;
        category: Category;
        date: string,
        type: 'positive' | 'negative'
    }
    
}

export function TransactionCard({data}: Props) {
    return (
        <Container>
            <Title>{data.title}</Title>
            <Amount typeProp={data.type}>
                {data.type === 'negative' ? "- " : "+ "}
                {data.amount}
            </Amount>

            <Footer>
                <Category>
                    <Icon name={data.category.icon}></Icon>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>

                <Date>{data.date}</Date>
            </Footer>
        </Container>
    );
}