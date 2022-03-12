import * as types from './types';

const getNumberListRequest = () => ({
  type: types.GET_NUMBER_LIST_REQUEST,
});

const getNumberListSuccess = payload => ({
  type: types.GET_NUMBER_LIST_SUCCESS,
  payload,
});

const getNumberListFailure = payload => ({
  type: types.GET_NUMBER_LIST_FAILURE,
  payload,
});

export const getNumberListData = () => async (dispatch, getState) => {
  dispatch(getNumberListRequest());
  try {
    const array = [];
    let randomArray = [];

    // generate random number
    while (randomArray.length < 6) {
      var r = Math.floor(Math.random() * 100) + 1;
      if (randomArray.indexOf(r) === -1) {
        randomArray.push(r);
      }
    }

    // add random number to data list
    let counter = 0;
    for (let count = 0; count < randomArray.length; count += 1) {
      array.push({
        id: `#${counter}`,
        text: `${randomArray[count]}`,
        click: false,
        pass: false,
      });
      array.push({
        id: `#${counter + 1}`,
        text: `${randomArray[count]}`,
        click: false,
        pass: false,
      });
      counter = counter + 2;
    }

    // randomize of the array
    dispatch(getNumberListSuccess(array.sort(() => Math.random() - 0.5)));
  } catch (error) {
    dispatch(getNumberListFailure('some error occure'));
  }
};
