import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../config';
import {
  createDynamicStyle,
  createDynamicValue,
  useDynamicStyleSheet,
} from '../../core/theme';
import {scale, widthPercentageToDP} from '../../helpers/DimensionsHelper';
import NavigationHelper from '../../helpers/NavigationHelper';
import {updateIndexBottom} from '../../store/actions/bottom';

const BottomTabBarItem = ({tab, focused}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.stack.theme);
  const styles = useDynamicStyleSheet(dynamicStyles, theme);

  let txtTitle = tab.title;

  const {icon, route} = tab;

  return (
    <TouchableOpacity
      activeOpacity={1}
      eventName={route}
      key={route}
      style={styles.container}
      onPress={() => {
        NavigationHelper.navigate(route);
        dispatch(updateIndexBottom(route));
      }}>
      {/* <Image
        source={icon}
        style={focused ? styles.imgIconActive : styles.imgIcon}
      /> */}
      <Text style={[styles.titleText, focused && styles.titleActive]}>
        {txtTitle}
      </Text>
    </TouchableOpacity>
  );
};

const dynamicStyles = createDynamicStyle({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPercentageToDP(20),
    height: '100%',
    backgroundColor: createDynamicValue(Colors.white, Colors.blackRussian),
  },
  titleText: {
    fontSize: scale(12),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.darkGray,
  },
  imgIcon: {
    width: scale(20),
    height: scale(20),
    marginBottom: scale(4),
    tintColor: Colors.darkGray,
  },
  imgIconActive: {
    width: scale(20),
    height: scale(20),
    marginBottom: scale(4),
    tintColor: Colors.persimmon,
  },
  viewCount: {
    width: scale(25),
    height: scale(25),
    borderRadius: scale(13),
    backgroundColor: Colors.crimson,
    marginTop: scale(4),
    right: scale(-10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCount: {
    fontSize: scale(12),
    color: Colors.white,
  },
  titleActive: {
    color: Colors.persimmon,
  },
});

export default BottomTabBarItem;
