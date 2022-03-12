import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {isAndroid} from '../../utils/common';
import {Colors} from '../../utils/Colors';

const StyledText = styled.Text.attrs(({testID}) => ({
  accessibilityLabel: testID,
  accessible: !!testID,
}))`
  ${isAndroid ? 'font-family: Effra-Regular' : 'font-weight: 300;'};
`;

export const Divider = styled.View`
  background-color: ${Colors.glGrey};
  height: ${scale(1)}px;
  margin-bottom: ${({mb}) => scale(mb || 0)}px;
  margin-horizontal: ${({mh}) => scale(mh || 0)}px;
  margin-top: ${({mt = 0}) => scale(mt)}px;
`;

export const ErrorText = styled(StyledText)`
  color: ${Colors.error};
  font-size: ${scale(15)}px;
  letter-spacing: ${scale(0.2)}px;
  line-height: ${scale(17)}px;
`;

export const Title = styled(StyledText)`
  color: ${Colors.primary};
  font-size: ${scale(15)}px;
  letter-spacing: ${scale(0.44)}px;
  line-height: ${scale(15)}px;
  ${isAndroid ? 'font-family: Effra-Bold' : 'font-weight: 500;'};
`;

export const BottomTitle = styled(StyledText)`
  color: ${Colors.primary};
  font-size: ${scale(15)}px;
  letter-spacing: ${scale(0.44)}px;
  line-height: ${scale(15)}px;
  text-align: center;
`;
