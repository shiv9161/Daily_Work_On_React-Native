import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
  const [user, setUser] = useState('');

  const setData = async () => {
    await AsyncStorage.setItem("user", "Shiv")
  }

  const getData = async () => {
    const name = await AsyncStorage.getItem('user');
    console.log(name)
    setUser(name)
  }

  const removeData = async () => {
    await AsyncStorage.removeItem('user')
    setUser('')
  }

  return (
    <View>
      <Text style={{fontSize: 30}}>My name is {user}</Text>
      <Button  title='Set data' onPress={setData}/>
      <Button  title='Get data' onPress={getData}/>
      <Button  title='Remove data' onPress={removeData}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})