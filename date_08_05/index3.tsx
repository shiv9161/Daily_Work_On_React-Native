import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import ClinicImg from './components/ClinicImg';
import Button from '../onBoarding/components/Button';
import {Colors} from '../../theme/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    icon: <ClinicImg />,
    name: 'Rome Dental Clinic',
  },
  {
    icon: <ClinicImg />,
    name: 'B Dental Clinic',
  },
  {
    icon: <ClinicImg />,
    name: 'C Dental Clinic',
  },
  {
    icon: <ClinicImg />,
    name: 'D Dental Clinic',
  },
];

const DentalClinic = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
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

      {/* main top heading */}
      <Text style={styles.mainHead}>Choose Your Dental Clinic</Text>

      {/* map function */}
      <View style={styles.mainWrapper}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.icomWrapper}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BestDoctor');
                }}>
                <View style={styles.icon}>{item.icon}</View>
              </TouchableOpacity>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default DentalClinic;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  mainHead: {
    fontSize: 18,
    position: 'absolute',
    marginTop: 35,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: '600',
    color: Colors.black,
    right: 60,
  },
  icomWrapper: {
    // alignContent: 'center',
    marginBottom: 15,
  },
  mainWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  icon: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  name: {
    marginTop: 5,
    textAlign: 'center',
    color: Colors.black,
    fontWeight: '600',
  },
});
