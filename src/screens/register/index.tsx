import React, { useState } from "react";
import { Input } from "../../components/forms/input/input";
import { Buttom } from "../../components/forms/buttom";
import { TransactionTypeButtom } from './../../components/forms/TransactionTypeButtom';
import { CategorySelectButtom } from "../../components/forms/categorySelectButtom";
import { Modal } from 'react-native';
import { CategorySelect } from "../CategorySelect";

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from './style'

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [modal, setModal] = useState(false);
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });

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
                    <CategorySelectButtom title={category.name} onPress={() => setModal(true)} />
                </Fields>

                <Buttom title="Enviar" />
            </Form>

            <Modal visible={modal}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={() => setModal(false)}
                />
            </Modal>
        </Container>
    );
}