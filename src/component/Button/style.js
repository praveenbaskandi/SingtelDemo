import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {Title} from '../Text';
import {Colors} from '../../utils/Colors';

export const Container = styled.View`
  width: 100%;
`;

export const Cover = styled.TouchableOpacity`
  background-color: ${Colors.pDarkBlue};
  height: ${scale(40)}px;
  margin-horizontal: ${scale(20)}px;
  border-radius: ${scale(20)}px;
  justify-content: center;
  margin-top: ${({mt = 0}) => scale(mt)}px;
  margin-bottom: ${({mb = 0}) => scale(mb)}px;
`;

export const Text = styled(Title)`
  font-size: ${({font = 0}) => scale(font)}px;
  color: ${Colors.white};
  text-align: center;
  line-height: ${scale(15)}px;
`;
