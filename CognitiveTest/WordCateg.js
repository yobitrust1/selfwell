import React from 'react';
import  {
  StatusBar,
  StyleSheet,
  PanResponder,
  Animated,
  View,
  Text,
  FlatList,
  Image,
  Alert,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import InhibII from './InhibII'

const {height, width} = Dimensions.get('window')
 
var randomNum;
var rWord;

var resultat;
var a = new InhibII();
let b = a.current();

var back = '<';
export default class WordCateg extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
      List : [
        
        {id : "1", src :require ('../../assets/pawprint.png')}, // animal
        {id : "2", src :require ('../../assets/plate.png')},//food
        {id : "3", src :require ('../../assets/sport.png')},//sport
      
      ],

      words : [
        
        {id : "1", title : "football"},
        {id : "2", title : "pasta"},
        {id : "3", title : "dog"},
        {id : "4", title : "crocodile"},
        {id : "5", title : "meat"},
        {id : "6", title : "door"},
        {id : "7", title : "running"},
        {id : "8", title : "swimming"},
        {id : "9", title : "Mercedes-Benz"},
        {id : "10", title : "apple"},
       
 
      
      ],

    
    };
  
    randomNum = Math.floor(Math.random() * this.state.words.length);
    rWord= this.state.words[randomNum].title
    global.rWord = rWord
    global.randomNum = randomNum
    

  }

  current = () => {
    return resultat;
  }

  isDropArea = (gesture) => {
    return gesture.moveY <  200;

  }

 

  componentWillMount() {
   
    this._panResponder = PanResponder.create({

      onMoveShouldSetResponderCapture: () => true,

      onMoveShouldSetPanResponderCapture: () => true,
  
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
        Animated.spring(
          this.state.scale,
          { toValue: 1.1, friction: 3 }
        ).start();
      },

      
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
        //{useNativeDriver: false}
      ]),
  

      onPanResponderRelease: (e, gesture) => {
        if (this.isDropArea(gesture) && rWord === 'door' ) {
          Animated.timing(this.state.pan, {
            toValue: {x:10,y:10},
            duration: 100,
            useNativeDriver : false
          }).start(() => {
          resultat = 2
          var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
          Alert.alert(
            'Good job !',
            'You have ' + 2 + ' points',
            [

                {
                    text: 'Go to next task',
                    onPress: () => this.props.navigation.navigate('AttentionI')
                },
            ],
        ) 
          }
         );                         
        }      

        else if (this.isDropArea(gesture) && rWord == "Mercedes-Benz" ) {   
          Animated.timing(this.state.pan, {
            toValue: {x:10,y:10},
            duration: 100,
            useNativeDriver : false

          }).start(() =>
          {
            resultat = 2
            var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
            Alert.alert(
              'Good job !',
              'You have ' + 2 + ' points',
              [
  
                  {
                      text: 'Go to next task',
                      onPress: () => this.props.navigation.navigate('AttentionI')
                  },
              ],
          )   
            }  
         );                            
        }     

        else if (this.isDropArea(gesture) && rWord != "Mercedes-Benz" )
        {
        Animated.timing(this.state.pan, {
          toValue: {x:10,y:10},
          duration: 100,
          useNativeDriver : false

        }).start(() =>
          
   { 
    resultat = 0
    var resulta=localStorage.getItem('Total');
    resulta += resultat
    localStorage.setItem('Total',resulta );
    Alert.alert(
      'Wrong answer !',
      'You have ' + 0 + ' points',
      [
          {
              text: 'Try again'
          },
          {
              text: 'Go to next task',
              onPress: () => this.props.navigation.navigate('AttentionI')
          },
      ],
  )
  }
       );                            
      }

      else if (this.isDropArea(gesture) && rWord != "door" )
      {
      Animated.timing(this.state.pan, {
        toValue: {x:10,y:10},
        duration: 100,
        useNativeDriver : false

      }).start(() =>
       
   { 
    resultat = 0
    var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
    Alert.alert(
      'Wrong answer !',
      'You have ' + 0 + ' points',
      [
          {
              text: 'Try again'
          },
          {
              text: 'Go to next task',
              onPress: () => this.props.navigation.navigate('AttentionI')
          },
      ],
  )
  }
     );                            
    }


        else if (gesture.moveX < 150 && gesture.moveY > 100 && rWord == 'dog')
        {
          Animated.timing(this.state.pan, {
            toValue: {x:20,y:10},  
            duration: 100,
            useNativeDriver : false

          }).start(() =>    
          {
            resultat = 2
            var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
            Alert.alert(
              'Good job !',
              'You have ' + 2 + ' points',
              [
  
                  {
                      text: 'Go to next task',
                      onPress: () => this.props.navigation.navigate('AttentionI')
                  },
              ],
          )   
            }
          )
        } 

        else if (gesture.moveX < 150 && gesture.moveY > 100 && rWord == 'crocodile')
        {
          Animated.timing(this.state.pan, {
            toValue: {x:20,y:10},  
            duration: 100,
            useNativeDriver : false

          }).start(() =>    
          {
            resultat = 2
            var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
            Alert.alert(
              'Good job !',
              'You have ' + 2 + ' points',
              [
  
                  {
                      text: 'Go to next task',
                      onPress: () => this.props.navigation.navigate('AttentionI')
                  },
              ],
          )     
            }
          )
        } 

        else if (gesture.moveX > 150  && gesture.moveX < 250  && gesture.moveY > 100 && rWord == 'pasta' ) 
        {
          Animated.timing(this.state.pan, {
            toValue: {x:20,y:10},  
            duration: 100,
            useNativeDriver : false

          }).start(() =>    
          {
            resultat = 2
            b = a.current()
            resultat += b;
            Alert.alert(
              'Good job !',
              'You have ' + 2 + ' points',
              [
  
                  {
                      text: 'Go to next task',
                      onPress: () => this.props.navigation.navigate('AttentionI')
                  },
              ],
          )     
            }
          )
        } 

        else if (gesture.moveX > 150  && gesture.moveX < 250  && gesture.moveY > 100 && rWord == 'apple' ) 
        {
          Animated.timing(this.state.pan, {
            toValue: {x:20,y:10},  
            duration: 100,
            useNativeDriver : false

          }).start(() =>    
          {
            resultat = 2
            var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
            Alert.alert(
              'Good job !',
              'You have ' + 2 + ' points',
              [
  
                  {
                      text: 'Go to next task',
                      onPress: () => this.props.navigation.navigate('AttentionI')
                  },
              ],
          )     
            }
          )
        } 


        else if (gesture.moveX > 150  && gesture.moveX < 250  && gesture.moveY > 100 && rWord == 'meat' )
        {
          Animated.timing(this.state.pan, {
            toValue: {x:20,y:10},  
            duration: 100,
            useNativeDriver : false

          }).start(() =>    
          {
            resultat = 2
            var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
            Alert.alert(
              'Good job !',
              'You have ' + 2 + ' points',
              [
  
                  {
                      text: 'Go to next task',
                      onPress: () => this.props.navigation.navigate('AttentionI')
                  },
              ],
          )    
            }
          )
        } 

       


        else if (gesture.moveX > 200  && gesture.moveX < 300 && gesture.moveY > 100 && rWord =='swimming' ) 
        {
          Animated.timing(this.state.pan, {
            toValue: {x:20,y:10},  
            duration: 100,
            useNativeDriver : false

          }).start(() =>    
          {
            resultat = 2
            var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
            Alert.alert(
              'Good job !',
              'You have ' + 2 + ' points',
              [
  
                  {
                      text: 'Go to next task',
                      onPress: () => this.props.navigation.navigate('AttentionI')
                  },
              ],
          )   
            }
          )
        } 


        
        else if (gesture.moveX > 200  && gesture.moveX < 300 && gesture.moveY > 100 && rWord =='football' )
        {
          Animated.timing(this.state.pan, {
            toValue: {x:20,y:10},  
            duration: 100,
            useNativeDriver : false

          }).start(() =>    
          {
            resultat = 2
            var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
            Alert.alert(
              'Good job !',
              'You have ' + 2 + ' points',
              [
  
                  {
                      text: 'Go to next task',
                      onPress: () => this.props.navigation.navigate('AttentionI')
                  },
              ],
          )    
            }
          )
        } 


        else if (gesture.moveX > 200  && gesture.moveX < 300 && gesture.moveY > 100 && rWord =='running' ) 
        {
          Animated.timing(this.state.pan, {
            toValue: {x:20,y:10},  
            useNativeDriver : true,
            duration: 100,
            useNativeDriver : false

          }).start(() =>    
          {
            resultat = 2
            var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
            Alert.alert(
              'Good job !',
              'You have ' + 2 + ' points',
              [
  
                  {
                      text: 'Go to next task',
                      onPress: () => this.props.navigation.navigate('AttentionI')
                  },
              ],
          )     
            }
          )
        } 

        else {
          Animated.timing(this.state.pan, {
            toValue:{x:20,y:10},
            duration: 100,
            useNativeDriver : false

          }).start(() =>
          
   { 
    resultat = 0
    var resulta=localStorage.getItem('Total');
        let num = parseInt(resulta);
        num += resultat
        localStorage.setItem('Total',num );
    Alert.alert(
      'Wrong answer !',
      'You have ' + 0 + ' points',
      [
          {
              text: 'Try again'
          },
          {
              text: 'Go to next task',
              onPress: () => this.props.navigation.navigate('AttentionI')
          },
      ],
  )
  }
          )

        }
        
      
  }
    })}
 




  
  render() {
    let rotate = '0deg';
    let { pan,scale } = this.state;
    let [translateX, translateY] = [pan.x, pan.y];
    let imageStyle = {transform: [{translateX}, {translateY}, {rotate}, {scale}]};
   
    

     return (
  

      <View style={styles.container}>
  <View style={styles.header}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Task 4: The word belongs to ?</Text>
          </View>

      <View style = {styles.MainContainer}>
    <Image 
    style = {{width : width * 0.2, height : height * 0.12, marginTop: height * 0.3}}
    source = {require ('../../assets/trash.png')}/>
    

        <View style = {{alignItems : 'center', marginTop: height * 0.02}}>
      <FlatList
        numColumns = {3}
        ItemSeparatorComponent={
            () => <View/>
        }
        keyExtractor = {item => item.id}
        data={this.state.List}
        renderItem={({ item })=>{


        
          return <View >
            <Image
            source = {item.src}
            style = {{height : height * 0.15, width : width * 0.25}}
            />

        
        </View> 
        }}
        />
        
        </View>
        </View>
        <Animated.View style={imageStyle}
        {...this._panResponder.panHandlers}>
        <Text style={styles.word}>{rWord}</Text>
      </Animated.View>
      <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('AttentionI')}
                    style={[styles.signIn, {
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
    backgroundColor: '#F5F6FA'
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
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: height * 0.1,
  },
  word: {
    fontSize: 22,
    alignSelf: "center",
    fontWeight: 'bold',
    marginBottom: height * 0.15,
    marginTop: height * 0.05
    },
    signIn: {
      width: width * 0.5,
      height: height * 0.07,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      marginBottom: height * 0.05,
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }

})
