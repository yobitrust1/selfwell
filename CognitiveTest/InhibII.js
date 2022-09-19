import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity,Alert , Dimensions } from 'react-native';
import InhibI from './InhibI'

var resultat;
var a = new InhibI();
let b = a.current();
var back = '<';
const {height, width} = Dimensions.get('window');
export default class InhibII extends React.Component {
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

    
      palette : [

        "#FF9B91", //pink
        "#AF8EFF", //purple
        "#FFD12F", //yellow
        "#2387FF", //blue
        "#FAAA55" //orange
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
              onPress: () => this.props.navigation.navigate('AttentionI')
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
      'You have ' + resultat+ ' points',
      [
          {
              text: 'Go to next task',
              onPress: () => this.props.navigation.navigate('AttentionI')
          },
      ],
  )
  }


  render () {
    let {colors} = this.state;
    let {category} = this.state;
    let {palette} = this.state;


    var randomColor = Math.floor(Math.random() * colors.length);
    var rColor = colors[randomColor];


    var randomP =  Math.floor(Math.random() * palette.length) ;
    var rP = palette[randomP];


    var randomIm = Math.floor(Math.random() * category.length);
    var rIm = category[randomIm];





    const yesButton = () => {

      if (rIm.id == "1" && rP ==  "#2387FF")
      {

        return <TouchableOpacity onPress={this.right}>
        <Text style={styles.yes}>
          Yes
        </Text>
        </TouchableOpacity>
      }
 

      else if ((rIm.id == "2" && rP == "#FAAA55")) {

        return <TouchableOpacity onPress = {this.right}> 
       <Text style={styles.yes}>
          Yes
        </Text>
        </TouchableOpacity>
      }


      else if ((rIm.id  == "3" && rP == "#AF8EFF")) {
        return <TouchableOpacity onPress = {this.right}> 
        <Text style={styles.yes}>
          Yes
         </Text>
         </TouchableOpacity>
      }

      else if ((rIm.id  == "4" && rP ==   "#FF9B91")) {
        return <TouchableOpacity onPress = {this.right}> 
       <Text style={styles.yes}>
          Yes
        </Text>
        </TouchableOpacity>
      }

      else if ((rIm.id  == "5" && rP ==   "#FFD12F")) {
        return <TouchableOpacity onPress = {this.right}> 
        <Text style={styles.yes}>
          Yes
         </Text>
         </TouchableOpacity>

      }

      else {

        return <TouchableOpacity onPress = {this.wrong}> 
        <Text style={styles.yes}>
           Yes
         </Text>
         </TouchableOpacity>
      }

    }


    const noButton = () => {

      if (rIm.id == "1" && rP ==  "#FF9B91")
      {

        return <TouchableOpacity onPress={this.right}>
        <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }
      else if (rIm.id == "1" && rP ==  "#AF8EFF")
      {

        return <TouchableOpacity onPress={this.right}>
        <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }
      else if (rIm.id == "1" && rP ==  "#FFD12F")
      {

        return <TouchableOpacity onPress={this.right}>
        <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }
      else if (rIm.id == "1" && rP ==  "#FAAA55")
      {

        return <TouchableOpacity onPress={this.right}>
        <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }

      else if (rIm.id == "2" && rP ==  "#FF9B91")
      {

        return <TouchableOpacity onPress={this.right}>
        <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }
      else if (rIm.id == "2" && rP ==  "#AF8EFF")
      {

        return <TouchableOpacity onPress={this.right}>
        <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }
      else if (rIm.id == "2" && rP ==  "#FFD12F")
      {

        return <TouchableOpacity onPress={this.right}>
        <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }
      else if (rIm.id == "2" && rP ==  "#2387FF")
      {

        return <TouchableOpacity onPress={this.right}>
        <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }

      else if ((rIm.id  == "3" && rP == "#FF9B91")) {
        return <TouchableOpacity onPress = {this.right}> 
        <Text style={styles.no}>
          No
         </Text>
         </TouchableOpacity>
      }
      else if ((rIm.id  == "3" && rP == "#FFD12F")) {
        return <TouchableOpacity onPress = {this.right}> 
        <Text style={styles.no}>
          No
         </Text>
         </TouchableOpacity>
      }
      else if ((rIm.id  == "3" && rP == "#2387FF")) {
        return <TouchableOpacity onPress = {this.right}> 
        <Text style={styles.no}>
          No
         </Text>
         </TouchableOpacity>
      }
      else if ((rIm.id  == "3" && rP == "#FAAA55")) {
        return <TouchableOpacity onPress = {this.right}> 
        <Text style={styles.no}>
          No
         </Text>
         </TouchableOpacity>
      }

      else if ((rIm.id  == "4" && rP ==   "#2387FF")) {
        return <TouchableOpacity onPress = {this.right}> 
       <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }
      else if ((rIm.id  == "4" && rP ==   "#AF8EFF")) {
        return <TouchableOpacity onPress = {this.right}> 
       <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }
      else if ((rIm.id  == "4" && rP ==   "#FFD12F")) {
        return <TouchableOpacity onPress = {this.right}> 
       <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }
      else if ((rIm.id  == "4" && rP ==   "#FAAA55")) {
        return <TouchableOpacity onPress = {this.right}> 
       <Text style={styles.no}>
          No
        </Text>
        </TouchableOpacity>
      }

      else if ((rIm.id  == "5" && rP ==   "#FF9B91")) {
        return <TouchableOpacity onPress = {this.right}> 
        <Text style={styles.no}>
          No
         </Text>
         </TouchableOpacity>

      }
      else if ((rIm.id  == "5" && rP ==   "#AF8EFF")) {
        return <TouchableOpacity onPress = {this.right}> 
        <Text style={styles.no}>
          No
         </Text>
         </TouchableOpacity>

      }
      else if ((rIm.id  == "5" && rP ==   "#2387FF")) {
        return <TouchableOpacity onPress = {this.right}> 
        <Text style={styles.no}>
          No
         </Text>
         </TouchableOpacity>

      }
      else if ((rIm.id  == "5" && rP ==   "#FAAA55")) {
        return <TouchableOpacity onPress = {this.right}> 
        <Text style={styles.no}>
          No
         </Text>
         </TouchableOpacity>

      }

      else {

        return <TouchableOpacity onPress = {this.wrong}> 
        <Text style={styles.no}>
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
           <Text style={styles.headerText}>Task 3: What's this color ? </Text>
           </View>
    
     <View style={styles.containerOne}>
     <Text style={{color: '#a6a8ad', fontSize: 22, marginTop: height * 0.02, marginLeft: width * 0.02}}>Do they have the same color ?</Text>

       <Image source = {rIm.src} style= {{height : height * 0.25, width : height * 0.25, marginTop: height * 0.05}}/>
 
       <Text style= {[styles.color, {
                        color: rP
                    }]}>
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
        color: '#3DC297'
      },
      no: {
        fontFamily: "serif",
        fontWeight: 'bold',
        fontSize: 40,
        color: '#D36A67'
      },
    
    })
