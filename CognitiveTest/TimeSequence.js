import React from 'react';
import {View, FlatList, StyleSheet, Dimensions, Alert, TouchableOpacity, Image, Text,Button } from 'react-native';

import Memory from './Memory'

const {height, width} = Dimensions.get('window')

var resultat;
var a = new Memory();
let b = a.current();

var back = '<';

export default class TimeSequence extends React.Component {
  constructor() {
    super();


    this.state = {
        days : [
        
            { id: "1", name: "(A) Tuesday" },
            { id: "2", name: "(B) Wednesday" },
            { id: "3", name: "(C) Thursday" },
            { id: "4", name: "(D) Friday" },
    
          ],
    
    };

  }


  right = () => {
    resultat = 2
    var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
    Alert.alert(
      'Good job !',
      'You have ' + 2 + ' points',
        [

          {
              text: 'Go to next task',
              onPress: () => this.props.navigation.navigate('Logical')
          },
        ], 
  )
  }

   wrong = () => {
    resultat = 0
    var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
    Alert.alert(
      'Wrong answer !',
      'You have ' + 0 + ' points',
      [

        {
            text: 'Go to next task',
            onPress: () => this.props.navigation.navigate('Logical')
        },
      ], 
  )
  }

  current = () => {
    return resultat;
  }


  render () {
    let {days} = this.state;

    
  return (
   
    <View style={styles.container}>
   <View style={styles.header}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Task 12: Time sequence</Text>
          </View>

   
    <View style={styles.containerOne}>
        <Text style = {styles.details}>
            If the day before yesterday was Saturday, then find out the day after tomorrow?
        </Text>
        <Text style = {styles.details}>
            Options:
        </Text>

       
      <FlatList
        numColumns = {1}
        keyExtractor = {item => item.id}
        data={days}
        renderItem={({ item })=>{

      if (item.id == "2")
      {
        return <TouchableOpacity onPress={this.right} >
          <Text style={styles.days}>{item.name}</Text>
          </TouchableOpacity>
        }

        else {
          return <TouchableOpacity onPress={this.wrong} >
          <Text style={styles.days}>{item.name}</Text>
          </TouchableOpacity>
        }
        }
        }
     
        />

    </View>
  </View>


  )}
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },
  header: {
    height: height * 0.08,
    width: width,
    flexDirection: 'row',
  },
  back: {
    fontSize: 43,
    marginLeft: width * 0.05,
    marginTop:  height * 0.01,
  },
  headerText: {
  fontSize: 22,
  alignSelf: "center",
  fontWeight: 'bold',
  marginLeft: width * 0.15,
  marginTop: height * 0.035
  },
  containerOne: {
    backgroundColor: '#fff',
    height: height * 0.75,
    width: width * 0.95,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: height * 0.05,
    marginBottom: height * 0.02,
    borderRadius: 20
  },
  containerTwo: {
  backgroundColor: 'green',
  height: height * 0.4,
  width: width * 0.98,
  alignContent: "center",
  alignSelf: "center",
  alignItems: "center",
  marginTop: height * 0.05,
  marginBottom: height * 0.02
  },
  signIn: {
      width: width * 0.5,
      height: height * 0.07,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  details: {
    color: '#56BED1',
    fontSize: 20,
    marginTop:  height * 0.05,
    marginLeft: width * 0.05,
    marginRight: width * 0.05
  },
  days: {
    fontSize: 20,
    marginTop:  height * 0.05,
    marginLeft: width * 0.05,
    marginRight: width * 0.05
  },

})
