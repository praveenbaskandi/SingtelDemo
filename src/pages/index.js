import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';

import {getNumberListData} from '../redux/numberList/action';
import DialogSuccess from '../component/Dialogs/DialogSuccess';
import FlipCard from '../component/FlipCard';
import Header from '../component/Heading';
import useSelect from './selector';
import * as S from './style';

const HomePage = () => {
  const dispatch = useDispatch();
  const {translations, numberList} = useSelect();
  const [showDialog, updateShowDialog] = useState(true);
  const [steps, setSteps] = useState(0);
  const [localArr, setLocalArr] = useState([]);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    dispatch(getNumberListData());
  }, [dispatch]);

  useEffect(() => {
    setDataList(numberList);
  }, [numberList]);

  // check whteher user win or not?
  useEffect(() => {
    const checkWin = dataList.filter(item => !item.pass);
    if (checkWin.length === 0) {
      updateShowDialog(true);
    }
  }, [dataList]);

  const onClickSelected = (index, text) => {
    const updated = dataList.map(item =>
      item.id === index ? {...item, click: !item.click} : item,
    );
    setDataList(updated);
    localArr.push(text);

    if (localArr.length === 2) {
      setTimeout(() => {
        let updatedLocal;
        if (localArr[0] === localArr[1]) {
          updatedLocal = dataList.map(item =>
            item.text === localArr[0]
              ? {...item, click: false, pass: true}
              : item,
          );
        } else {
          updatedLocal = dataList.map(item =>
            item.text !== 'localArr[0]' ? {...item, click: false} : item,
          );
        }
        setLocalArr([]);
        setDataList(updatedLocal);
      }, 500);
    }
    setSteps(steps + 1);
  };

  const resetData = () => {
    dispatch(getNumberListData());
    setSteps(0);
    setLocalArr([]);
    updateShowDialog(false);
  };

  const renderItem = (item, index) => (
    <FlipCard
      friction={8}
      perspective={500}
      flip={item.click || item.pass}
      clickable={false}>
      {/* Face Side */}
      <S.Cover
        onPress={() => {
          onClickSelected(item.id, item.text);
        }}
        disabled={false}
        click={false}>
        <S.Text click={false}>{translations.question}</S.Text>
      </S.Cover>
      {/* Back Side */}
      <S.Cover disabled={true} click={true}>
        <S.Text click={true}>{item.text}</S.Text>
      </S.Cover>
    </FlipCard>
  );

  return (
    <S.HeadContainer>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      {/* Header UI */}
      <Header heading={translations.singtelDemo} />
      <S.Box>
        <S.TextReset onPress={() => resetData()}>
          {translations.reset}
        </S.TextReset>
        <S.TextScore>{`${translations.steps} ${steps}`}</S.TextScore>
      </S.Box>

      {/* Card UI */}
      <S.ListView
        data={dataList}
        numColumns={3}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={item => item.id}
      />

      {/* Dialog UI */}
      <DialogSuccess
        isVisible={showDialog}
        title={translations.congratulations}
        subTitle={`${translations.youWinThis} ${steps} ${translations.step}`}
        btnText={translations.tryAnotherRound}
        buttonClick={() => resetData()}
      />
    </S.HeadContainer>
  );
};

export default HomePage;
