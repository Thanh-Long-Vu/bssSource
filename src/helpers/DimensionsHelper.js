import {Dimensions, Platform, StatusBar, PixelRatio} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
import DeviceInfo from 'react-native-device-info';
import deviceInfoModule from 'react-native-device-info';

export const isIphoneX = () => {
  return DeviceInfo.hasNotch();
};

export const isIOS = () => {
  return Platform.OS === 'ios';
};

export const isSmallScreen = screenHeight < 569;

export const checkIsSmallScreen = () => {
  if (screenHeight <= 576) {
    return true;
  }
  return false;
};

export const marginTabBarTop = () => {
  if (screenHeight <= 600) {
    return '16.5%';
  }
  if (screenHeight <= 1000 && screenHeight > 600) {
    return '13.5%';
  }
  if (screenHeight > 1000) {
    return '11%';
  }
};
export const ifIphoneX = (iphoneXStyle, regularStyle) => {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
};

export const getStatusBarHeight = safe => {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
};

export const getBottomSpace = () => {
  return isIphoneX() ? 34 : 0;
};

export const widthPercentageToDP = widthPercent => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const heightPercentageToDP = heightPercent => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = size => {
  return (screenHeight / guidelineBaseHeight) * size;
};

export const horizontalScale = size => {
  return (screenWidth / guidelineBaseWidth) * size;
};

export const moderateScale = (size, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};

export const checkDynamicIsland = () => {
  return deviceInfoModule.hasDynamicIsland();
};
