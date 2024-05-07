import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dentist from './components/Dentist'
import GenPhysician from './components/GenPhysician'
import Gynae from "./components/Gynae"
import Licology from './components/Licology'
import Button from '../onBoarding/components/Button';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const data = [
  { 
    icon: <Dentist/>,
    name: "Dentist"
  },
  { 
    icon: <GenPhysician/>,
    name: "Gen.Physician"
  },
  { 
    icon: <Gynae/>,
    name: "Gynae"
  },
  { 
    icon: <Licology/>,
    name: "Licology"
  }
]

const Consultation = () => {
  return (
    <View>

      <Button
        buttonStyle={{
          left: 30,
          marginTop: 30,
          marginLeft: 0,
          // color: Colors.SecondaryColor,
        }}
        onPress={() => {
          console.log('------------------call->');
        }}
        iconName="left"
      />

      <Text style={styles.mainHead}>
        Book a Consultation
      </Text>
     <View style={styles.container}>
     {
        data.map((item, index)=> {
          return(
             <View key={index} style={styles.item}>
               {item.icon}
               <Text style={styles.title}>{item.name}</Text>
             </View>
          )
        })
     }
     </View>
    </View>
  )
}

export default Consultation

const styles = StyleSheet.create({
  container:{

    flexDirection: 'row',
    flexWrap:'wrap',
    gap : 60,
    // justifyContent: 'space-between',
    margin: 30,
  },
  item: {
    alignItems: 'center',
  },
  title:{
    color: Colors.black,
    fontWeight: '400'
  },
  mainHead:{
    fontSize: 18,
    position: 'absolute',
    marginTop: 35,
    marginLeft: 120,
    fontWeight: '600',
    color: Colors.black,
  }
})
