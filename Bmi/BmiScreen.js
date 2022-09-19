import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity , Modal, TouchableHighlight} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { AnimatedCircularProgress } from "react-native-circular-progress";

import Card1 from '../../components/Card1';
import Block from '../../components/Block';
import Badge from '../../components/Badge';

import API from '../../API';
import Slider from '@react-native-community/slider';

import AsyncStorage from '@react-native-async-storage/async-storage';
import BmiCalculator from './BmiCalculator';


const { width, height } = Dimensions.get("window");
var idUser;
var back = '<';
var bmi;
const BmiScreen = ({navigation}) => {
  const moment = require('moment');
  const today = moment();
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [data, setData] = useState([]); 
  const [bmii, setBmii] = useState(0); 
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [send, setSend] = React.useState({
    weight: 20,
    height: 120,
    bmiDate: today.format('YYYY-MM-DD'),
    idUser: idUser,
});
  const [barColor, setbarColor] = useState("white");
  const [textShow, setTextShow] = useState("");

  const retrieveBmi = async () => {

    idUser = await AsyncStorage.getItem("id");
    API.getBmiByLatestDate(idUser)
    .then(response => {
      setData(response.data);
    })
    .catch(e => {
    console.log(e.message);
  });
};

const handleWeightChange = (val) => {
  if( val<20 && val>350 ) {
    setSend({
          ...data,
          weight: val,
      });
  } else {
    setSend({
          ...data,
          weight: val,
      });
  }
};

const handleHeightChange = (val) => {
  if( val<120 && val>250 ) {
      setSend({
          ...data,
          height: val,
          bmiDate: today.format('YYYY-MM-DD'),
      });
  } else {
    setSend({
          ...data,
          height: val,
          bmiDate: today.format('YYYY-MM-DD'),
      });
  }
};

const QuickAdd = async (weight, height) => {

      const idUser = await AsyncStorage.getItem("id");
      bmi= send.weight / ( (send.height / 100) * (send.height / 100) ) ;
      bmi = bmi.toFixed(2);
      var bmiDate = today.format('YYYY-MM-DD');
      await API.addOrupdateBmi( {weight, height, bmi, bmiDate, idUser}, idUser ); 
      navigation.navigate("BmiScreen");

     };


  const changeBarColor = () => {
   
    if (bmii < 16) { setbarColor("#2b2766") || setTextShow('Underweight') };
    if (bmii > 16 && bmii < 17) { setbarColor("#242fa3") || setTextShow('Underweight') };
    if (bmii > 17 && bmii < 18.5) { setbarColor("#3377de") || setTextShow('Underweight') };
    if (bmii > 18.5 && bmii < 25) { setbarColor("green") || setTextShow('Normal') };
    if (bmii > 25 && bmii < 30) { setbarColor("orange") || setTextShow('Overweight') };
    if (bmii >= 30 && bmii < 35) { setbarColor("red") || setTextShow('Obeise') };
    if (bmii >= 35 && bmii < 40) { setbarColor("#910c0c") || setTextShow('Obeise') };
    if (bmii >= 40) { setbarColor("#730909") || setTextShow('Obeise') };
  };
 
  useEffect(() => {
    retrieveBmi();
    //console.log(data);
    setBmii(data.bmi); 
    setWeight(data.weight);
    setHeight(data.height);
    changeBarColor();
  },
   [idUser, data, send, bmii, weight]);
   
  
    return (
        
      <ScrollView style={styles.container}>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={[styles.text_footer, {
                        color: colors.text
                    }]}>    Weight:  {send.weight}</Text>
                    <Text></Text>
                    <Slider
                        value={send.weight}
                        maximumValue={350}
                        minimumValue={20} 
                        step={0.1} 
                        thumbTintColor="#6b95b5"
                        minimumTrackTintColor="#6b95b5"
                        maximumTrackTintColor="#6b95b5"
                        onValueChange={(val) => handleWeightChange((val).toFixed(1))}
                    />
                
            
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196' }}
              onPress={() => {
                QuickAdd( send.weight, send.height ),
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#d36a68' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={[styles.text_footer, {
                        color: colors.text
                    }]}>    Height:  {send.height} Kg</Text>
                    <Text></Text>
                    <Slider
                        value={send.height}
                        maximumValue={350}
                        minimumValue={20} 
                        step={0.1} 
                        thumbTintColor="#6b95b5"
                        minimumTrackTintColor="#6b95b5"
                        maximumTrackTintColor="#6b95b5"
                        onValueChange={(val) => handleHeightChange((val))}
                    />
                
            
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196' }}
              onPress={() => {
                QuickAdd( send.weight, send.height ),
                setModalVisible1(!modalVisible1);
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#d36a68' }}
              onPress={() => {
                setModalVisible1(!modalVisible1);
              }}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
            <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
              <Text style={styles.back}>{back}</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>My BMI</Text>
            </View>
  
        <View style={styles.containerTwo}>
        <View style={styles.containerTab}>
        <TouchableOpacity style={[styles.tab, {
                        backgroundColor: '#56bed1',
                    }]}
            onPress={() => {navigation.navigate('BmiScreen')}}>
            <Text style={[styles.tabText, {
                        color: '#fff'
                    }]}>BMI</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.tab}
          onPress={() => {navigation.navigate('BmiHistory')}}>
            <Text style={styles.tabText}>History</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tab}
            onPress={() => {navigation.navigate('BmiChart')}}>
            <Text style={styles.tabText}>Chart</Text>
          </TouchableOpacity>
          
        </View>
        
          
        {data && bmii > 0 ?  (<View>
          <View style={styles.containerTwo1}>
          <TouchableOpacity style={styles.image}
                
                onPress={() => navigation.navigate("BmiCalculator")}
              >
            <Image source={require('../../assets/add.png')} style={styles.image} />
          </TouchableOpacity>
          
          <AnimatedCircularProgress
          size={180}
          width={15}
          fill={bmii * 2}
          tintColor={barColor}
          backgroundColor="white"
          rotation={360}
          duration={1000}
        >
          {(fill) => <Text style={styles.circleText}>{bmii.toFixed(2)} {"\n"} {textShow}</Text>}
        </AnimatedCircularProgress>
        </View> 
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Card1 style={styles.card}>
              <Block row space="between" style={{ marginBottom: 16 }}>
                  <Text spacing={0.5} caption style={styles.cardText}>Weight: </Text>
                  <TouchableOpacity 
                                onPress={() => {
                                  setModalVisible(true);
                                }}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.icon} />
                            </TouchableOpacity>            
              </Block>
              <Text style={styles.cardText}>{weight} Kg</Text>    
              
          </Card1> 
         
          <Card1 style={styles.card}>
              <Block row space="between" style={{ marginBottom: 16 }}>
                  <Text spacing={0.5} caption style={styles.cardText}>Height: </Text>
                  <TouchableOpacity 
                                onPress={() => {
                                  setModalVisible1(true);
                                }}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.icon} />
                            </TouchableOpacity>                 
              </Block>
              <Text spacing={0.5} caption style={styles.cardText}>{height} cm</Text>  
          </Card1> 
        </View>
         
        <View style={styles.containerThree}>
        <Card1 shadow >
        <Block row space="between" style={{ marginBottom: 16 }}>
          <Text spacing={0.5} caption>
            Zone
          </Text>
          <Text spacing={0.5} caption medium primary>
           
          </Text>
          <Text spacing={0.5} caption>
            Bmi
          </Text>
        </Block>
        <Block row center>
          <Badge
            color= "#2e2a6e"
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color="#2b2766" size={8} />
          </Badge>
          <Block row space="between">
            <Text >
              Very serious underweight
            </Text>
            <Text spacing={0.5} caption medium primary>
              
            </Text>
            <Text spacing={0.5} caption>
              Under 16
            </Text>
        </Block>
        </Block>

        <Block row center>
          <Badge
            color= "#242fa3"
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color="#242fa3" size={8} />
          </Badge>
          <Block row space="between">
            <Text >
              Serious underweight
            </Text>
            <Text spacing={0.5} caption medium primary>
              
            </Text>
            <Text spacing={0.5} caption>
              16.0-16.9
            </Text>
        </Block>
        </Block>

        <Block row center>
          <Badge
            color= "#3377de"
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color="#3377de" size={8} />
          </Badge>
          <Block row space="between">
            <Text >
              Underweight
            </Text>
            <Text spacing={0.5} caption medium primary>
              
            </Text>
            <Text spacing={0.5} caption>
              17.0-18.4
            </Text>
        </Block>
        </Block>

        <Block row center>
          <Badge
            color= "green"
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color="green" size={8} />
          </Badge>
          <Block row space="between">
            <Text >
              Normal
            </Text>
            <Text spacing={0.5} caption medium primary>
              
            </Text>
            <Text spacing={0.5} caption>
              18.5-24.9
            </Text>
        </Block>
        </Block>

        <Block row center>
          <Badge
            color= "orange"
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color="orange" size={8} />
          </Badge>
          <Block row space="between">
            <Text >
              Overweight
            </Text>
            <Text spacing={0.5} caption medium primary>
              
            </Text>
            <Text spacing={0.5} caption>
              25.0-29.9
            </Text>
        </Block>
        </Block>

        <Block row center>
          <Badge
            color= "red"
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color="red" size={8} />
          </Badge>
          <Block row space="between">
            <Text >
              Obeise grade I
            </Text>
            <Text spacing={0.5} caption medium primary>
              
            </Text>
            <Text spacing={0.5} caption>
              30.0-34.9
            </Text>
        </Block>
        </Block>

        <Block row center>
          <Badge
            color= "#910c0c"
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color="#910c0c" size={8} />
          </Badge>
          <Block row space="between">
            <Text >
              Obeise grade II
            </Text>
            <Text spacing={0.5} caption medium primary>
              
            </Text>
            <Text spacing={0.5} caption>
              35.0-39.9
            </Text>
        </Block>
        </Block>

        <Block row center>
          <Badge
            color= "#730909"
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color="#730909" size={8} />
          </Badge>
          <Block row space="between">
            <Text >
              Obeise grade III
            </Text>
            <Text spacing={0.5} caption medium primary>
              
            </Text>
            <Text spacing={0.5} caption>
              Over 40
            </Text>
        </Block>
        </Block>

        </Card1>
        </View> 
        </View>): (<View style= {styles.containerTwo1}>
          <Text style={styles.cardText}>No data found..</Text>
          <TouchableOpacity onPress={ () => navigation.navigate('BmiCalculator')}>
            <Text style={styles.cardText}>Log your weight and height</Text>
          </TouchableOpacity>
        </View>) }
        </View>
      </ScrollView> 
    );
  }
  

