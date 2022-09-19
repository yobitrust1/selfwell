import React from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'; // 6.2.2

import Card from './Card';

import Written from './WrittenComp';

const {height, width} = Dimensions.get('window')

var resultat;
var a = new Written();
let b = a.current();
var back = '<';

export default class Memory extends React.Component {

  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
    this.resetCards = this.resetCards.bind(this);
   
    let sources = {
      'fontawesome': FontAwesome,
      'entypo': Entypo,
      'ionicons': Ionicons
    };

    let cards = [
      {
        src: 'fontawesome',
        name: 'heart',
        color: 'red'
      },
      {
        src: 'entypo',
        name: 'feather',
        color: '#7d4b12'
      },
      {
        src: 'entypo',
        name: 'flashlight',
        color: '#f7911f'
      },
      {
        src: 'entypo',
        name: 'flower',
        color: '#37b24d'
      },
      {
        src: 'entypo',
        name: 'moon',
        color: '#ffd43b'
      },
      {
        src: 'entypo',
        name: 'shop',
        color: '#5f5f5f'
      },
    ];

    let clone = JSON.parse(JSON.stringify(cards));

    this.cards = cards.concat(clone);
    this.cards.map((obj) => {
      let id = Math.random().toString(36).substring(7);
      obj.id = id;
      obj.src = sources[obj.src];
      obj.is_open = false;
    });

    this.state = {
      current_selection: [],
      selected_pairs: [],
      score: 0,
      cards: this.cards,
      seconds: 60,
    }
  
  }

  current = () => {
    return resultat;
  }
  componentDidMount() {
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

  checkButton = () => {
    this.setState(() => ({seconds: this.state.seconds - this.state.seconds}))
  }

  render() {
    let {seconds} = this.state;
    if (seconds == 0){
        if (this.state.score > 4) {
            resultat = this.state.score
            var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
            Alert.alert(
              'Good job !',
              'You have ' + this.state.score + ' points',
              [
                {
                    text: 'Go to next task',
                    onPress: () => this.props.navigation.navigate('TimeSequence')
                },
              ],
            )     
            }
             else {
            resultat = this.state.score
            var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
            Alert.alert(
              'Sorry !',
              'You have only ' + this.state.score + ' points',
              [
                {
                    text: 'Go to next task',
                    onPress: () => this.props.navigation.navigate('TimeSequence')
                },
              ],
          )
              
            }
    }
    return (
      <View style={styles.container}>
       
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
                    <Text style={styles.back}>{back}</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Task 12: Memory</Text>
            </View>

   
        <View style={styles.body}>
        <Text style={{color: '#a6a8ad', fontSize: 20, marginTop: height * 0.02, marginLeft: width * 0.02}}>Turn over one card and then try to find a matching card </Text>
        <Text style={styles.details}>You have {seconds} seconds left</Text>
          { 
            this.renderRows.call(this) 
          }

        </View>
       
        <TouchableOpacity
                    onPress={this.checkButton}
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
  

  resetCards() {
    let cards = this.cards.map((obj) => {
      obj.is_open = false;
      return obj;
    });

    cards = cards.shuffle();

    this.setState({
      current_selection: [],
      selected_pairs: [],
      cards: cards,
      score: 0
    });
  }


  renderRows() {
   
    let contents = this.getRowContents(this.state.cards);
    return contents.map((cards, index) => {
      return (
        <View key={index} style={styles.row}>
          { this.renderCards(cards) }
        </View>
      );
    });
   
  }


  renderCards(cards) {
    return cards.map((card, index) => {
      return (
        <Card 
          key={index} 
          src={card.src} 
          name={card.name} 
          color={card.color} 
          is_open={card.is_open}
          clickCard={this.clickCard.bind(this, card.id)} 
        />
      );
    });
  }


  clickCard(id) {
    let selected_pairs = this.state.selected_pairs;
    let current_selection = this.state.current_selection;
    let score = this.state.score;

    let index = this.state.cards.findIndex((card) => {
      return card.id == id;
    });

    let cards = this.state.cards;
    
    if(cards[index].is_open == false && selected_pairs.indexOf(cards[index].name) === -1){

      cards[index].is_open = true;
      
      current_selection.push({ 
        index: index,
        name: cards[index].name
      });

      if(current_selection.length == 2){
        if(current_selection[0].name == current_selection[1].name){
          score += 1;
          selected_pairs.push(cards[index].name);
        }else{
         
          cards[current_selection[0].index].is_open = false;

          setTimeout(() => {
            cards[index].is_open = false;
            this.setState({
              cards: cards
            });
          }, 500);
        }

        current_selection = [];
      }

      this.setState({
        score: score,
        cards: cards,
        current_selection: current_selection
      });

    }
  
  }


  getRowContents(cards) {
    let contents_r = [];
    let contents = [];
    let count = 0;
    cards.forEach((item) => {
      count += 1;
      contents.push(item);
      if(count == 4){
        contents_r.push(contents)
        count = 0;
        contents = [];
      }
    });

    return contents_r;
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
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: width * 0.95,
    alignSelf: 'center',
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
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  details: {
    fontSize: 20,
    marginTop: height * 0.05,
    marginLeft: width * 0.05,
    marginRight: width * 0.05
  },
});
