import React from "react";
import {TouchableOpacityProps} from 'react-native'

import {
    Container,
    Category,
    Icon
} from './style';

interface Props {
    title:string
}

export function CategorySelect({title}: Props) {
    return(
        <Container>
            <Category>{title}</Category>
            <Icon name="chevron-down" />
        </Container>
    )
}