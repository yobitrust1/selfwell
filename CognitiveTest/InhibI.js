import React, { Component } from 'react';
import { Button, View, Text,Image,TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import Puzzle from './Puzzle'


var resultat;
var a = new Puzzle();
let b = a.current();
var back = '<';
const {height, width} = Dimensions.get('window');

class InhibI extends Component {

    constructor() {
        super();
    
    
        this.state = {
          category : [
            
            {id : "1", src : require('../../assets/blue.png')},
            {id : "2", src : require('../../assets/orange.png')},
            {id : "3", src:require('../../assets/purple.png')},
            {id : "4",src : require('../../assets/pink.png')},
            {id : "5",src : require('../../assets/yellow.png')},
          
          ],
    
    
          
          colors :
          [
           "Pink",
            "Yellow",
            "Purple",
           "Blue",
           "Orange"
            
          ],
    
        };
    
      }

      current = () => {
        return resultat;
      }
    
      right = () => {
        resultat = 1
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
                  onPress: () => this.props.navigation.navigate('InhibII')
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
                  text: 'Go to next task',
                  onPress: () => this.props.navigation.navigate('InhibII')
              },
          ],
      )
      }
  
  render() {
    let {colors} = this.state;
    let {category} = this.state;

    var randomColor = Math.floor(Math.random() * colors.length);
    var rColor = colors[randomColor];

    var randomIm = Math.floor(Math.random() * category.length);
    var rIm = category[randomIm];
    const yesButton = () => {

      if (rIm.id == "1" && rColor == "Blue")
      {

        return <TouchableOpacity onPress={this.right}>
        <Text style={styles.yes}>
          Yes
        </Text>
        </TouchableOpacity>
      }
 

      else if ((rIm.id == "2" && rColor== "Orange")) {

        return <TouchableOpacity onPress = {this.right}> 
       <Text style={styles.yes}>
          Yes
        </Text>
        </TouchableOpacity>
      }


      else if ((rIm.id  == "3" && rColor == "Purple")) {
        return <TouchableOpacity onPress = {this.right}> 
        <Text style={styles.yes}>
          Yes
         </Text>
         </TouchableOpacity>
      }

      else if ((rIm.id  == "4" && rColor ==   "Pink")) {
        return <TouchableOpacity onPress = {this.right}> 
       <Text style={styles.yes}>
          Yes
        </Text>
        </TouchableOpacity>
      }

      else if ((rIm.id  == "5" && rColor ==   "Yellow")) {
        return <TouchableOpacity onPress = {this.right}> 
        <Text style={styles.yes}>
          Yes
         </Text>
         </TouchableOpacity>

      }

      else {

        return <TouchableOpacity onPress = {this.wrong}> 
        <Text style={styles.no}>
           Yes
         </Text>
         </TouchableOpacity>
      }

    }


    const noButton = () => {

      if (rIm.id == "1" && rColor == "Blue")
      {

        return <TouchableOpacity onPress={this.wrong}>
        <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }
 

      else if ((rIm.id == "2" && rColor== "Orange")) {

        return <TouchableOpacity onPress = {this.wrong}> 
       <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }


      else if ((rIm.id  == "3" && rColor == "Purple")) {
        return <TouchableOpacity onPress = {this.wrong}> 
        <Text style={styles.no}>
          No
         </Text>
         </TouchableOpacity>
      }

      else if ((rIm.id  == "4" && rColor ==   "Pink")) {
        return <TouchableOpacity onPress = {this.wrong}> 
       <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }

       if ((rIm.id  == "5" && rColor ==   "Yellow")) {
        return <TouchableOpacity onPress = {this.wrong}> 
        <Text style={styles.no}>
          No
         </Text>
         </TouchableOpacity>

      }

      else {

        return <TouchableOpacity onPress = {this.right}> 
        <Text style={styles.yes}>
           No
         </Text>
         </TouchableOpacity>
      }

    }


    return (
      <View style={styles.container}>
   
   <View style={styles.header}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Task 2: What's this color ? </Text>
          </View>
   
    <View style={styles.containerOne}>
      <Image source = {rIm.src} style= {{height : height * 0.25, width : height * 0.25, marginTop: height * 0.05}}/>

      <Text style = {styles.color}>
        {rColor}
      </Text>
    </View>    
     
          
      
      <View style={{flexDirection: 'row'}}>
      <View style={{flexDirection: 'row', marginLeft: width * 0.22}}>
      {yesButton()}
      </View>
      <View style={{flexDirection: 'row', marginLeft: width * 0.22}}>
      {noButton()}
      </View>
     
      </View>
      </View>
    );
  }
}

export default InhibI;

const styles = StyleSheet.create({
  header: {
      height: height * 0.08,
      width: width,
      flexDirection: 'row',
    },
    back: {
  color: '#000',
  fontSize: 43,
  marginLeft: width * 0.05,
  marginTop:  height * 0.01,
},
headerText: {
  color: '#000',
  fontSize: 22,
  alignSelf: "center",
  fontWeight: 'bold',
  marginLeft: width * 0.15,
  marginTop: height * 0.035
},
container: {
  flex: 1,
  backgroundColor: '#F5F6FA'
},
containerOne: {
    backgroundColor: '#fff',
    height: height * 0.48,
    width: width * 0.95,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: height * 0.1,
    marginBottom: height * 0.05,
    borderRadius: 20
},
containerTwo: {
  backgroundColor: 'green',
  height: height * 0.4,
  width: width * 0.95,
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
  color: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: height * 0.04
  },
  yes: {
    fontFamily: "serif",
    fontWeight: 'bold',
    fontSize: 40,
    color: '#D36A67'
  },
  no: {
    fontFamily: "serif",
    fontWeight: 'bold',
    fontSize: 40,
    color: '#3DC297'
  },

})