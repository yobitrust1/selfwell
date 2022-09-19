import { th } from 'date-fns/locale';
import React from 'react';
import {View, FlatList, StyleSheet, Image, Text, TouchableOpacity, Button, Dimensions, Alert } from 'react-native';
import SeqII from './SequencesII'

const {height, width} = Dimensions.get('window')

var s = 0;

var resultat;
var a = new SeqII();
let b = a.current();

var back = '<';
export default class Shopping extends React.Component {
  constructor() {
    super();


    this.state = {
      shoppingList : [
        
        {id : "1", name: "meal", src : require('../../assets/meals.png'), price :"13"},
        {id : "2", name: "phone", src : require('../../assets/order-food.png'), price : "145"},
        {id : "3", name: "shirt", src : require('../../assets/shirt.png'), price : "45" },
        {id : "4", name: "sneaker", src : require('../../assets/sneaker.png'), price : "100"},
        {id : "5", name: "smart watch", src : require('../../assets/phone-book.png'), price :"123"},

      
      ],

      money : [

        {id : "1", src : require('./pictures/ten.png'), value :"10"},
        {id : "2", src : require('./pictures/FAVPNG_20-euro-note-euro-banknotes-euro-coins_EDJQdczg.png'), value : "25"},
        {id : "3", src : require('./pictures/FAVPNG_euro-coins-500-euro-note-illustration_6v5T7Nm6.png'), value : "1" },
        {id : "4", src : require('./pictures/ink-stains-3.png'), value : "20"},
        {id : "5", src : require('./pictures/pngegg.png'), value :"100"},
        {id : "6", src : require('./pictures/kisspng-euro-coins-2-euro-coin-euro-banknotes-50-fen-coins-5ade48fe8ace14.5214947315245171185686.png'), value :"2"},


      ],

    
    };

  }

     
  addSum = (item) => {
    var num = Number(item);

    s = s + num;
    
  }

  current = () => {
    return resultat;
  }
  check = (item) => {
    var i = Number(item);

    if ( s == i) {
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
              onPress: () => this.props.navigation.navigate('Opposite')
          },
        ],
    )    
   
    }
    else {
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
              onPress: () => this.props.navigation.navigate('Opposite')
          },
        ],
      )    
    }

  }


  render () {
    let {shoppingList} = this.state;
    var randomPic = Math.floor(Math.random() * shoppingList.length);
    var rPic = shoppingList[randomPic];
   
  return (
   
    <View style={styles.container}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Task 9: Shopping</Text>
      </View>
      <View style= {styles.containerOne}>
      <Image 
    source = {rPic.src}
    style = {{width: width * 0.2, height: width * 0.2, marginTop : 10}}/>


    <Text style = {{padding : 30, fontSize : 25}}>
      This {rPic.name} costs {rPic.price} $
    </Text>
    <Text style={{color: '#a6a8ad', fontSize: 20, marginBottom: height * 0.02,  marginLeft: width * 0.02}}>Pick the needed amount of money to by it</Text>

    <FlatList
        numColumns = {2}
        keyExtractor = {item => item.id}
        data={this.state.money}
        renderItem={({ item })=>{

          return <TouchableOpacity onPress={this.addSum.bind(this,item.value)}>

            <Image source = {item.src}
            style = {styles.image}
            />

          </TouchableOpacity>
        }}
        />


      </View>
      <TouchableOpacity
                    onPress={this.check.bind(this,rPic.price)}
                    style={[styles.signIn, {
                        backgroundColor: '#56BED1',
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Check my answer</Text>
                </TouchableOpacity>
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
    fontSize: 20,
    marginTop:  height * 0.05,
    marginLeft: width * 0.05,
    marginRight: width * 0.05
  },
  image: {
    height: height * 0.13,
    width: height * 0.18,
   
    marginLeft: width * 0.1,
    marginRight: width * 0.1 
  }

})

