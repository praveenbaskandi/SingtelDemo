import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {Colors} from '../../../utils/Colors';

export const ContainerView = styled.View`
  background-color: ${Colors.white};
  border-top-left-radius: ${scale(15)}px;
  border-top-right-radius: ${scale(15)}px;
  justify-content: center;
  padding: ${scale(20)}px;
  max-width: ${scale(400)}px;
`;

export const ContentContainer = styled.View`
  align-items: center;
  background-color: ${Colors.white};
  text-align: center;
`;

export const getDialogStyle = centerInScreen => ({
  justifyContent: centerInScreen ? 'center' : 'flex-end',
  margin: 0,
  paddingTop: 0,
});
