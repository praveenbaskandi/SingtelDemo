import React from 'react';
import {string, func, number} from 'prop-types';

import * as S from './style';

const ButtonUI = ({btnText, click, mt, mb, fontSize}) => {
  return (
    <S.Container>
      <S.Cover onPress={click} mt={mt} mb={mb}>
        <S.Text font={fontSize}>{btnText}</S.Text>
      </S.Cover>
    </S.Container>
  );
};

ButtonUI.propTypes = {
  btnText: string.isRequired,
  click: func.isRequired,
  mt: number,
  mb: number,
  fontSize: number,
};

ButtonUI.defaultProps = {
  mt: 0,
  mb: 0,
  fontSize: 15,
};

export default ButtonUI;
