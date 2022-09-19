import React from 'react';
import {View, FlatList, StyleSheet, Dimensions, TouchableOpacity, Image, Text, Alert} from 'react-native';

import Shopping from './ShoppingTask'

const {height, width} = Dimensions.get('window')

var resultat;
var a = new Shopping();
let b = a.current();

var back = '<';
export default class Opposite extends React.Component {
  constructor() {
    super();


    this.state = {
      category : [
        
        { name: "right", id: "1", source: require('./pictures/right-arrow.png') },
        { name: "left", id: "2", source: require('./pictures/left-arrow.png') },
        { name: "up", id: "3", source: require('./pictures/up-arrow.png') },
        { name: "down", id: "4", source: require('./pictures/down-arrow.png') },

      ],

      collection :
      [
        require('./pictures/down-arrow.png'),
        require('./pictures/up-arrow.png'),
        require('./pictures/left-arrow.png'),
        require('./pictures/right-arrow.png'),
        
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
      'You have ' + resultat + ' points',
      [
        {
            text: 'Go to next task',
            onPress: () => this.props.navigation.navigate('WrittenComp')
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
            onPress: () => this.props.navigation.navigate('WrittenComp')
        },
      ],
    )    
  }

  


  render () {
    let {category} = this.state;
    let {collection} = this.state;
    var randomInt = Math.floor(Math.random() * collection.length);
    var rImage = collection[randomInt];
  
  return (
   
    <View style={styles.container}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Task 10: Opposite</Text>
      </View>
      <View style= {styles.containerOne}>
        <Image
          style={styles.image}
          source={rImage} />
          <Text style={{color: '#a6a8ad', fontSize: 18, marginTop: height * 0.02, marginLeft: width * 0.02}}>Find the opposite</Text>

       
      <FlatList
      numColumns = {2}
        data={category}
        renderItem={({ item })=>{
      if(item.id == "1" && rImage == require('./pictures/left-arrow.png') ){
        return <TouchableOpacity onPress={this.right}>
          <Image source={item.source} 
          style = {styles.image} />
          </TouchableOpacity>
       
      }

    else if (item.id == "1") {
      return <TouchableOpacity onPress={this.wrong}>
          <Image source={item.source} 
          style ={styles.image} />
          </TouchableOpacity>
    }

    if(item.id == "2" && rImage == require('./pictures/right-arrow.png')){
        return <TouchableOpacity onPress={this.right}>
          <Image source={item.source} 
          style = {styles.image} />
          </TouchableOpacity>
}
    
    else if (item.id == "2") {
      return <TouchableOpacity onPress={this.wrong}>
          <Image source={item.source} 
          style = {styles.image} />
          </TouchableOpacity>
    }



    if(item.id == "3" && rImage == require('./pictures/down-arrow.png') ){
        return <TouchableOpacity onPress={this.right}>
          <Image source={item.source} 
          style = {styles.image} />
          </TouchableOpacity>
}

    else  if(item.id == "3" ){
        return <TouchableOpacity onPress={this.wrong}>
          <Image source={item.source} 
          style = {styles.image} />
          </TouchableOpacity>
}

        if(item.id == "4" && rImage == require('./pictures/up-arrow.png') ){
        return <TouchableOpacity onPress={this.right}>
          <Image source={item.source} 
          style = {styles.image} />
          </TouchableOpacity>
          }

          else if(item.id == "4" ){
        return <TouchableOpacity onPress={this.wrong}>
          <Image source={item.source} 
          style ={styles.image} />
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
    height: height * 0.8,
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
    height: height * 0.2,
    width: height * 0.2,
    marginTop: height * 0.05,
    marginLeft: width * 0.05,
    marginRight: width * 0.05 
  }

})

