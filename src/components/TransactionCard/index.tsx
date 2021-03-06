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
import {categories} from './../../utils/categories';

interface Category {
    name: string;
    icon: string
}

interface Props {
    data: {
        name: string;
        amount: string;
        category: Category;
        date: string,
        type: 'up' | 'down'
    }
    
}

export function TransactionCard({data}: Props) {
    const category = categories.filter(
        item => item.key === data.category
    )[0];

    return (
        <Container>
            <Title>{data.name}</Title>
            <Amount typeProp={data.type}>
                {data.type === 'down' ? "- " : "+ "}
                {data.amount}
            </Amount>

            <Footer>
                <Category>
                    <Icon name={category.icon}></Icon>
                    <CategoryName>{category.name}</CategoryName>
                </Category>

                <Date>{data.date}</Date>
            </Footer>
        </Container>
    );
}