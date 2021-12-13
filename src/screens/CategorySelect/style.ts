import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface CategoryProps {
    isActive: boolean
}

export const Container = styled.View`
    flex:1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(18)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: flex-end;
    padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const ListCategory = styled.FlatList`
    flex: 1;
    width: 100%;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
   width: 100%;
   padding: ${RFValue(15)}px;
   flex-direction: row;
   align-items: center;

   background-color: ${({ isActive, theme }) => isActive ? theme.colors.secundary_light : theme.colors.background};
`;

export const Icon = styled(Feather)`
   font-size: ${RFValue(20)}px;
   margin-right: ${RFValue(16)}px;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
   height: 1px;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
   width: 100%;
   padding: ${RFValue(24)}px;
`;