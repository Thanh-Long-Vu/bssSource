import {Constant} from '../../config';

const useDynamicStyleSheet = (dynamicStyleSheet, theme) => {
  const defaultMode = Constant.Themes.lightTheme;
  const mode = theme || defaultMode;
  return dynamicStyleSheet[mode] || dynamicStyleSheet[defaultMode];
};

export default useDynamicStyleSheet;
