import React from 'react';
import { Image, View, FlatList, TouchableOpacity, Text,StyleSheet,Button, StatusBar} from 'react-native';

import Written from './WrittenComp'
var resultat;
var a = new Written();
let b = a.current();

var tab = [];
export default class VisualI extends React.Component {
  constructor() {
      super();

     this.state = { images : [
        require('./pictures/worm_worms_earthworm_gardening-512.png'),
        require('./pictures/spring_worm_animal-512.png'),
        require('./pictures/worm-512.png'),
        require('./pictures/worm-1678570-1425844.png'),
      ],
      index: 0,

      info : [
        { id : "1", src : require('./pictures/worm_worms_earthworm_gardening-512.png')},
        { id : "2", src : require('./pictures/spring_worm_animal-512.png')},
        { id : "3", src : require('./pictures/worm-512.png')},
        { id : "4" , src : require('./pictures/worm-1678570-1425844.png')},
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
  if (tab[0] == "1" && tab[1] == "2" && tab[2] == "3" && tab[3] == "4") {

   
    resultat = 3
    var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
    alert( "Correct answer. Good job!")
    alert(resultat)

     
   


  }
  else 
   {
    resultat = 0
    var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
     alert( "wrong! Try again")
     alert(resultat)

      
   
  }}

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

        <Text> Wait for the sequence to end and then click on the images below and recreate it again 
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
          style = {{width : 100, height:100, marginHorizontal : 30,marginVertical : 20}} />
          </TouchableOpacity>
          
        
        }}


        />
      


        <Button title = "check"
        style = {{marginBottom : 70}}

          onPress = {this.check}/>

          <Button
          title="Go to Test 11"
          onPress={() => this.props.navigation.navigate('TimeSequence')}/>


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
