import React, {Component} from 'react';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {StyleSheet, View,TextInput,Text,TouchableOpacity,Animated, Alert,Button, Dimensions} from 'react-native';
import AttentionI from './AttentionI'

const {height, width} = Dimensions.get('window')

var sum = 0;
var resultat;
var a = new AttentionI();
let b = a.current();

var back = '<';
export default class Calculus extends Component {
  constructor() {
    super();


    this.value = new Animated.ValueXY({ x : 0.01, y:570})
    
    
    this.state = {
      num2 : 0,
      num1: 0,
      result :'',
      somme : 0
   
    };
    
    }
     
    


    handleResult = (text) => {
      this.setState({ result: text })
   }

 
  
   IncrementItem = () => {
    this.setState({somme: 3});
  };

     moveBall = () => {
       this.anim = Animated.timing(this.value , {
        toValue : { x : 0.01, y : 0.01},
        duration : 15000,
        useNativeDriver : false
      }).start();
      setTimeout(() => {
        let{num1} = this.state;
        let {num2} = this.state;
        let {result} = this.state;
  
        sum = num1 + num2;
  
      if (sum == result) {
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
            onPress: () => this.props.navigation.navigate('SequencesI')
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
            onPress: () => this.props.navigation.navigate('SequencesI')
            },
          ],
        )
      }
    
      }, 10000);
    }

   
      
    componentDidMount = () => {
      this.randomNumber1();
      this.randomNumber2();
     this.IncrementItem();

    }

  randomNumber1 = () => {
    this.setState ({ num1 : Math.floor(Math.random() * 100) });
  };


  randomNumber2  = () => {
   this.setState ({ num2 : Math.floor(Math.random() * 100) });

    
  };

  current = () => {
    return resultat;
  }
  finish = () => {
    Alert.alert("done");
  }

  render() {

    let{num1} = this.state;
    let {num2} = this.state;
    sum = num1 + num2;
    affiche=()=>{ resultat = 0
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
          onPress: () => this.props.navigation.navigate('SequencesI')
          },
        ],
      )}

    return (

  
      <View style={styles.container}>
  <View style={styles.header}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Task 6: mental calculation</Text>
          </View>
      


        <Animated.View style ={this.value.getLayout()}> 
          <View style ={{
            width : width * 0.1,
            height : width * 0.1,
            borderRadius : 1000,
            backgroundColor : '#7e79d4',
            marginLeft : width * 0.9,

}}/>

      </Animated.View>


      <View style={styles.MainContainer}>
        <View style={{flexDirection: 'row', marginLeft: width * 0.3}}> 
        <Text style={styles.number}>{num1}</Text>
        <Text style={styles.details}> + </Text>
        <Text style={styles.number}>{num2}</Text>
        <Text style={styles.details}> = </Text>
        <TextInput
        placeholder="     result"
        style={styles.input}
        onChangeText = {this.handleResult}/>

        </View>
      
      <TouchableOpacity
                    onPress={this.moveBall}
                    style={[styles.next, {
                        backgroundColor: '#fff',
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#56BED1'
                    }]}>Start</Text>
                </TouchableOpacity>
      
<Text style={{color: '#a6a8ad', fontSize: 18, marginBottom: height * 0.02, marginTop: height * 0.02, marginLeft: width * 0.02}}>Let's answer before the ball gets to the top</Text>
      </View>
      <TouchableOpacity
                    // onPress={() => {this.props.navigation.navigate('SequencesI');affiche()}}
                    onPress={() => {affiche()}}
                    style={[styles.signIn, {
                        backgroundColor: '#56BED1',
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Next task</Text>
                </TouchableOpacity>
  </View>
    )
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
  marginLeft: width * 0.1,
  marginTop: height * 0.035
  },
    MainContainer: {
      flex: 1,
      width: width * 0.8,
      height: height * 0.5,
      backgroundColor: '#fff',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 20,
      marginTop: height * 0.05,
      marginBottom: height * 0.05
    },
      signIn: {
        width: width * 0.5,
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: height * 0.05,
        marginBottom: height * 0.15
    },
    next: {
      width: width * 0.5,
      height: height * 0.07,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      borderColor: '#56BED1', 
      borderWidth: 2,
      marginTop: height * 0.15,
  },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    headline: {
      fontWeight: 'bold',
      fontSize: 22,
      marginTop: height * 0.05
    },
    number: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#56BED1',
      marginTop: height * 0.05
    },
    details: {
      fontSize: 26,
      marginTop:  height * 0.05,
      marginLeft: width * 0.05,
      marginRight: width * 0.05
    },
    givenNumber: {
      fontWeight: 'bold',
      fontSize: 40,
      color: '#56BED1',
      //marginTop: height * 0.07
    },
    input: {
      height : height * 0.05,
      width: width * 0.2,
      marginTop: height * 0.05,
      marginLeft: width * 0.03,
      marginRight: width * 0.3,
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#56BED1'
      }
  
  });