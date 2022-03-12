import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {Title} from '../../Text';
import {Colors} from '../../../utils/Colors';
import {isAndroid} from '../../../utils/common';

export const Container = styled.View`
  width: 95%;
  max-width: ${scale(335)}px;
  border-radius: ${scale(15)}px;
  padding-vertical: ${scale(20)}px;
  align-self: center;
  align-items: center;
  background-color: ${Colors.white};
`;

export const TitleHead = styled(Title)`
  align-self: center;
  margin-horizontal: ${scale(20)}px;
  line-height: ${scale(36)}px;
  font-size: ${scale(24)}px;
  color: ${Colors.darkBlack};
  ${isAndroid ? 'font-family: Effra-Heavy;' : 'font-weight: 900;'}
`;

export const Subtitle = styled(Title)`
  align-self: center;
  margin-top: ${scale(7)}px;
  font-size: ${scale(18)}px;
  margin-horizontal: ${scale(20)}px;
  line-height: ${scale(24)}px;
  color: ${Colors.darkBlack};
`;

export const Buttons = styled.View`
  padding-bottom: ${scale(26)}px;
  width: 100%;
  padding-horizontal: ${scale(20)}px;
`;