export default BmiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F9F9F9'
},
header: {
  height: height * 0.08,
  width: width,
  flexDirection: 'row',
},
back: {
  color: '#000000',
fontSize: 43,
marginLeft: width * 0.05,
marginTop:  height * 0.01,
},
headerText: {
  color: '#000000',
  marginLeft: width * 0.3,
fontSize: 22,
fontWeight: 'bold',
marginTop: height * 0.035
},
containerTwo: {
    flex: 1, 
    backgroundColor: '#F9F9F9',
    marginTop: height * 0.05,
    marginBottom: height * 0.05,
    width: width * 0.95,
    alignSelf: 'center',
    borderRadius: 20
  },
  containerTwo1: {
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
    width: width*0.94,
    height: height * 0.39,
    marginBottom: height*0.01,
    marginTop: height * 0.055,
    alignSelf: 'center',
    borderRadius: 20
  },
  containerThree: {
    flex: 1,
    height: height * 0.35,
    width: width * 0.94,
  },
  containerTab: {
    flex: 1,
    flexDirection: 'row', 
    backgroundColor: '#fff',
    width: width * 0.95,
    height: height * 0.06,
    alignSelf: 'center',
    borderRadius: 20
  },
  tab: {
    flex: 1,
    backgroundColor: '#fff',
    width: (width * 0.95) / 3,
    height: height * 0.06,
    alignSelf: 'center',
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center'
  },
  tabText: {
    color: '#56BED1',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  containerfour : {
    flex : 1,
    backgroundColor : '#fff',
    borderTopRightRadius : 60,
    borderTopLeftRadius : 60,
    width: width * 0.8,
    height: height * 0.1,
    marginBottom: 0.1
  },

  circleText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf:"center",
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - 25 * 2.4 - 16) / 2.5,
    maxWidth: (width - 25 * 2.4 - 16) / 2.5,
    maxHeight: (width - 25 * 2.4 - 16) / 2.5,
    backgroundColor: '#ffff',
    borderLeftColor: '#000000'
  },
  image: {
    width: width * 0.13,
    height: width * 0.13,
    marginRight: width * 0.76,
    marginBottom: - height * 0.05
  },
  icon: {
    width: width * 0.08,
    height: width * 0.08,
   
  },
  card: {
    backgroundColor: '#ffff',
    flex: 1,
    width: width * 0.4,
    marginRight: width * 0.01,
    marginLeft: width * 0.01,
    borderLeftWidth: 8,
    borderLeftColor: '#6980b3',
    borderWidth: 2,
    borderBottomColor: '#d4d4d4',
    borderTopColor: '#d4d4d4',
    borderRightColor: '#d4d4d4'
  },
  cardText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: height * 0.25,
 
  },
  modalView: {
    height: height * 0.4,
    width: width * 0.8,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  openButton: {
    height: height * 0.05,
    width: width * 0.25,
    marginLeft: width * 0.03,
    marginTop: height * 0.05,
    alignContent: 'center',
    alignItems: 'center'
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: height * 0.008,
    fontSize: 18
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
},
text_footeer: {
  color: '#3cc196',
  fontSize: 35,
  fontWeight: 'bold',
  marginLeft: width * 0.18,

},
});
