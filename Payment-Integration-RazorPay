import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RAZORPAY_KEY_ID, ROZOR_PAY_SECRET} from '@env';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  // console.log(ROZOR_PAY_SECRET, RAZORPAY_KEY_ID)
  let razorpayKeyId = RAZORPAY_KEY_ID;
  let razorpayKeySecret = ROZOR_PAY_SECRET;

  const amount = 1000;
  const currency = 'INR';

  const handlePayment = () => {
    var options = {
      description: 'Booking slot in hospital',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: currency,
      key: razorpayKeyId,
      amount: amount,
      name: 'Pay for slot booking',
      order_id: '',//Replace this with an order_id created using Orders API.
      prefill: {
        email: 'xyz@gmail.com',
        contact: '9191919191',
        name: 'Person Name'
      },
      theme: {color: '#53a20e'}
    }

    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  };
  return (
    <View>
      <Text>App</Text>
      <Text onPress={handlePayment} style={{backgroundColor: 'red', padding: 20, borderWidth: 1, color: 'white', margin: 10}}>Pay Now</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
