import React, { Component } from 'react';

import { View, Text, StyleSheet, Alert, Dimensions, TouchableOpacity, ScrollView , LogBox} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Slider from '@react-native-community/slider';
import { useTheme } from 'react-native-paper';
import  { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import { Api } from '../../API';


var moment = require('moment');
var back = '<';
class EditBmi extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            //idBmi: this.props.route.params.data.idBmi,
            weight: this.props.route.params.weight,
            height: this.props.route.params.height,
            bmiDate: this.props.route.params.bmiDate,
            bmi: this.props.route.params.bmi,
            idBmi: this.props.route.params.idBmi,
            idUser: this.props.route.params.idUser,
        }
       
    }
    
    componentDidUpdate() {
        this.props.route.params.idBmi;
        this.props.route.params.weight;
   }
       
    componentDidMount(){

        LogBox.ignoreAllLogs();        
    }
   
    
    sendData = async () => {
        const {navigation} = this.props;
        const idUser = await AsyncStorage.getItem("id");
        this.setState({bmi: (this.state.weight / ( (this.state.height / 100) * (this.state.height / 100) )).toFixed(2) });
        axios.put(`https://test.yobitrust.com:8443/Service-SelfWell-0.0.1-SNAPSHOT/bmi/up/${idUser}`, this.state)
            .then(function (response) {
                Alert.alert(
                    'Succeed',
                    'Successfully Changing Bmi',
                    [
                        {
                            text: "OK",
                            onPress : () => navigation.navigate('BmiHistory'),
                        }
                    ]
                );
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    
    render() {
        const moment = require('moment');

        return (
            <ScrollView style={styles.container}>

        <View style={styles.header}>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('BmiHistory')}}>
                <Text style={styles.back}>{back}</Text>
              </TouchableOpacity>
              <Text style={styles.headerText}>Edit my BMI</Text>
              </View>
              <View style={styles.containerTwo}>
          <View style={styles.containerTwo1}>
         
                    <Text style={styles.text_footer
                        }>    Weight:  {this.state.weight} Kg</Text>
                    <Text></Text>
                    <Slider
                        value={this.state.weight}
                        maximumValue={350}
                        minimumValue={20} 
                        step={0.1} 
                        thumbTintColor="#6b95b5"
                        minimumTrackTintColor="#6b95b5"
                        maximumTrackTintColor="#6b95b5"
                        onValueChange={(val) => this.setState({weight:val.toFixed(1)})}
                    />
           
           
              <Text style={styles.text_footer}>    Height:  {this.state.height} cm</Text>
                  <Text></Text>          
                    <Slider
                        value={this.props.route.params.height}
                        maximumValue={350}
                        minimumValue={120} 
                        step={0.1} 
                        thumbTintColor="#6b95b5"
                        minimumTrackTintColor="#6b95b5"
                        maximumTrackTintColor="#6b95b5"
                        onValueChange={(val) => this.setState({height:val.toFixed(1)})}
                    />
               <Text  style={[styles.text_footer, {
                  marginBottom: height * 0.03
              }]}>    Date:  {moment(this.state.bmiDate).format('LL')}</Text>
                <DatePicker
                mode="date"
                placeholder=  {this.state.bmiDate } 
                format="YYYY-MM-DD"
                minDate="2000-01-01"
                maxDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                style={{ width: width * 0.6 }}
                customStyles={{
                dateIcon: {
                position: 'absolute',
                left: width * 0.05 ,
                marginLeft: 0
                },
                dateInput: {
                marginLeft: width * 0.15
                }

                }}
                onDateChange={(value) => {this.setState({bmiDate: (moment(value).format("YYYY-MM-DD")) })}}
            
        />
           </View>
           

<TouchableOpacity
                    onPress={() => this.sendData()}
                    style={[styles.signIn, {
                        backgroundColor: '#56BED1',
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Update</Text>
                </TouchableOpacity>
        </View>
       
            </ScrollView>
        )
    }
}

const { width, height } = Dimensions.get("window");

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
        marginBottom: height * 0.05,
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

export default EditBmi