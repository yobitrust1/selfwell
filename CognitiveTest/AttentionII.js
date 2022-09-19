import React from 'react';
import { Image, View,Text,StyleSheet,Button, StatusBar, Alert, Dimensions, TouchableOpacity} from 'react-native';

import WrittenComp from './WrittenComp'

const {height, width} = Dimensions.get('window')

var source ;
var resultat;
var a = new WrittenComp();
let b = a.current();

var back = '<';
export default class AttentionII extends React.Component {
  constructor() {
      super();

     this.state = { 

      alphabet : [
        { id : "P", src : require('./pictures/16-512.png')},
        
        { id : "I", src : require('./pictures/iletter.png')},
        { id : "D" , src : require('./pictures/dletter.png')},
        { id : "F" , src : require('./pictures/ABC_alphabet_letter_font_graphic_language_text_F-512.png')},
        { id : "M" , src : require('./pictures/Brussels_metro_icon.svg.png')},
        { id : "A" , src : require('./pictures/download.png')},
        { id : "T" , src : require('./pictures/t-characters-character-alphabet-letter-36033.png')},
        { id : "N" , src : require('./pictures/n-character-alphabet-letter-32850.png')},
       ],



       index : '',
       rl : '',
       phrase :'',
   
      

    }
 
    source = this.state.alphabet[Math.floor(Math.random() * this.state.alphabet.length)].src;
    global.source= source;
 
    
  }


  
  check = () => {

  
    if (this.state.index == source) {

    resultat = 3
    var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
    alert( "Correct answer. Good job!")
    

    }
     else 
     { 
      resultat = 0
      var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
       alert( "wrong! Try again")
       
    }

  }

   
  current = () => {
    return resultat;
  }

  componentDidMount() {

  
    this.timer = setTimeout(() => this.randomLetter1(), 50);
    this.interval = setInterval(() => this.setState({index: this.state.alphabet[Math.floor(Math.random() *this.state.alphabet.length)].src}), 3500);
    this.sentence = setTimeout(() => this.setState({phrase:  'Here is the alphabetical letter you need to remember'}), 50);
}
  

 
  componentWillUnmount () { 

  clearTimeout(this.timer);
  clearInterval(this.interval);
  clearTimeout(this.sentence);  

  }

  componentDidUpdate(){
    setTimeout(() => this.setState({rl :''}), 2000);
   setTimeout(() => this.setState({index:''}) , 35000);
   setTimeout(() => this.setState({phrase :''}), 2000);
}

  randomLetter1 = () => {
   
  return this.setState({ rl: source
    });
  }

  
  
  render() {
     
      return (
       
          <View style={styles.container}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Task 11: Attention</Text>
      </View>
      <View style= {styles.containerOne}>
          <Image  style={{ width: 100, height: 100}}
            source={this.state.index}/>
          <Text style = {styles.TextStyle}>
           {this.state.phrase}
          </Text>

          <Image  style={{ width: 100, height: 100}}
            source={this.state.rl}
          />


         <Button title = "check"
        style = {{marginBottom : 70}}

          onPress = {this.check}/>

        <Button
          title="Go to Test 12"
          onPress={() => this.props.navigation.navigate('VisualI')}/>
     
          </View>
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



