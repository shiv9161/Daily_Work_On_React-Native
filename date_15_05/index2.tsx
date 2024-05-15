import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';


let data = [
  {
    name: 'Your Profile',
    icon: <Ionicons name="person" size={20} color={Colors.primaryColor} />,
    url: 'YourProfile',
  },
  {
    name: 'Payment Method',
    icon: (
      <MaterialIcons name="payment" size={20} color={Colors.primaryColor} />
    ),
    url: 'PaymentMethod',
  },
  {
    name: 'Password Manager',
    icon: (
      <MaterialIcons name="password" size={20} color={Colors.primaryColor} />
    ),
    url: 'PasswordManager',
  },
  {
    name: 'Delete Account',
    icon: <AntDesign name="deleteuser" size={20} color={Colors.primaryColor} />,
    url: '',
  },
  {
    name: 'Privacy Policy',
    icon: (
      <MaterialIcons name="privacy-tip" size={20} color={Colors.primaryColor} />
    ),
    url: '',
  },
  {
    name: 'Logout',
    icon: <AntDesign name="logout" size={20} color={Colors.primaryColor} />,
    url: '',
  },
];
const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* start btn and exit button */}
      <View style={styles.head}>
        <View style={styles.exitButton}>
          <AntDesign name="arrowleft" size={24} color={'black'} />
        </View>
        <Text style={styles.mainHead}>Profile</Text>
      </View>

      <View style={styles.secMainHead}>
        {/* user image */}
        <View style={styles.drHeadImg}>
          <Image
            source={require('../../images/drImage.png')}
            style={styles.drImgMain}
          />
          <Text style={styles.drImgPara}>Shivam Rajput</Text>
        </View>

        {/* -----------------map-fucntion--------------------- */}
        <View style={styles.topHeadPro}>
          {data.map((item, index) => {
            return (
              <View key={index} style={styles.detailTop}>
                <TouchableOpacity onPress={()=> navigation.navigate(item.url)}>
                  <View style={styles.menuItem}>
                    <View style={styles.secMidHead}>
                      {item.icon}
                      <Text style={styles.headingPara}>{item.name}</Text>
                    </View>
                    <AntDesign
                      name="right"
                      size={20}
                      color={Colors.primaryColor}
                    />
                  </View>
                </TouchableOpacity>
                {/* hr line */}
                <View style={styles.horzontalLine}></View>
              </View>
            );
          })}
        </View>
        {/* --------------------------------------------------------- */}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  exitButton: {
    position: 'absolute',
    left: 0,
  },
  mainHead: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
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
  topHeadPro: {
    marginTop: 30,
  },
  detailTop: {
    marginTop: 0,
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
