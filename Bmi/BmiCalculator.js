import React, { memo, useEffect } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    Dimensions,
    Alert
} from 'react-native';
import Slider from '@react-native-community/slider';
import * as Animatable from 'react-native-animatable';
import  { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';

import DatePicker from 'react-native-datepicker';

import AsyncStorage from '@react-native-async-storage/async-storage';
import 'localstorage-polyfill'; 

import API from '../../API';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

var bmi;
var back = '<';

const BmiCalculator = ({navigation}) => {
   

    const moment = require('moment');
    const today = moment();
    const [data, setData] = React.useState({
        weight: 20,
        height: 120,
        bmiDate: today.format('YYYY-MM-DD'),
        idUser: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidWeight: true,
        isValidHeight: true,
    });
   

    const { colors } = useTheme();
    
    const handleWeightChange = (val) => {
        if( val<20 && val>350 ) {
            setData({
                ...data,
                weight: val,
                isValidWeight: true
            });
        } else {
            setData({
                ...data,
                weight: val,
                isValidWeight: false
            });
        }
    };

    const handleHeightChange = (val) => {
        if( val<120 && val>250 ) {
            setData({
                ...data,
                height: val,
                isValidHeight: true
            });
        } else {
            setData({
                ...data,
                height: val,
                isValidHeight: false
            });
        }
    };

    const dateChange = (val) => {
        setData({
        ...data,
        bmiDate: val,
        check_textInputChange: true,
        });
}

    const send = async (weight, height, bmiDate) => {

        if ( data.weight == 0 || data.height == 0 ) {
            Alert.alert('Wrong Input!', 'All the fields cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }
        else if ( data.isValidWeight = false ){
            Alert.alert('Wrong Input!', 'Enter a valid weight', [
                {text: 'Okay'}
            ]);
            return;
        }
        else if ( data.isValidHeight = false ){
            Alert.alert('Wrong Input!', 'Enter a valid height', [
                {text: 'Okay'}
            ]);
            return;
        }
        else{    
            const idUser = await AsyncStorage.getItem("id");
            bmi= data.weight / ( (data.height / 100) * (data.height / 100) ) ;
            bmi = bmi.toFixed(2);
            await API.addOrupdateBmi( {weight, height, bmi, bmiDate, idUser}, idUser ); 

            localStorage.setItem("bmi",bmi);
            navigation.navigate("BmiScreen");

           }
     };
     

     return (

        
       
        <ScrollView style={styles.container}>

        <View style={styles.header}>
              <TouchableOpacity onPress={() => {navigation.navigate('BmiScreen')}}>
                <Text style={styles.back}>{back}</Text>
              </TouchableOpacity>
              <Text style={styles.headerText}>Add my BMI</Text>
              </View>
              <View style={styles.containerTwo}>
          <View style={styles.containerTwo1}>
         
                    <Text style={[styles.text_footer, {
                        color: colors.text
                    }]}>    Weight:  {data.weight} Kg</Text>
                    <Text></Text>
                    <Slider
                        value={data.weight}
                        maximumValue={350}
                        minimumValue={20} 
                        step={0.1} 
                        thumbTintColor="#6b95b5"
                        minimumTrackTintColor="#6b95b5"
                        maximumTrackTintColor="#6b95b5"
                        onValueChange={(val) => handleWeightChange((val).toFixed(1))}
                    />
           
           
              <Text style={[styles.text_footer, {
                  color: colors.text
              }]}>    Height:  {data.height} cm</Text>
                  <Text></Text>          
                    <Slider
                        value={data.height}
                        maximumValue={350}
                        minimumValue={120} 
                        step={0.1} 
                        thumbTintColor="#6b95b5"
                        minimumTrackTintColor="#6b95b5"
                        maximumTrackTintColor="#6b95b5"
                        onValueChange={(val) => handleHeightChange((val.toFixed(1)))}
                    />
               
           </View>
              
             
           <TouchableOpacity
                    onPress={() => {send( data.weight, data.height, data.bmiDate )}}
                    style={[styles.signIn, {
                        backgroundColor: '#56BED1',
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Add</Text>
                </TouchableOpacity>           
              
             </View>
         
          </ScrollView>
    
      );
  };
  
  
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
      marginLeft: width * 0.25,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: height * 0.035
    },
    containerTwo: {
        flex: 1, 
        backgroundColor: '#fff',
        marginTop: height * 0.05,
        marginBottom: height * 0.05,
        width: width * 0.95,
        alignSelf: 'center',
        borderRadius: 20
      },
      containerTwo1: {
        backgroundColor: '#fff',
        width: width*0.85,
        marginBottom: height*0.01,
        marginTop: height * 0.055,
        alignSelf: 'center',
        borderRadius: 20
      },
      
      text_footer: {
          color: '#05375a',
          fontSize: 18,
          marginTop: height * 0.05
      },
      action: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
          paddingBottom: 5
      },
      actionError: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#FF0000',
          paddingBottom: 5
      },
      textInput: {
          flex: 1,
          marginTop: Platform.OS === 'ios' ? 0 : -12,
          paddingLeft: 10,
          color: '#05375a',
      },
      errorMsg: {
          color: '#FF0000',
          fontSize: 14,
      },
      button: {
          alignItems: 'center',
          marginBottom: height * 0.1,
          width: width * 0.5,
          alignContent: "center",
          alignSelf: "center"
      },
      signIn: {
        width: width * 0.5,
        height: height * 0.07,
        marginTop: height * 0.1,
        marginBottom: height * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
    });
  

export default memo(BmiCalculator);