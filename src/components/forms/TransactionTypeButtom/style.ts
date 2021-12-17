import styled,{css} from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';

interface IconProps {
    type: 'up' | 'down';
}

interface ContainerProps {
    isActive: boolean;
    type: 'up' | 'down';
}

interface TextProps {
    isActive: boolean;
}

export const Container = styled.TouchableOpacity.attrs({activeOpacity: 0.7})<ContainerProps>`
    width: 48%;
    flex-direction: row;
    align-items: center;
    border-width: ${({ isActive }) => isActive ? 0 :  1}px;
    border-style:solid;
    border-color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    padding: 16px;
    justify-content:center;

    ${({ theme, type, isActive })  => isActive && type === 'up' && css`
    background-color: ${({ theme })  => theme.colors.success_light};`}

    ${({ theme, type, isActive })  => isActive && type === 'down' && css`
    background-color: ${({ theme })  => theme.colors.attention_light};
    `};
`;

export const Title = styled.Text<TextProps>`
     font-size: ${RFValue(14)}px;
     font-family: ${({ theme }) => theme.fonts.regular};
     color: ${({ isActive, theme }) => isActive ? theme.colors.shape :  theme.colors.text}
`;

export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    color: ${({ theme, type })  => type === 'up' ? theme.colors.success : theme.colors.attention};
`;