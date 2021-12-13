import React from "react";
import { categories } from "../../utils/categories";
import {Buttom} from '../../components/forms/buttom';

import {
    Container,
    Header,
    Title,
    Category,
    Icon,
    Name,
    ListCategory,
    Separator,
    Footer
} from './style'
import { Button } from "react-native";

interface Category {
    key: string;
    name: string;
}

interface Props {
    category: Category
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}


export function CategorySelect({ category, setCategory, closeSelectCategory }: Props) {
    return (
        <Container>
            <Header>
                <Title>Categorias</Title>
            </Header>

            <ListCategory
                data={categories}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) =>
                    <Category 
                        onPress={() => setCategory(item)}
                        isActive={category.key === item.key}
                    >
                        <Icon name={item.icon} />
                        <Name>{item.name}</Name>
                    </Category>
                }
                ItemSeparatorComponent={() => <Separator />}
            />

            <Footer>
               <Buttom onPress={closeSelectCategory} title="Selecionar" />
            </Footer>

        </Container>
    )
}
