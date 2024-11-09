import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, IconButton } from 'react-native-paper';
import Icon from '@expo/vector-icons/FontAwesome5';
import { Modalize } from 'react-native-modalize';
//import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function ScheduleScreen() {

  const modalizeRef = useRef<Modalize>(null);
  const modalizeMenu = useRef<Modalize>(null);
  const [alertContent, setAlertContent] = useState({});

  const onOpen = () => {
    console.log('Chamando o abrir')
    modalizeRef.current?.open;
    console.log('Depois do Chamando o abrir')
  };

  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      {/* <View style={styles.header}> */}
        {/* <Text style={styles.appName}>Where is My Labor?</Text> */}
        <TouchableOpacity onPress={() => alert('teste') } >
          <Icon name="align-right" style={{ borderWidth:1 }} size={24} onPress={() => { }} />
        </TouchableOpacity>
      {/* </View> */}


      {/* Stats */}
      <View style={styles.statsContainer}>
        <TouchableOpacity onPress={() => { }} style={styles.statBox}>
          <Icon name="user" size={20} color="#555" />
          <View style={{ width: '80%' }}>
            <Text style={styles.bigNumber}>30</Text>
            <Text style={styles.statText}>Clients</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }} style={styles.statBox}>
          <Icon name="briefcase" size={20} color="#555" />
          <View style={{ width: '80%' }}>
            <Text style={styles.bigNumber}>12</Text>
            <Text style={styles.statText}>Labors</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }} style={styles.statBox}>
          <Icon name="clock" size={20} color="#555" />
          <View style={{ width: '80%' }}>
            <Text style={styles.bigNumber}>153</Text>
            <Text style={styles.statText}>Worked hours</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Schedule Section */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <Text style={styles.sectionTitle}>Schedules</Text>
        <TouchableOpacity onPress={() => { }} style={styles.newScheduleButton}>
          <Icon name="plus-circle" size={24} color="#fff" />
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>New schedule</Text>
        </TouchableOpacity>
      </View>

      {/* Additional Schedule Items */}
      <View style={styles.additionalSchedules}>
        {["Clearspace", "Vestacon", "Blackhart", "Greenferd"].map((item, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => onOpen() } >
              <View style={styles.additionalItem}>
                <Avatar.Text label={item.charAt(0)} size={32} style={styles.avatar} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.additionalTitle}>{item}</Text>
                  <Text style={styles.additionalSubtitle}>40 king w - 2024-11-15</Text>
                </View>
                <View style={styles.avatarGroup}>
                  <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar.Image size={24} source={{ uri: 'https://via.placeholder.com/24' }} />
                    <Text>Diego</Text>
                  </View>
                  <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar.Image size={24} source={{ uri: 'https://via.placeholder.com/24' }} />
                    <Text>Thiago</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>


        <Modalize ref={modalizeRef} >
          <Card style={styles.scheduleCard}>
            <Card.Title
              title="Clearspace"
              subtitle="33 young w - 2024-11-15"
              left={(props) => <Avatar.Text {...props} label="K" />}
            />
            <Card.Content>
              <View style={styles.materials}>
                <Text style={styles.materialText}>Materials</Text>
                <View style={styles.icons}>
                  <Text>2x</Text><Icon name="paint-brush" size={20} />
                  <Text>1x</Text><Icon name="toolbox" size={20} />
                  <Text>1x</Text><Icon name="truck" size={20} />
                </View>
                <Text style={[styles.observations, { fontWeight: 'bold' }]}>
                  Observations:
                </Text>
                <Text style={styles.observations}>
                  Lorem ipsum indolor arhmed intrake bacon crease
                </Text>
              </View>
            </Card.Content>
            <Card.Actions>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Avatar.Image size={24} source={{ uri: 'https://via.placeholder.com/24' }} />
                <Text>Diego</Text>
              </View>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Avatar.Image size={24} source={{ uri: 'https://via.placeholder.com/24' }} />
                <Text>Thiago</Text>
              </View>
            </Card.Actions>
          </Card>
        </Modalize>


        <Modalize ref={modalizeMenu} >
          <Text>Menu</Text>
        </Modalize>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8C66C',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A7023',
    borderWidth : 1
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    gap: 10
  },
  statBox: {
    alignItems: 'center',
    backgroundColor: '#DFF2C6',
    padding: 10,
    borderRadius: 8,
    width: '31%',
    flexDirection: 'row',
    gap: 10
  },
  bigNumber: {
    marginTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'left'
  },
  statText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'left'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A7023',
    marginVertical: 10,
  },
  newScheduleButton: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 100,
    gap: 10,
    alignItems: 'center'
  },
  scheduleCard: {
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
  },
  materials: {
    marginTop: 10,
  },
  materialText: {
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    gap: 10
  },
  observations: {
    fontStyle: 'italic',
    color: '#666',
  },
  additionalSchedules: {
    marginTop: 20,
  },
  additionalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DFF2C6',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  additionalTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  additionalSubtitle: {
    color: '#666',
  },
  avatarGroup: {
    flexDirection: 'row',
    marginLeft: 'auto',
    gap: 10
  },
  avatar : {}
});
