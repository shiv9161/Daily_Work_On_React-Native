import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../onBoarding/components/Button';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomTextInput from './components/CustomTextInput';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchLocation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Button
          buttonStyle={{
            left: 30,
            marginTop: 30,
            marginLeft: 0,
            color: Colors.SecondaryColor,
          }}
          onPress={() => {
            console.log('------------------call->');
          }}
          iconName="left"
        />

        <Text style={styles.mainHead}>Enter your location</Text>

        {/* <AntDesign name="search1" size={30} color="black" /> */}

        {/* graphketing input and logo */}
        <CustomTextInput
          leftIcon={<AntDesign name="search1" size={25} color={Colors.black}  />}
          isLeftIcon={true}
          inputContainerStyle={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: 12,
            paddingLeft: 20,
            borderColor: 'rgba(103, 114, 148, 0.16)',
            borderWidth: 1,
            height: 60,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
          }}
          placeholderTextColor={'black'}
          placeholder="Graphketing"
        />

        {/* share your location */}
        <View style={styles.shareLocation}>
          <TouchableOpacity>
            <FontAwesome5 name="location-arrow" size={20} color={Colors.black}  />
            <Text style={styles.shareHead}>Share your location</Text>
          </TouchableOpacity>
        </View>

        {/* horizontal line */}
        <View style={styles.horizontalLine}></View>
        
        {/* search result */}
        <View>
        <Text style={styles.searchResult}>Search result</Text>
        </View>

        {/* share your location */}
        <View style={styles.shareLocation}>
          <TouchableOpacity>
            <FontAwesome5 name="location-arrow" size={20} color={Colors.black} />
            <Text style={[styles.shareHead, styles.graphOff]}>Graphketing Office</Text>
          </TouchableOpacity>
        </View>

        <View>
        <Text style={[styles.shareHead, styles.lastHead]}>Graphketing office sector 62 noida..</Text>
        </View>

      </View>
    </View>
  );
};

export default SearchLocation;

const styles = StyleSheet.create({
  container: {},
  head: {},
  mainHead: {
    fontSize: 18,
    position: 'absolute',
    marginTop: 35,
    marginLeft: 90,
    fontWeight: '600',
    color: Colors.black,
  },
  shareLocation: {
    marginTop: 20,
    marginLeft: 50,
  },
  shareHead: {
    fontSize: 14,
    position: 'absolute',
    marginLeft: 35,
    fontWeight: '600'
  },
  horizontalLine: {
    borderWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: 'black',
  },
  searchResult: {
    fontSize: 15,
    marginTop: 20,
    marginLeft: 55,
    fontWeight: '600',
    color: Colors.black,

  },
  graphOff: {
    color: Colors.black,
    fontSize: 15
  },
  lastHead: {
    marginLeft: 50,
    marginTop: 5
  }
});

