import React from 'react';
import {View, FlatList, StyleSheet, Dimensions, Alert, TouchableOpacity, Image, Text,Button } from 'react-native';

import TimeSequence from './TimeSequence'

import API from '../../API';

import AsyncStorage from '@react-native-async-storage/async-storage';


const {height, width} = Dimensions.get('window')

var resultat;
var a = new TimeSequence();
let b = a.current();

var back = '<';

export default class Logical extends React.Component {
  constructor() {
    super();


    this.state = {
        days : [
        
            { id: "1", name: "(A) 2,1,3,4" },
            { id: "2", name: "(B) 1,2,4,3" },
            { id: "3", name: "(C) 3,1,4,2" },
            { id: "4", name: "(D) 3,2,1,4" },
    
          ],
    
    };

  }

  _submit = async () => {
    const moment = require('moment');
    const today = moment();
    const idUser = await AsyncStorage.getItem("id");
    await API.NewTest(resultat, today.format("YYYY-MM-DD"), idUser);
    this.props.navigation.navigate('Score');
  }

  right = async () => {
    const moment = require('moment');
    const today = moment();
    //const idUser = await AsyncStorage.getItem("id");
  const idUser  = await AsyncStorage.getItem("id");
    resultat = 2
    var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );

    var score = num;
    console.log(resultat);
    console.log(score)
    let testDate = today.format("YYYY-MM-DD");
    await API.NewTest({idUser,score});
    console.log("score1");
    console.log({idUser,score});
    var res = toString(resultat);
    await AsyncStorage.setItem("score", res);
    Alert.alert(
      'Good job !',
      'You have ' + resultat + ' points',
      [

          {
              text: 'See my score',
              onPress: () => this.props.navigation.navigate('Score')
          },
      ], 
  )
  }

   wrong = async () => {
    const moment = require('moment');
    const today = moment();
    //const idUser = await AsyncStorage.getItem("id");
    const idUser = await AsyncStorage.getItem("id");
    resultat = 0
    var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );

    var score = num;
    let testDate = today.format("YYYY-MM-DD");
    var res = toString(num);
    await AsyncStorage.setItem("score", res);
    await API.NewTest({idUser,score});
    console.log("score1");
    console.log({idUser,score});
    Alert.alert(
      'Wrong answer !',
      'You have ' + resultat + ' points',
      [
          {
              text: 'See my score',
              onPress: () => this.props.navigation.navigate('Score')
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
          <Text style={styles.headerText}>Task 13: Logical sequence of words</Text>
          </View>

   
    <View style={styles.containerOne}>
        <Text style = {styles.details}>
            You have to find out a sequence which is logical in a context
        </Text>
        <Text style = {styles.details}>
            1.Vitamins  2.Body  3.Fruits  4.Healthy
        </Text>
        <Text style = {styles.details}>
            Options:
        </Text>

       
      <FlatList
        numColumns = {1}
        keyExtractor = {item => item.id}
        data={days}
        renderItem={({ item })=>{

      if (item.id == "3")
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
