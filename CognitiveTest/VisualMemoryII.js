import React from 'react';
import { Image, View, FlatList, TouchableOpacity, Text,StyleSheet,Button, StatusBar} from 'react-native';

import AttentionII from './AttentionII'

var tab = [];
var resultat;
var a = new AttentionII();
let b = a.current();

export default class VisualII extends React.Component {
  constructor() {
      super();

     this.state = { images : [
       require('./pictures/137068.png'), 
        require('./pictures/cube-297-654795.png'),
        require('./pictures/sugar-cube.png'), 
        require('./pictures/cube-297-654795.png'), 

      ],
      index: 0,

      info : [
        { id : "1", src : require('./pictures/137068.png')},
        { id : "2", src : require('./pictures/cube-297-654795.png')},
        { id : "3", src : require('./pictures/sugar-cube.png')},

       
       ],

    }
    
  }

  
  AddItemsToArray=(item)=>{
 
    
    tab.push(item);
    
  }

  current = () => {
    return resultat;
  }

 check =() => {
  if (tab[0] == "1" && tab[1] == "2" && tab[2] == "3" && tab[3] == "2") {

    alert( "Correct answer. Good job!")
    resultat = 3
    var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
    alert(resultat)

    fetch("http://192.168.1.39:3000/send-data",{
      method : "post",
      headers : {
        Accept: 'application/json',

        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        sum : resultat
      })
    }).then( res => res.json()).then( data => {
      console.log(data)
    })

  
  }
  else 

   { 
    alert( "wrong! Try again")
    resultat = 0
    var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
     alert(resultat)

     fetch("http://192.168.1.39:3000/send-data",{
      method : "post",
      headers : {
        Accept: 'application/json',

        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        sum : resultat
      })
    }).then( res => res.json()).then( data => {
      console.log(data)
    })





  }

  }

  componentDidMount() {
  
    this.interval =  setInterval(() => {
        this.setState(() => ({index: ( this.state.index + 1 )}));
     
    }, 2000);
  }

  componentWillUnmount () {
     clearInterval(this.interval);

  }


   

  render() {

    let {images} = this.state;
    let {index} = this.state;


   
      return (
          <View style = {styles.MainContainer}>

        <Text>
         Wait for the sequence of cubes to end and then click on the images below and recreate it again 
        </Text>
  


          <Image  style={{ width: 100, height: 100, marginRight : 70}}
            source={images[index]}
          />


      <FlatList
       numColumns = {2}
        keyExtractor = {item => item.id}
        data={this.state.info}
        renderItem={({ item })=>{

          
        return <TouchableOpacity onPress={this.AddItemsToArray.bind(this,item.id)}>
          <Image source={item.src}
          style = {{width : 100, height:100, marginHorizontal : 30,marginVertical : 20,marginTop : 100}} />
          </TouchableOpacity>
        }}


        />
   
   
     
      <Button title = "check"
      style = {{marginBottom : 150}}

        onPress = {this.check}/>
    
        </View>
      )
  }
}


const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
    
  
  TextStyle : {
    fontSize : 25,
     textAlign: 'center'
  }
  
 });
