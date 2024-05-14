import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Pregnancy from './Pregnancy';
import Apointment from './Apointment';
import Pathology from './Pathology';
import Virtual from './Virtual';
import {Colors} from '../../../theme/colors';

let data = [
  {
    image: <Pathology />,
    name: 'Virtual Clinic Anytime / Anywhere',
  },
  {
    image: <Apointment />,
    name: 'Appointment for Radiology',
  },
  {
    image: <Virtual />,
    name: 'Virtual Clinic Anytime / Anywhere',
  },
  {
    image: <Pregnancy />,
    name: 'My Pregnancy',
  },
];

const MoreServices = () => {
  return (
    <View style={styles.services}>
      {data.map((item, index) => {
        return (
          <View key={index} style={styles.container}>
            <View style={styles.imageMore}>{item.image}</View>
            <Text style={styles.morePara}>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default MoreServices;

const styles = StyleSheet.create({
  services: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  container: {
    marginTop: 20,
    width: 165,
    height: 165,
    backgroundColor: Colors.white,
    borderRadius: 15,
    // marginBottom: 300,
    // flexDirection: ''
  },
  morePara: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.black,
    marginLeft: 10,
    marginTop: 10,
  },
  imageMore: {
    // margin: 10
  },
});
