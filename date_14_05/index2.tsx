import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../theme/colors';
import NotificationTick from './components/NotificationTick';

const Notification = () => {
  return (
    <View style={styles.container}>
      {/* top navbar here */}
      <View style={styles.head}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color={'black'} />
        </TouchableOpacity>
        <View>
          <Text style={styles.mainHead}>Notification</Text>
        </View>
        <View style={styles.notifiRIght}>
          <Text style={styles.notifiText}>1 New</Text>
        </View>
      </View>

      {/* mid head bar */}
      <View style={styles.midHeadBar}>
        <Text style={styles.midHeadFirst}>TODAY</Text>
        <Text style={styles.midHeadSecond}>Mark all as read</Text>
      </View>

      {/* notification start here */}
      <View style={styles.iconMainHeader}>
        <View style={styles.iconBack}>
          <NotificationTick />
        </View>
        <View>
          <View style={styles.rightSideTop}>
            <Text style={styles.rightSideTitle}>Appointment Success</Text>
            <Text>1h</Text>
          </View>
          <Text style={styles.rightSidePara}>
            You have successfully booked your appointment with Dr. Ajay Dholia.
          </Text>
        </View>
      </View>

      {/* second cancelled notification here */}
      <View style={styles.iconMainHeader}>
        <View style={[styles.iconBack, styles.iconCancelled]}>
          <NotificationTick />
        </View>
        <View>
          <View style={styles.rightSideTop}>
            <Text style={styles.rightSideTitle}>Appointment Cancelled</Text>
            <Text>2h</Text>
          </View>
          <Text style={styles.rightSidePara}>
            You have successfully cancelled your appointment with Dr. Ajay
            Dholia.
          </Text>
        </View>
      </View>

      {/* third scheduled notification here */}
      <View style={styles.iconMainHeader}>
        <View style={[styles.iconBack, styles.iocnDeleted]}>
          <NotificationTick />
        </View>
        <View>
          <View style={styles.rightSideTop}>
            <Text style={styles.rightSideTitle}>Scheduled Changed</Text>
            <Text>8h</Text>
          </View>
          <Text style={styles.rightSidePara}>
            You have successfully changes your appointment with Dr. Ajay Dholia.
          </Text>
        </View>
      </View>

      {/* mid head bar */}
      <View style={[styles.midHeadBar, styles.midHeadbarSec]}>
        <Text style={styles.midHeadFirst}>YESTERDAY</Text>
        <Text style={styles.midHeadSecond}>Mark all as read</Text>
      </View>

      {/* notification start here */}
      <View style={styles.iconMainHeader}>
        <View style={styles.iconBack}>
          <NotificationTick />
        </View>
        <View>
          <View style={styles.rightSideTop}>
            <Text style={styles.rightSideTitle}>Appointment Success</Text>
            <Text>1d</Text>
          </View>
          <Text style={styles.rightSidePara}>
            You have successfully booked your appointment with Dr. Ajay Dholia.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
    // borderWidth: 1
  },
  mainHead: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    // marginLeft: 20,
  },
  notifiRIght: {
    width: 57,
    height: 25,
    borderRadius: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 8,
    paddingLeft: 8,
    backgroundColor: '#4B5563',
  },
  notifiText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.white,
  },
  midHeadBar: {
    // width: 355,
    // borderWidth: 1,
    height: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  midHeadFirst: {
    fontSize: 16,
    fontWeight: '400',
  },
  midHeadSecond: {
    fontWeight: '700',
    fontSize: 14,
    color: Colors.black,
  },
  iconMainHeader: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  iconBack: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: '#DEF7E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightSideTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 275,
  },
  rightSideTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
  },
  rightSidePara: {
    fontSize: 14,
    fontWeight: '400',
    width: 275,
    marginTop: 2,
  },
  midHeadbarSec: {
    marginTop: 20,
  },
  iconCancelled: {
    backgroundColor: '#FDE8E8',
  },
  iocnDeleted:{
    backgroundColor: '#F3F4F6'
  }
});
