import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({activeOpacity: 0.7})`
   background-color: ${({ theme }) => theme.colors.secundary};
   width: 100%;
   border-radius: 5px;
   align-items:center
   padding: 18px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.shape};

`;