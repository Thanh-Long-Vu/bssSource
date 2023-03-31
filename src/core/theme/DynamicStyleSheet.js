import {StyleSheet} from 'react-native';
import {Constant} from '../../config';
import DynamicValue from './DynamicValue';

const parseStylesFor = (dynamicStyles, mode) => {
  const newStyles = {};
  for (const i in dynamicStyles) {
    const style = dynamicStyles[i];
    const newStyle = {};
    for (const item in style) {
      const value = style[item];
      newStyle[item] = value instanceof DynamicValue ? value[mode] : value;
    }
    newStyles[i] = newStyle;
  }
  return newStyles;
};

class DynamicStyleSheet {
  constructor(dynamicStyles) {
    this[Constant.Themes.darkTheme] = StyleSheet.create(
      parseStylesFor(dynamicStyles, Constant.Themes.darkTheme),
    );
    this[Constant.Themes.lightTheme] = StyleSheet.create(
      parseStylesFor(dynamicStyles, Constant.Themes.lightTheme),
    );
  }
}

export default DynamicStyleSheet;
