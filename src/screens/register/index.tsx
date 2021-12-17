import React, { useState } from "react";
import { Input } from "../../components/forms/input/input";
import { Buttom } from "../../components/forms/buttom";
import { TransactionTypeButtom } from './../../components/forms/TransactionTypeButtom';
import { CategorySelectButtom } from "../../components/forms/categorySelectButtom";
import { Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { CategorySelect } from "../CategorySelect";
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from '@react-navigation/native';

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from './style'

export function Register() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('');
    const [modal, setModal] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });

    const HandleRegister = async () => {
        if (!transactionType || !name || !amount || category.key === 'category') {
            setAlertText("Informe os dados necessários")
            setAlert(true)
        } else {
            const newTransaction = {
                id: String(new Date().getTime()),
                name,
                amount,
                transactionType,
                category: category.key,
                date: new Date()
            }

            try {
                const dataAsync = await AsyncStorage.getItem("@controlfinances:transactions")
                const currentData = dataAsync ? JSON.parse(dataAsync) : [];

                const dataFormatted = [
                    ...currentData,
                    newTransaction
                ]

                await AsyncStorage.setItem("@controlfinances:transactions", JSON.stringify(dataFormatted))
                setName("")
                setAmount("")
                setTransactionType('')
                setCategory({
                    key: 'category',
                    name: 'Categoria',
                })
                navigation.navigate('Listagem');

            } catch (error) {
                console.log(error)
                setAlertText('Não foi possível salvar')
            }
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <AwesomeAlert
                        show={alert}
                        title="Atenção"
                        message={alertText}
                        showConfirmButton={true}
                        confirmText="OK"
                        confirmButtonColor="#DD6B55"
                        onCancelPressed={() => {
                            setAlert(false)
                        }}
                        onConfirmPressed={() => {
                            setAlert(false)
                        }}
                    />

                    <Fields>
                        <Input
                            placeholder="Nome"
                            value={name}
                            onChangeText={t => setName(t)}
                            autoCapitalize="sentences"
                            autoCorrect={false}
                        />

                        <Input
                            placeholder="Preço"
                            keyboardType="numeric"
                            value={amount}
                            onChangeText={t => setAmount(t)}
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

                    <Buttom onPress={HandleRegister} title="Enviar" />
                </Form>

                <Modal style={{ flex: 1, backgroundColor: '#000' }} visible={modal}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={() => setModal(false)}
                    />
                </Modal>

            </Container>
        </TouchableWithoutFeedback>
    );
}