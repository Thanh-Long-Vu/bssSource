import React from 'react';
import {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {getListUserPayment} from '../../core/api';
import {useSelector} from 'react-redux';
import useDynamicStyleSheet from '../../core/theme/useDynamicStyleSheet';
import {createDynamicStyle} from '../../core/theme';
import {
  heightPercentageToDP,
  scale,
  widthPercentageToDP,
} from '../../helpers/DimensionsHelper';

const HomeScreen = () => {
  const theme = useSelector(state => state.stack.theme);
  const styles = useDynamicStyleSheet(dynamicStyles, theme);
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await getListUserPayment();
    setData(res?.data || null);
  };
  useEffect(() => {
    getData();
  }, []);
  const onPress = item => {
    //Viêt Popup để show thông tin phần detail sản phẩm
    console.log('show', item);
    return (
      <View>
        <Text>{JSON.stringify(item)}</Text>
      </View>
    );
  };
  const renderItem = ({item, index}) => {
    const nameAvatar = item?.last_name + item?.first_name || 'Name';
    const titleSkill = item?.employment?.title || 'Skill';
    return (
      <TouchableOpacity style={{flex: 1}} onPress={() => onPress(item)}>
        <View style={styles.viewBox}>
          <View style={styles.boxImage}>
            <Image style={styles.images} source={{uri: item?.avatar}} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.name}>{nameAvatar}</Text>
            <Text style={styles.skill}>{titleSkill}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};
const dynamicStyles = createDynamicStyle({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentageToDP(10),
    backgroundColor: 'green',
  },
  viewBox: {
    borderRadius: scale(10),
    backgroundColor: 'white',
    margin: scale(5),
    padding: scale(5),
    flex: 1,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxImage: {
    width: 100,
    height: 100,
  },
  images: {width: '100%', height: '100%', resizeMode: 'center'},
  name: {
    fontWeight: 'bold',
    marginHorizontal: scale(1),
    marginVertical: scale(5),
    textAlign: 'left',
  },
  skill: {
    marginHorizontal: scale(1),
  },
});
export default HomeScreen;
