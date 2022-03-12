import React from 'react';
import {string, func} from 'prop-types';

import Button from '../../Button';
import Dialog from '../Dialog';
import * as S from './style';

const DialogSuccess = ({title, subTitle, btnText, buttonClick, ...rest}) => {
  return (
    <Dialog centerInScreen withCustomContainer {...rest}>
      <S.Container>
        {title && <S.TitleHead>{title}</S.TitleHead>}
        <S.Subtitle>{subTitle}</S.Subtitle>
        <Button btnText={btnText} click={buttonClick} mt={20} />
      </S.Container>
    </Dialog>
  );
};

DialogSuccess.propTypes = {
  buttonClick: func.isRequired,
  title: string,
  subTitle: string,
  btnText: string,
};

DialogSuccess.defaultProps = {
  buttonClick: () => {},
};

export default DialogSuccess;
