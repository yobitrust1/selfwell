import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, View,ScrollView,TouchableOpacity,SafeAreaView,Button, Alert} from 'react-native';
import { DragSortableView, AutoDragSortableView } from 'react-native-drag-sort';

const {height, width} = Dimensions.get('window')

const parentWidth = width
const childrenWidth = width/3.3
const childrenHeight = width/2.7
const headerViewHeight = 160
const bottomViewHeight = 40

var resultat;
var back = '<';
export default class Puzzle extends Component {
     
    constructor(props) {
        super()

        this.state = { 
            data:[  

                { id: "5", source: require('../../assets/puzzle6.png') },
                
                { id: "1", source: require('../../assets/puzzle3.png') },
              
                { id: "3", source: require('../../assets/puzzle5.png') },
                { id: "4", source: require('../../assets/puzzle2.png') },
                { id: "6", source: require('../../assets/puzzle1.png') },
         
                { id: "2", source: require('../../assets/puzzle4.png') },
             
                
               
    
                   ],

               s : 0,
               stwo : 0,
               sthree : 0,
               sfour:0,
               sfive : 0,
               ssix : 0,
        }
    }

    current = () => {
        return resultat;
      }

    
    check =() => {
        if (this.state.s == "6" && this.state.stwo == "4" && this.state.sthree == "1" && this.state.sfour =="2"
        && this.state.sfive == "3" && this.state.ssix =="5")
        {
            resultat = 2
            localStorage.setItem('Total',resultat );
            Alert.alert(
                'Good job !',
                'You have ' + resultat + ' points',
                [

                    {
                        text: 'Go to next task',
                        onPress: () => this.props.navigation.navigate('InhibI')
                    },
                ],
            )
        
        }
        else 
         {
             
             resultat = 0
             localStorage.setItem('Total',resultat );
             Alert.alert(
                'Wrong answer !',
                'You have ' + resultat + ' points',
                [
                    {
                        text: 'Go to next task',
                        onPress: () => this.props.navigation.navigate('InhibI')
                    },
                ],
            )
         }
     }
     
    render() {
    
        const theme = this.props;

        return (
            <SafeAreaView style={{backgroundColor: theme.background}} >
            <View style={[styles.header, {
                        color: theme.background
                    }]}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
            <Text style={[styles.back, {
                        color: theme.text
                    }]}>{back}</Text>
          </TouchableOpacity>
          <Text style={[styles.headerText, {
                        color: theme.text
                    }]}>Task 1: Puzzle</Text>
          </View>
              <View style={styles.containerOne}>
              <Image
                        style={{height : height * 0.3, width : width * 0.9, alignSelf: 'center', marginTop: height * 0.01}}
                        source={require('../../assets/3e24a667037ebe8d455707d04ad8e959.jpeg')}/>

                <AutoDragSortableView
                    dataSource={this.state.data}
                    isDragFreely={true}
                    parentWidth={parentWidth}
                  
                  
           
                    marginChildrenRight={1}
                    marginChildrenLeft = {1}
                    marginChildrenTop = {0}
                    childrenWidth= {childrenWidth}
                    childrenHeight={childrenHeight*0.9}
              
                    onDragging={this.onDragging}
                    onDataChange={ (data) => {
                            this.setState({
                                    data: data,
                                    s : data[0].id,
                                    stwo : data[1].id,
                                    sthree : data[2].id, 
                                    sfour : data[3].id, 
                                    sfive : data[4].id, 
                                    ssix : data[5].id, 


                        }
                            )


                          
                        }
                            }
                    keyExtractor={(item,index)=> item.id} 
                    renderItem={(item,index)=>{
                        return this.renderItem(item,index)
                    }}
                   
                  
                /></View>
                <TouchableOpacity
                    onPress={this.check}
                    style={[styles.signIn, {
                        backgroundColor: '#56BED1',
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Check my answer</Text>
                </TouchableOpacity>
                  
            </SafeAreaView>
        )
    }

    renderItem(item,index) {
        return (
            <View style={styles.item}>
                <View >
                    <Image style={styles.item_icon} source={item.source}/>
                </View>
                
            </View>
        )
    }
    onDragging = () => {
    
        if (this.isBuffer) return;

}
}
const styles = StyleSheet.create({
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
      alignContent: "center",
      alignSelf: "center",
      marginTop: height * 0.02,
      marginBottom: height * 0.02,
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
    item: {
        width: childrenWidth*1.2,
        height: childrenHeight,
        alignItems: 'center',
        marginVertical : 30,
        
        
    },
    item_icon: {
        width: width * 0.3,
        height: width * 0.3,
        
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
    }

})
