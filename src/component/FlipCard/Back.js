import React from 'react';
import {View, Platform} from 'react-native';
import {number} from 'prop-types';

import S from './style';

const Back = ({children, onLayout, style, perspective}) => {
  var transform = [];
  transform.push({scaleX: -1});
  if (Platform.OS === 'android') {
    transform.push({perspective: perspective});
  }

  return (
    <View style={[S.back, style, {transform: transform}]} onLayout={onLayout}>
      {children}
    </View>
  );
};

Back.defaultProps = {
  perspective: 1000,
};

Back.propTypes = {
  perspective: number,
  children(props, propName, componentName) {},
};

export default Back;
