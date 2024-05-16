import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../theme/colors';
import CustomTextInput from '../auth/components/CustomTextInput';
import FilterIcon from '../home/components/FilterIcon';
import BookingIcon from './components/BookingIcon';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

let data = [
  {
    icon: <SimpleLineIcons name="calendar" size={25} color={Colors.white} />,
    title: 'Appointment',
    para: 'Schedule Appointments',
  },
  {
    icon: <BookingIcon />,
    title: 'Booking',
    para: 'See Past Appointments',
  },
];

const AdminHomePage = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      {/* top header start here */}
      <View style={styles.head}>
        <View style={styles.rightSide}>
          <Image
            source={require('../../images/drImage.png')}
            style={styles.drImgMain}
          />
          <View style={styles.leftDrHead}>
            <Text style={styles.leftDrTitle}>Dr. Ajay Dholia</Text>
            <Text style={styles.leftDrPara}>Dentist</Text>
          </View>
        </View>
        <View style={styles.leftSide}>
          <View style={styles.rightTopFirst}>
            <Text style={styles.topFirstPara}>Location</Text>
          </View>
          <View style={styles.rightTopBottom}>
            <Entypo
              name="location-pin"
              size={20}
              color={Colors.adminSecondry}
            />
            <Text style={styles.topLeftPara}>Noida India</Text>
          </View>
        </View>
      </View>

      {/* search input and navigate*/}
      <View style={styles.secMidNav}>
        <View style={styles.inputMid}>
          <CustomTextInput
            inputContainerStyle={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              borderRadius: 12,
              paddingLeft: 35,
              borderColor: 'rgba(103, 114, 148, 0.16)',
              borderWidth: 1,
              height: 50,
              marginTop: 0,
              width: 294,
            }}
            placeholder="Search"
          />
        </View>

        <View style={styles.filterHead}>
          <FilterIcon />
        </View>
      </View>

      {/* manage your appointment here */}
      <View style={styles.manageHead}>
        <Text style={styles.manageApp}>Manage</Text>
      </View>

      <View style={styles.manageTopBar}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.manageBoxHead}>
              <View>{item.icon}</View>
              <Text style={styles.manageTitle}>{item.title}</Text>
              <Text style={styles.marginPara}>{item.para}</Text>
            </View>
          );
        })}
      </View>

      {/* book consultation */}
      <View style={styles.upcomingHead}>
        <View style={styles.secUpcoming}>
          <Text style={styles.upcomingPara}>Pending Appointment</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AdminBookingPage');
              // console.log('---------------->');
            }}>
            <Text style={styles.lastSeeAll}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* pending appointment details start */}
      <View style={styles.scheduleDetails}>
        <View style={styles.scheduleMid}>
          <Image
            source={require('../../images/drImage.png')}
            style={styles.drImgSchedule}
          />
          <View style={styles.scheduleHead}>
            <View style={styles.scheduleHeadMain}>
              <Text style={styles.scheduleParaOne}>Dr. Ajay Dholia</Text>
              <AntDesign name="right" size={16} color={Colors.white} />
            </View>
            <Text style={styles.scheduleParaTwo}>Dentist Consultation</Text>
          </View>
        </View>

        {/* schedule between */}
        <View style={styles.dateAndTime}>
          <View style={styles.dateAndTimeMid}>
            <SimpleLineIcons name="calendar" size={20} color={Colors.white} />
            <Text style={styles.leftSideDate}>Monday, 11 March</Text>
          </View>
          <View style={styles.dateAndTimeMid}>
            <MaterialCommunityIcons
              name="clock-time-four-outline"
              size={20}
              color={Colors.white}
            />
            <Text style={styles.rightSideDate}>09:00-10:00 AM</Text>
          </View>
        </View>
      </View>
      {/* pending appointment details end */}

      <View style={styles.upcomingHead}>
        <View style={styles.secUpcoming}>
          <Text style={styles.upcomingPara}>Reviews</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('Consultation');
              console.log('---------------->');
            }}>
            <Text style={styles.lastSeeAll}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* reviews code  */}
      <View style={styles.reviewsHere}>
        <View style={styles.scheduleMid}>
          <Image
            source={require('../../images/drImage.png')}
            style={styles.drImgSchedule}
          />
          <View style={styles.scheduleHead}>
            <View style={styles.scheduleHeadMain}>
              <Text style={[styles.scheduleParaOne, styles.scheduleBottom]}>
                Genden Tsomu
              </Text>
              <View style={styles.scheduleStarOne}>
                <View style={styles.scheduleStarIcon}>
                  <View style={styles.scheduleStar}>
                    <Octicons name="star-fill" size={15} color={'#FCC728'} />
                  </View>
                  <Text style={styles.scheduleRate}>4.5</Text>
                </View>
              </View>
            </View>
            <Text style={[styles.scheduleParaTwo, styles.schedulePara]}>
              1 day ago
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AdminHomePage;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  head: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // alignItems: 'center',
  },
  drImgMain: {
    width: 48,
    height: 48,
    borderRadius: 25,
  },
  leftDrHead: {
    marginLeft: 10,
  },
  leftDrTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
  },
  leftDrPara: {
    fontSize: 14,
    fontWeight: '400',
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSide: {},
  topFirstPara: {
    color: '#677294',
    fontSize: 16,
    fontWeight: '400',
  },
  rightTopFirst: {
    alignItems: 'flex-end',
  },
  rightTopBottom: {
    flexDirection: 'row',
  },
  topLeftPara: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
  secMidNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  inputMid: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterHead: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: Colors.adminSecondry,
    alignItems: 'center',
    justifyContent: 'center',
  },
  manageHead: {
    marginTop: 20,
  },
  manageApp: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.black,
  },
  manageTopBar: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  manageBoxHead: {
    backgroundColor: Colors.adminPrime,
    padding: 15,
    borderRadius: 15,
    height: 123,
    width: 165,
  },
  manageTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
  },
  marginPara: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '400',
    marginTop: 10,
  },
  divideHalfWhite: {
    // backgroundColor: Colors.white,
  },
  scheduleDetails: {
    width: 351,
    height: 155,
    borderRadius: 15,
    backgroundColor: Colors.adminSecondry,
    marginTop: 20,
  },
  scheduleMid: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1
  },
  drImgSchedule: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  scheduleHead: {
    marginLeft: 10,
    // color: Colors.white
    // borderWidth: 1
  },
  scheduleHeadMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 270,
  },
  scheduleParaOne: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  scheduleBottom: {
    color: Colors.black,
  },
  scheduleStarOne: {
    width: 56,
    height: 21,
    borderRadius: 12,
    backgroundColor: '#EFDA96',
  },
  scheduleStarIcon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  scheduleStar:{
    marginLeft: 6
  },
  scheduleRate: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
    marginRight: 6,
  },
  schedulePara: {
    color: Colors.adminSecondry,
  },
  scheduleParaTwo: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '400',
  },
  dateAndTime: {
    paddingVertical: 5,
    width: 322,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.adminPrime,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateAndTimeMid: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderColor: Colors.white,
  },
  leftSideDate: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 10,
  },
  rightSideDate: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 10,
  },
  upcomingHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  secUpcoming: {
    flexDirection: 'row',
  },
  upcomingPara: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.black,
  },
  lastSeeAll: {
    fontWeight: '500',
    color: Colors.adminPrime,
    fontSize: 16,
  },
  reviewsHere: {
    height: 70,
    width: '100%',
    borderRadius: 15,
    // borderWidth: 1,6
    marginTop: 20,
    backgroundColor: '#fffaf0',
  },
});
