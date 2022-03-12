import React from 'react';
import {string} from 'prop-types';

import * as S from './style';

const HeadingBar = ({heading}) => {
  return (
    <S.HeadContainer>
      <S.Heading>{heading}</S.Heading>
    </S.HeadContainer>
  );
};

HeadingBar.propTypes = {
  heading: string.isRequired,
};

export default HeadingBar;
