import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

const useKeyboardStatus = (): boolean => {
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyboardDidShow = () => setKeyboardVisible(true);
    const handleKeyboardDidHide = () => setKeyboardVisible(false);

    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return isKeyboardVisible;
};

export default useKeyboardStatus;
