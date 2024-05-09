import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/colors';
import Button from '../onBoarding/components/Button';
import Entypo from 'react-native-vector-icons/Entypo';
import Rating from './components/Rating';
import YearExp from './components/YearExp';
import Reviews from './components/Reviews';
import Patients from './components/Patients';

const data = [
  {
    icon: <Patients />,
    name: 'Patients',
    number: 1000,
  },
  {
    icon: <YearExp />,
    name: 'Year Exp.',
    number: 10,
  },
  {
    icon: <Rating />,
    name: 'Rating',
    number: 4.9,
  },
  {
    icon: <Reviews />,
    name: 'Reviews',
    number: 945,
  },
];

const ApointmentDetails = () => {
  return (
    <View style={styles.container}>
      {/* exit button */}
      <Button
        buttonStyle={{
          marginTop: 30,
          marginLeft: 0,
        }}
        onPress={() => {
          console.log('------------------call->');
        }}
        iconName="left"
      />
      {/* top mian heading */}
      <Text style={styles.mainHead}>Apointment Details</Text>

      <ScrollView>
      {/* dr detials here */}
      <View style={styles.mainCard}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../images/drImage.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Dr.Ajay Dholia</Text>
          <Text style={styles.dentist}>Dentist Consultation</Text>
          <View style={styles.locationContainer}>
            <Entypo name="location-pin" size={20} color={Colors.primaryColor} />
            <Text style={styles.description}>Delhi, India</Text>
          </View>
        </View>
      </View>

      {/* horizontal line */}
      <View style={styles.horzontalLine}></View>

      {/* icon list in a row */}
      <View style={styles.mainWrapper}>
        {data.map((item, index) => {
          return (
            <View key={index}>
              <View style={styles.icon}>{item.icon}</View>
              <Text style={[styles.name, styles.rating]}>{item.number}+</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          );
        })}
      </View>

      {/* mid heading */}
      <Text style={styles.midHead}>Appointment Booked </Text>

      {/* booking date and time */}
      <View>
        <View style={styles.dateTime}>
          <Text style={styles.firstOne}>Date & Hour</Text>
          <Text style={[styles.firstOne, styles.secOne]}>
            March 24,2024 | 10:00 AM
          </Text>
        </View>

        <View style={styles.dateTime}>
          <Text style={styles.firstOne}>Duration</Text>
          <Text style={[styles.firstOne, styles.secOne]}>30 minutes</Text>
        </View>

        <View style={styles.dateTime}>
          <Text style={styles.firstOne}>Booking for</Text>
          <Text style={[styles.firstOne, styles.secOne]}>Self</Text>
        </View>
      </View>

      {/* horizontal line */}
      <View style={styles.horzontalLine}></View>

      {/* amount details and duration */}
      <View>
        <View style={styles.dateTime}>
          <Text style={styles.firstOne}>Amount</Text>
          <Text style={[styles.firstOne, styles.secOne ]}>INR 4500</Text>
        </View>

        <View style={styles.dateTime}>
          <Text style={styles.firstOne}>Duration</Text>
          <Text style={[styles.firstOne, styles.secOne ]}>30 minutes</Text>
        </View>

        <View style={styles.dateTime}>
          <Text style={styles.firstOne}>Payment Via</Text>
          <Text style={[styles.firstOne, styles.secOne ]}>By Card</Text>
        </View>
      </View>

       {/* horizontal line */}
       <View style={styles.horzontalLine}></View>

       {/* Uploaded your Prescription here */}
       <Text style={styles.precDetails}>Uploaded your Prescription</Text>
       
       </ScrollView>
    </View>
  );
};

export default ApointmentDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    // borderWidth: 1,
    // height: '100%',
  },
  mainHead: {
    fontSize: 18,
    position: 'absolute',
    marginTop: 35,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: '600',
    color: Colors.black,
    right: 90,
  },
  mainCard: {
    flexDirection: 'row',
    marginTop: 30,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    paddingLeft: 0,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  content: {
    flex: 2,
    padding: 10,
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Colors.black,
  },
  dentist: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '500',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  description: {
    fontSize: 16,
  },
  horzontalLine: {
    backgroundColor: Colors.black,
    borderWidth: 0.2,
    marginTop: 20,
  },
  mainWrapper: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  icon: {
    backgroundColor: '#cfe8df',
    padding: 20,
    borderRadius: 50,
  },
  rating: {
    color: Colors.primaryColor,
  },
  name: {
    // marginTop: 5,
    alignItems: 'center',
    textAlign: 'center',
    color: Colors.black,
    fontWeight: '400',
  },
  midHead: {
    fontSize: 16,
    marginTop: 25,
    fontWeight: '500',
    marginBottom: 10
  },
  dateTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  firstOne: {
    fontSize: 16,
    fontWeight: '400',
  },
  secOne: {
    color: Colors.black,
  },
  precDetails:{
    fontSize: 16,
    fontWeight: '400'
  }
});
