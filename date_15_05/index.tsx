import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import CustomTextInput from '../auth/components/CustomTextInput';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

const PasswordManager = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const toggleBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };
  return (
    <View style={styles.container}>
      {/* start btn and exit button */}
      <View style={styles.head}>
        <View style={styles.exitButton}>
          <AntDesign name="arrowleft" size={24} color={'black'} />
        </View>
        <Text style={styles.mainHead}>Password Manager</Text>
      </View>

      {/* input field start from here */}
      <CustomTextInput
        isRightIcon={true}
        rightIcon={<Feather name="eye-off" color="rgba(103, 114, 148, 1)" />}
        inputContainerStyle={{
          height: 54,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: 12,
          marginTop: 30,
          paddingLeft: 20,
          borderColor: 'rgba(103, 114, 148, 0.16)',
          borderWidth: 1,
          paddingRight: 10,
        }}
        placeholder="Password"
      />

      <TouchableOpacity onPress={toggleBottomSheet}>
        <Text style={styles.forgot}>Forgot password</Text>
      </TouchableOpacity>

      {/* new pass */}
      <CustomTextInput
        isRightIcon={true}
        rightIcon={<Feather name="eye-off" color="rgba(103, 114, 148, 1)" />}
        inputContainerStyle={{
          height: 54,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: 12,
          marginTop: 15,
          paddingLeft: 20,
          borderColor: 'rgba(103, 114, 148, 0.16)',
          borderWidth: 1,
          paddingRight: 10,
        }}
        placeholder="New Password"
      />

      {/* confirm pass */}
      <CustomTextInput
        isRightIcon={true}
        rightIcon={<Feather name="eye-off" color="rgba(103, 114, 148, 1)" />}
        inputContainerStyle={{
          height: 54,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: 12,
          marginTop: 20,
          paddingLeft: 20,
          borderColor: 'rgba(103, 114, 148, 0.16)',
          borderWidth: 1,
          paddingRight: 10,
        }}
        placeholder="Confirm Password"
      />
    </View>
  );
};

export default PasswordManager;

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
  forgot: {
    justifyContent: 'flex-end',
    textAlign: 'right',
    marginTop: 10,
    color: 'rgba(14, 190, 127, 1)',
    fontWeight: '400',
    fontSize: 16,
  },
});
