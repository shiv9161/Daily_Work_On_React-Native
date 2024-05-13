import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Button from '../onBoarding/components/Button';
import {Colors} from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* start btn and exit button */}
      <Button
        buttonStyle={{
          marginTop: 20,
          marginLeft: 0,
          // position: 'absolute',
          // zIndex: 1,
        }}
        onPress={() => {
          console.log('------------------call->');
        }}
        iconName="left"
      />
      {/* top main heading */}
      <Text style={styles.mainTitle}>Profile</Text>

      <View style={styles.secMainHead}>
        {/* user image */}
        <View style={styles.drHeadImg}>
          <Image
            source={require('../../images/drImage.png')}
            style={styles.drImgMain}
          />
          <Text style={styles.drImgPara}>Shivam Rajput</Text>
        </View>

        {/* all start here  */}
        <View style={styles.detailTop}>
          <View style={styles.menuItem}>
            <View style={styles.secMidHead}>
              <Ionicons name="person" size={20} color={Colors.primaryColor} />
              <Text style={styles.headingPara}>Your Profile</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </View>
          {/* hr line */}
          <View style={styles.horzontalLine}></View>
          <View style={styles.menuItem}>
            <View style={styles.secMidHead}>
              <MaterialIcons
                name="payment"
                size={20}
                color={Colors.primaryColor}
              />
              <Text style={styles.headingPara}>Payment Method</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </View>
          {/* hr line */}
          <View style={styles.horzontalLine}></View>
          <View style={styles.menuItem}>
            <View style={styles.secMidHead}>
              <MaterialIcons
                name="password"
                size={20}
                color={Colors.primaryColor}
              />
              <Text style={styles.headingPara}>Password Manager</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </View>
          {/* hr line */}
          <View style={styles.horzontalLine}></View>
          <View style={styles.menuItem}>
            <View style={styles.secMidHead}>
              <AntDesign
                name="deleteuser"
                size={20}
                color={Colors.primaryColor}
              />
              <Text style={styles.headingPara}>Delete Account</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </View>
          {/* hr line */}
          <View style={styles.horzontalLine}></View>
          <View style={styles.menuItem}>
            <View style={styles.secMidHead}>
              <MaterialIcons
                name="privacy-tip"
                size={20}
                color={Colors.primaryColor}
              />
              <Text style={styles.headingPara}>Privacy Policy</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </View>
          {/* hr line */}
          <View style={styles.horzontalLine}></View>
          <View style={styles.menuItem}>
            <View style={styles.secMidHead}>
              <AntDesign name="logout" size={20} color={Colors.primaryColor} />
              <Text style={styles.headingPara}>Log out</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </View>
          {/* hr line */}
          <View style={styles.horzontalLine}></View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  mainTitle: {
    fontSize: 18,
    position: 'absolute',
    marginTop: 25,
    // textAlign: 'center',
    // alignItems: 'center',
    fontWeight: '500',
    color: Colors.black,
    right: 145,
  },
  secMainHead: {
    marginTop: 30,
  },
  drHeadImg: {
    alignItems: 'center',
  },
  drImgMain: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // top: 0
  },
  drImgPara: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    marginTop: 10,
  },
  detailTop: {
    marginTop: 30,
  },
  headingPara: {
    fontWeight: '500',
    fontSize: 16,
    color: Colors.black,
    marginBottom: 20,
    // borderWidth: 1,
    marginLeft: 10,
  },
  secMidHead: {
    flexDirection: 'row',
    // marginBottom: 10
  },
  horzontalLine: {
    borderColor: '#677294',
    borderWidth: 0.2,
    // marginTop: 20,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
