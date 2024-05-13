import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../onBoarding/components/Button';
import {Colors} from '../../theme/colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CustomTextInput from '../auth/components/CustomTextInput';
import Button2 from '../../components/Button';

const CancelBooking = () => {
  return (
    <View style={styles.container}>
      <Button
        buttonStyle={{
          marginTop: 30,
          marginLeft: 0,
          position: 'absolute',
          zIndex: 1,
        }}
        onPress={() => {
          console.log('------------------call->');
        }}
        iconName="left"
      />
      {/* top main heading */}
      <Text style={styles.mainTitle}>Cancel Booking</Text>

      {/* sec main head */}
      <View style={styles.secMainHead}>
        <Text style={styles.secMainPara}>
          Please Select the reason for cancellations:
        </Text>

        {/* text list and btn choose */}
        <View style={styles.listHead}>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              size={20}
              fillColor={Colors.primaryColor}
              innerIconStyle={{borderWidth: 2}}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
            <Text style={styles.listPara}>Schedule Change</Text>
          </View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              size={20}
              fillColor={Colors.primaryColor}
              innerIconStyle={{borderWidth: 2}}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
            <Text style={styles.listPara}>Weather Conditions</Text>
          </View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              size={20}
              fillColor={Colors.primaryColor}
              innerIconStyle={{borderWidth: 2}}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
            <Text style={styles.listPara}>Unexpected Work</Text>
          </View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              size={20}
              fillColor={Colors.primaryColor}
              innerIconStyle={{borderWidth: 2}}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
            <Text style={styles.listPara}>Childcare Issue</Text>
          </View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              size={20}
              fillColor={Colors.primaryColor}
              innerIconStyle={{borderWidth: 2}}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
            <Text style={styles.listPara}>Travels Delays</Text>
          </View>
        </View>

        {/* horizontal line */}
        <View style={styles.horzontalLine}></View>

        {/* others */}
        <View style={styles.otherTop}>
          <Text style={styles.othersLast}>Others</Text>
          <CustomTextInput
            inputContainerStyle={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              borderRadius: 12,
              paddingLeft: 20,
              borderColor: 'rgba(103, 114, 148, 0.16)',
              borderWidth: 1,
              height: 150,
              marginTop: 20,
              width: '100%',
            }}
            inputStyle={{alignSelf: 'flex-start'}}
            placeholder="Enter Your Reason.."
            multiline={true}
          />
        </View>

        {/* last navigation button here */}
        <View style={styles.lastBtn}>
        <Button2
          label="Cancel Appointment"
          onPress={() => {
            console.log('------------>');
          }}
          buttonStyle={{
            width: '100%',
            display: 'flex',
            marginTop: 25,
            marginBottom: 270,
            height: 54,
          }}
        />
        </View>
      </View>
    </View>
  );
};

export default CancelBooking;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    // borderWidth: 1,
    // height: '100%',
  },
  mainTitle: {
    fontSize: 18,
    position: 'absolute',
    marginTop: 35,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: '500',
    color: Colors.black,
    right: 100,
  },
  secMainHead: {
    marginTop: 100,
  },
  secMainPara: {
    fontWeight: '400',
    fontSize: 16,
  },
  listHead: {
    marginTop: 0,
  },
  listPara: {
    // paddingBottom: 20,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
    color: Colors.black,
  },
  checkBox: {
    flexDirection: 'row',
    // borderWidth: 1,
    marginTop: 20,
  },
  horzontalLine: {
    borderColor: '#677294',
    borderWidth: 0.2,
    marginTop: 20,
    // marginHorizontal: 30,
  },
  otherTop: {
    marginTop: 20,
  },
  othersLast: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
  lastBtn:{
    alignItems: 'center',
    marginTop: 40
  }
});
