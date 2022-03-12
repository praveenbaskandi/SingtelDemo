import React from 'react';
import {View} from 'react-native';

import S from './style';

const Face = ({children, onLayout, style}) => {
  return (
    <View style={[S.face, style]} onLayout={onLayout}>
      {children}
    </View>
  );
};

Face.propTypes = {
  children(props, propName, componentName) {},
};

export default Face;
