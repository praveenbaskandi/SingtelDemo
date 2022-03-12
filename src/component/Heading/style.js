import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {Colors} from '../../utils/Colors';
import {statusbarHeight} from '../../utils/dimension';
import {isAndroid} from '../../utils/common';
import {Title} from '../Text';

export const HeadContainer = styled.View`
  width: 100%;
  height: ${scale(50)}px;
  flex-direction: row;
  padding-horizontal: ${scale(20)}px;
  align-items: center;
  justify-content: space-between;
  margin-top: ${scale(statusbarHeight)}px;
  background-color: ${Colors.pBackColor};
`;

export const Heading = styled(Title)`
  font-size: ${scale(22)}px;
  line-height: ${scale(23)}px;
  align-self: center;
  color: ${Colors.white};
  ${isAndroid ? 'font-family: EffraHeavy;' : 'font-weight: 900;'}
`;
