import React from 'react';
import {View, FlatList, StyleSheet, Dimensions, Alert, TouchableOpacity, Image, Text,Button } from 'react-native';

import SeqI from './SequencesI'

const {height, width} = Dimensions.get('window')

var resultat;
var a = new SeqI();
let b = a.current();

var back = '<';
export default class SeqII extends React.Component {
  constructor() {
    super();


    this.state = {
      images : [
        
        { id: "1", source: require('./pictures/picI.png') },
        { id: "2", source: require('./pictures/picII.png') },
        { id: "3", source: require('./pictures/picIII.png') },
        { id: "4", source: require('./pictures/picIIII.png') },

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
      'You have ' + resultat + ' points',
      [

          {
              text: 'Go to next task',
              onPress: () => this.props.navigation.navigate('ShoppingTask')
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
      'You have ' + resultat + ' points',
      [
          {
              text: 'Try again'
          },
          {
              text: 'Go to next task',
              onPress: () => this.props.navigation.navigate('ShoppingTask')
          },
      ],
  )
  }

  current = () => {
    return resultat;
  }


  render () {
    let {images} = this.state;

    
  return (
   
    <View style={styles.container}>
   <View style={styles.header}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Task 8: Figure Series</Text>
          </View>

   
<View style={styles.containerOne}>
  <Text style = {styles.details}>
      Choose the figure that should go with this serie of figures
   </Text>
   <Image
          style={{ width: width * 0.98, height: height * 0.14, marginTop: height * 0.04 }}
          source={require('./pictures/pic.png')}/>

       
      <FlatList
        numColumns = {2}
        keyExtractor = {item => item.id}
        data={images}
        renderItem={({ item })=>{

      if (item.id == "1")
      {
        return <TouchableOpacity onPress={this.right} >
          <Image source={item.source} 
          style = {styles.image}/>
          </TouchableOpacity>
        }

        else {
          return <TouchableOpacity onPress={this.wrong} >
          <Image source={item.source} 
          style = {styles.image}/>
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
    alignItems: 'center',
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
  image: {
    height: height * 0.145,
    width: height * 0.145,
    marginTop: height * 0.03,
    marginLeft: width * 0.1,
    marginRight: width * 0.1 
  }

})
