import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, { useState } from 'react';
import Button from '../onBoarding/components/Button';
import {Colors} from '../../theme/colors';
import CustomTextInput from '../auth/components/CustomTextInput';
import Button2 from '../../components/Button';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';


const PatientDetails = () => {
  const navigation = useNavigation<any>();
  const [value, setValue] = useState(null);

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

      {/* top main heading */}
      <Text style={styles.mainHead}>Patient Details</Text>

      <ScrollView>
        {/* input field start from here */}
        {/* select gender dropdown */}
        <Dropdown
          onChange={item => {
            console.log(item);
          }}
          data={[
            {
              label: 'Reason 1',
              value: 'Reason 1',
            },
            {
              label: 'Reason 2',
              value: 'Reason 2',
            },
            {
              label: 'Reason 3',
              value: 'Reason 3',
            },
          ]}
          labelField="label"
          valueField="value"
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          inputSearchStyle={styles.inputSearchStyle}
          selectedTextStyle={styles.selectedTextStyle}
          // renderItem={renderItem}
          placeholder="Booking For"
          value={value}
          // onChange={item => {
          //   setValue(item.value);
          // }}
        />

        {/* select gender dropdown */}
        <Dropdown
          onChange={item => {
            console.log(item);
          }}
          data={[
            {
              label: 'Male',
              value: 'Male',
            },
            {
              label: 'Female',
              value: 'Female',
            },
            {
              label: 'Others',
              value: 'Others',
            },
          ]}
          labelField="label"
          valueField="value"
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          inputSearchStyle={styles.inputSearchStyle}
          selectedTextStyle={styles.selectedTextStyle}
          // renderItem={renderItem}
          placeholder="Gender"
          value={value}
          // onChange={item => {
          //   setValue(item.value);
          // }}
        />

        {/*select age drop down */}
        <Dropdown
          onChange={item => {
            console.log(item);
          }}
          data={[
            {
              label: '0-10',
              value: '0-10',
            },
            {
              label: '10-20',
              value: '10-20',
            },
            {
              label: '20-30',
              value: '20-30',
            },
          ]}
          labelField="label"
          valueField="value"
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          inputSearchStyle={styles.inputSearchStyle}
          selectedTextStyle={styles.selectedTextStyle}
          // renderItem={renderItem}
          placeholder="Your Age"
          value={value}
          // onChange={item => {
          //   setValue(item.value);
          // }}
        />

        <CustomTextInput
          inputContainerStyle={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: 12,
            paddingLeft: 20,
            borderColor: 'rgba(103, 114, 148, 0.16)',
            borderWidth: 1,
            height: 60,
            marginTop: 20,
            width: '100%',
          }}
          placeholder="Your Address"
        />

        <CustomTextInput
          inputContainerStyle={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: 12,
            paddingLeft: 20,
            borderColor: 'rgba(103, 114, 148, 0.16)',
            borderWidth: 1,
            height: 120,
            marginTop: 20,
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingBottom: 20,
          }}
          placeholder="Upload your Prescription"
          uploadsvg={true}
          inputStyle={{alignSelf: 'flex-start'}}
        />

        <CustomTextInput
          inputContainerStyle={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: 12,
            paddingLeft: 20,
            borderColor: 'rgba(103, 114, 148, 0.16)',
            borderWidth: 1,
            height: 160,
            marginTop: 20,
            width: '100%',
          }}
          inputStyle={{alignSelf: 'flex-start'}}
          placeholder="Write your problem here../optional"
          multiline={true}
        />

        {/* next button and navigation here */}
        <TouchableOpacity onPress={() => {
            navigation.navigate('PaymentMethod');
          }}>

        <Button2
          label="Next"
          onPress={() => {
            console.log('------------------call->');
          }}
          buttonStyle={{
            width: 290,
            display: 'flex',
            marginTop: 25,
            marginBottom: 90,
            // height: 70
          }}
          />
          </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default PatientDetails;

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
    right: 110,
  },
  dropdown: {
    marginTop: 20,
    marginLeft: 0,
    borderRadius: 12,
    height: 56,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(103, 114, 148, 0.16)',
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    // width: '47%',
  },
  placeholderStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
});