import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../onBoarding/components/Button';
import {Colors} from '../../theme/colors';
import DoctorCard from './components/DoctorCard';

const data = [
    {
        card : <DoctorCard />
    },
    {
        card : <DoctorCard />
    }
]


const BestDoctor = () => {
  return (
    <View style={styles.container}>
        {/* back button */}
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

      <Text style={styles.mainHead}>Best Doctors For You</Text>

      {/* map function */}
      <View>
        {
            data.map((item, index)=> {
                return(
                    <View key={index}>
                        {
                            item.card
                        }
                    </View>
                )
            })
        }
      </View>
    </View>
  )
}

export default BestDoctor

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
        right: 80,
      },
})
