import React, {useState, useEffect} from 'react';

import {StyleSheet, View, Image, Text, Dimensions, Modal, TouchableOpacity} from 'react-native';
import { AnimatedCircularProgress } from "react-native-circular-progress";

import Logical from './Logical';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('window')



var back = '<';
let b = 24;

const Score = props => {
  const [modalVisible, setModalVisible] = useState(true);
  const [modalVisible1, setModalVisible1] = useState(true);
  const [modalVisible2, setModalVisible2] = useState(true);
  const [modalVisible3, setModalVisible3] = useState(true);
  
  // useEffect(() => {
  //   setModalVisible(true);
  //   setModalVisible1(true);
  //   setModalVisible2(true);
  //   setModalVisible3(true);
  // },
  //  [b]);
  
   b=localStorage.getItem('Total');
  let c = parseInt(b);
  console.log("c")
  console.log(b)
    if (b > 24 ) {
      setTimeout(() => {
        setModalVisible(false)
      }, 4000);
        return (
          
            <View style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => {props.navigation.navigate('Home')}}>
                  <Text style={styles.back}>{back}</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Cognitive test score</Text>
                </View>
              <View style={styles.MainContainer}>
              
              <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.headline}>Great job</Text>
          <Image
                        style={{height : height * 0.4, width : width * 0.9, alignSelf: 'center', marginTop: height * 0.01}}
                        source={require('../../assets/great.gif')}/>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={styles.headline}>your score is</Text>
                  <Text style={[styles.number, {
                        color: '#3cc196'
                    }]}> {b}</Text>
              </View>
            </View>
          
        </View>
      </Modal>
              <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05, alignSelf: 'center', alignContent: 'center'
            , alignItems:'center'}}>
              <Text style={styles.headline}>Great job </Text>
              <AnimatedCircularProgress
          size={200}
          width={20}
          fill={((b)*100)/30}
          tintColor='#3cc196'
          backgroundColor="white"
          rotation={360}
          duration={1000}
        >
          {(fill) => <Text style={styles.circleText}>You've reached {((b*100)/30).toFixed(0)} %</Text>}
        </AnimatedCircularProgress>
              </View>
              </View>
              
            </View>
          );
    }

    if (  b <= 24 && b > 20) {
      setTimeout(() => {
        setModalVisible1(false)
      }, 4000);
        return (
            <View style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => {props.navigation.navigate('Home')}}>
                  <Text style={styles.back}>{back}</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Cognitive test score </Text>
                </View>
              <View style={styles.MainContainer}>
              <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.headline}>Nice job</Text>
          <Image
                        style={{height : height * 0.5, width : width * 0.9, alignSelf: 'center', marginTop: height * 0.01}}
                        source={require('../../assets/good.gif')}/>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={styles.headline}>your score is</Text>
                  <Text style={[styles.number, {
                        color: '#3cc196'
                    }]}> {b}</Text>
              </View>
            </View>
          
        </View>
      </Modal>
              <View style={{flex: 1, flexDirection: 'column',  marginLeft:width * 0.05, marginTop: height * 0.05}}>
              <AnimatedCircularProgress
          size={200}
          width={20}
          fill={((b)*100)/30}
          tintColor='#3cc196'
          backgroundColor="white"
          rotation={360}
          duration={1000}
        >
          {(fill) => <Text style={styles.circleText}>You've reached {((b*100)/30).toFixed(0)} %</Text>}
        </AnimatedCircularProgress>
              </View>
              </View>
              
            </View>
          );
    }

    if (  b <= 20 && b >= 10) {
      setTimeout(() => {
        setModalVisible2(false)
      }, 4000);
        return (
            <View style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => {props.navigation.navigate('Home')}}>
                  <Text style={styles.back}>{back}</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Cognitive test score</Text>
                </View>
              <View style={styles.MainContainer}>
              <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.headline}>Not your best...</Text>
          <Image
                        style={{height : height * 0.4, width : width * 0.9, alignSelf: 'center', marginTop: height * 0.01}}
                        source={require('../../assets/sorry.gif')}/>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={styles.headline}>your score is</Text>
                  <Text style={[styles.number, {
                        color: '#3cc196'
                    }]}> {b}</Text>
              </View>
            </View>
          
        </View>
      </Modal>
              <View style={{flex: 1, flexDirection: 'column',  marginLeft:width * 0.05, marginTop: height * 0.05}}>
              <AnimatedCircularProgress
          size={200}
          width={20}
          fill={((b)*100)/30}
          tintColor='#3cc196'
          backgroundColor="white"
          rotation={360}
          duration={1000}
        >
          {(fill) => <Text style={styles.circleText}>You've reached {((b*100)/30).toFixed(0)} %</Text>}
        </AnimatedCircularProgress>
              </View>
              </View>
              
            </View>
          );
        }

        if ( b <= 9) {
          setTimeout(() => {
            setModalVisible3(false)
          }, 4000);
            return (
                <View style={styles.container}>
                  <View style={styles.header}>
                    <TouchableOpacity onPress={() => {props.navigation.navigate('Home')}}>
                      <Text style={styles.back}>{back}</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Cognitive test score</Text>
                    </View>
                  <View style={styles.MainContainer}>
                  <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible3}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <Text style={styles.headline}>Very low score...</Text>
              <Image
                            style={{height : height * 0.4, width : width * 0.9, alignSelf: 'center', marginTop: height * 0.01}}
                            source={require('../../assets/bad.gif')}/>
                      <View style={{flexDirection: 'row'}}>
                      <Text style={styles.headline}>your score is</Text>
                      <Text style={[styles.number, {
                            color: '#3cc196'
                        }]}> {b}</Text>
                  </View>
                </View>
              
            </View>
          </Modal>
                  <View style={{flex: 1, flexDirection: 'column',  marginLeft:width * 0.05, marginTop: height * 0.05}}>
                  <AnimatedCircularProgress
              size={200}
              width={20}
              fill={((b)*100)/30}
              tintColor='#3cc196'
              backgroundColor="white"
              rotation={360}
              duration={1000}
            >
              {(fill) => <Text style={styles.circleText}>You've reached {((b*100)/30).toFixed(0)} %</Text>}
            </AnimatedCircularProgress>
                  </View>
                  </View>
                  
                </View>
              );
            }
    
};

export default Score;

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
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: height * 0.1,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems:'center'
  },
  modalView: {
    height: height * 0.4,
    width: width * 0.8,
    margin: 20,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems:'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
