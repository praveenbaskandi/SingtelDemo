import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {Title} from '../component/Text';
import {Colors} from '../utils/Colors';
import {windowHeight} from '../utils/dimension';

export const HeadContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.pBackColor};
`;

export const Cover = styled.TouchableOpacity`
  border-width: ${scale(2)}px;
  flex: 1;
  border-color: ${Colors.white};
  background-color: ${({click}) => (click ? Colors.white : Colors.pDarkBlue)};
  height: ${scale(windowHeight / 6)}px;
  border-radius: ${scale(10)}px;
  margin: ${scale(5)}px;
  justify-content: center;
  margin-bottom: ${({mb = 0}) => scale(mb)}px;
`;

export const Text = styled(Title)`
  font-size: ${scale(20)}px;
  color: ${({click}) => (click ? Colors.pHeadingBlack : Colors.white)};
  text-align: center;
  line-height: ${scale(25)}px;
`;

export const ListView = styled.FlatList`
  margin-top: ${scale(20)}px;
  margin-horizontal: ${scale(20)}px;
`;

export const TextReset = styled(Title)`
  font-size: ${scale(14)}px;
  line-height: ${scale(17)}px;
  text-align: left;
  align-self: flex-end;
  margin-right: ${scale(30)}px;
  margin-top: ${({mt = 0}) => scale(mt)}px;
  color: ${Colors.white};
`;

export const TextScore = styled(Title)`
  font-size: ${scale(14)}px;
  line-height: ${scale(17)}px;
  text-align: left;
  align-self: flex-end;
  margin-top: ${({mt = 0}) => scale(mt)}px;
  color: ${Colors.white};
`;

export const Box = styled.View`
  align-items: center;
  flex-direction: row;
  padding-horizontal: ${scale(25)}px;
  justify-content: space-between;
`;
