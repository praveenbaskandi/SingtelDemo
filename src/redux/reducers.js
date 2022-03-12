import {combineReducers} from 'redux';

import numberList from './numberList/reducer';

// Legacy
import locale from './locale';

export default () =>
  combineReducers({
    numberList,

    // Legacy
    locale,
  });
