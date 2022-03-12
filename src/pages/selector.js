import {useSelector} from 'react-redux';

const useSelect = () => {
  const {screen} = useSelector(({locale}) => locale.translations.data);
  const {isLoading, numberList} = useSelector(({numberList: NL}) => NL);

  return {
    isLoading,
    numberList,
    translations: {
      ...screen,
    },
  };
};

export default useSelect;
