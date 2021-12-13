import React, { useState } from "react";
import { Input } from "../../components/forms/input/input";
import { Buttom } from "../../components/forms/buttom";
import { TransactionTypeButtom } from './../../components/forms/TransactionTypeButtom';
import { CategorySelect } from "../../components/forms/categorySelect";

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from './style'
import { Category } from "../../components/TransactionCard/style";

export function Register() {
    const [transactionType, setTransactionType] = useState('');

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input
                        placeholder="Nome"
                    />

                    <Input
                        placeholder="Preço"
                        keyboardType="numeric"
                    />

                    <TransactionTypes>
                        <TransactionTypeButtom
                            onPress={() => setTransactionType('up')}
                            type="up"
                            title="Entrada"
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButtom
                            type="down"
                            title="Saída"
                            onPress={() => setTransactionType('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionTypes>
                    <CategorySelect title="Categoria"></CategorySelect>
                </Fields>

                <Buttom title="Enviar" />
            </Form>
        </Container>
    );
}