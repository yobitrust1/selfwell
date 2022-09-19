import React from 'react';
import {View, FlatList, StyleSheet, Image, Text, TouchableOpacity,Alert, Dimensions } from 'react-native';

import Opposite from './Opposite'

const {height, width} = Dimensions.get('window')

var resultat;
var a = new Opposite();
let b = a.current();

var back = '<';
export default class Written extends React.Component {
  constructor() {
    super();


    this.state = {
      category : [
        
        {id : "1", src : require('./pictures/dynamic.png')},
        {id : "2", src : require('./pictures/shapes-and-symbols.png')},
        {id : "3", src:require('./pictures/cube.png')},
        {id : "4",src : require('./pictures/cone.png')},
      
      ],


      
      definitions :
      [
       "2 coloured cubes with different dimensions",
        "Bee's special architecture to make honey",
        "pie chart",
       "coloured cone",
        
      ],


    
    };

  }

  current = () => {
    return resultat;
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
              onPress: () => this.props.navigation.navigate('Memory')
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
            onPress: () => this.props.navigation.navigate('Memory')
        },
      ],
    )    
    }

  render () {
    let {definitions} = this.state;
    var randomPhrase = Math.floor(Math.random() * definitions.length);
    var rPhrase = definitions[randomPhrase];
   
  return (
   
    <View style={styles.container}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Task 11: Find the right picture</Text>
      </View>
      <View style= {styles.containerOne}>
      <Text style={{color: '#a6a8ad', fontSize: 20, marginTop: height * 0.02, marginLeft: width * 0.02}}>Find the right picture </Text>

        <Text style = {styles.details}>
          {rPhrase}
        </Text>
      <FlatList
        numColumns = {2}
        keyExtractor = {item => item.id}
        data={this.state.category}
        renderItem={({ item })=>{
          if ((item.id == "1" && rPhrase == "Bee's special architecture to make honey"))
          {
         return <TouchableOpacity onPress = {this.right}> 
         <Image source={item.src}
          style = {styles.image}/>
          </TouchableOpacity>
        }

        else if ((item.id == "2" && rPhrase == "pie chart")) {

          return <TouchableOpacity onPress = {this.right}> 
         <Image source={item.src}
          style = {styles.image}/>
          </TouchableOpacity>
        }


        else if ((item.id == "3" && rPhrase == "2 coloured cubes with different dimensions")) {
          return <TouchableOpacity onPress = {this.right}> 
         <Image source={item.src}
          style = {styles.image}/>
          </TouchableOpacity>
        }

        else if ((item.id == "4" && rPhrase ==   "coloured cone")) {
          return <TouchableOpacity onPress = {this.right}> 
         <Image source={item.src}
          style = {styles.image}/>
          </TouchableOpacity>
        }

        else {


          return <TouchableOpacity onPress = {this.wrong}> 
         <Image source={item.src}
          style = {styles.image}/>
          </TouchableOpacity>

        }

        }

        }
        
        />
        
        
    
    </View>
    </View>
  );
}

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
    fontSize: 28,
    marginTop: height * 0.05,
    marginLeft: width * 0.05,
    marginRight: width * 0.05
  },
  image: {
    height: height * 0.1,
    width: height * 0.1,
    marginTop: height * 0.05,
    marginLeft: width * 0.1,
    marginRight: width * 0.1 
  }

})


