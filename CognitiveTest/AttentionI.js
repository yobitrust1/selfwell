import React, {Component} from 'react';

import {StyleSheet, View, Button, Text, Dimensions, Alert, TouchableOpacity} from 'react-native';

import InhibII from './InhibII';

const {height, width} = Dimensions.get('window')

var resultat;
var a = new InhibII();
let b = a.current();

var back = '<';
export default class AttentionI extends Component {
  constructor() {
    super();

    var num;
    this.state = {
      clicks: 0,
      magicNumber: 23,
      num: 0,
      seconds: 20,
    };

    num = Math.floor(Math.random() * 5);
    global.num = num;

    this.randomMagicNumber = this.randomMagicNumber.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.randomMagicNumber(), 1000);
    this.interval = setInterval(
      () => this.setState(() => ({seconds: this.state.seconds - 1})),
      1000,
    );
  }

  componentDidUpdate() {
    if (this.state.seconds === 0) {
      clearInterval(this.interval);
      clearInterval(this.timerID);
    }
  }

  componentWillUnMount() {
    clearInterval(this.timerID);
    clearInterval(this.interval);
  }

  randomMagicNumber = () => {
    return this.setState({
      magicNumber: Math.floor(Math.random() * 5),
    });
  };

  


  
  current = () => {
    return resultat;
  }

  
   checkButton = () => {
    if (this.state.magicNumber == num) {
      let clicks = this.state.clicks
      clicks = 2
      this.setState({clicks: clicks})
    resultat = this.state.clicks
    var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
    Alert.alert(
      'Good job !',
      'You have ' + resultat+ ' points' 
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
              text: 'Continue'
          }
      ],
  )
      
    }
  }


  

  
  render() {
    let {magicNumber} = this.state;
    let {seconds} = this.state;

    return (
      <View style={styles.container}>
  <View style={styles.header}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Task 5: Attention</Text>
          </View>
      <View style={styles.MainContainer}>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.headline}>Our number is</Text>
        <Text style={styles.number}> {num}</Text>
        </View>
        
        <Text style={styles.details}>
          Click on the button everytime you see the given number
        </Text>

        <Text style={styles.givenNumber}>{this.state.magicNumber}</Text>
        <Text style= {styles.details}>You have {seconds} seconds left</Text>
        <TouchableOpacity
                    onPress={this.checkButton}
                    style={[styles.next, {
                        backgroundColor: '#fff',
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#56BED1'
                    }]}>It's the number !</Text>
                </TouchableOpacity>
      </View>
      <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Calculus')}
                    style={[styles.next, {
                        backgroundColor: '#56BED1',
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Next task</Text>
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
marginLeft: width * 0.1,
marginTop: height * 0.035
},
  MainContainer: {
    flex: 1,
    width: width * 0.95,
    height: height * 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: height * 0.05,
  },
  signIn: {
    width: width * 0.5,
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: height * 0.08,
    marginBottom: height * 0.05
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
    marginTop: height * 0.08,
    marginBottom: height * 0.05
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
    fontSize: 20,
    marginTop:  height * 0.05,
    marginLeft: width * 0.05,
    marginRight: width * 0.05
  },
  givenNumber: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#56BED1',
    //marginTop: height * 0.07
  }

})
