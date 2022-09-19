import React , { useState } from 'react';
import { View, ScrollView, Text, Dimensions, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Card1 from '../../components/Card1';
import Block from '../../components/Block';
import Badge from '../../components/Badge';

import BmiCalculator from './BmiCalculator';

import axios from 'axios';
import AuthHeader from '../../AuthHeader';

import Api from '../../API';

import AsyncStorage from '@react-native-async-storage/async-storage';

var back = '<';
const { width, height } = Dimensions.get("window");

class BmiHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bmis:[],
            isLoading: true
        };
    }

    componentDidMount() {
        this.getapiData();
   }
     
    componentDidUpdate() {
        this.getapiData();
    }
    
   
    async getapiData() {
        const idUser = await AsyncStorage.getItem("id");
        
        await axios.get(`https://test.yobitrust.com:8443/Service-SelfWell-0.0.1-SNAPSHOT/bmi/${idUser}`,
        { headers: AuthHeader() }).then(res => {
            const bmis = res.data;
            this.setState({
                bmis: res.data,
            });
          })
        .catch((err) => {
            console.log(err);
        })
               
    }
    showAlertDelete = (idItem) => {
        Alert.alert(
            'Confirmation',
            'Sure you want to delete this item ?',
            [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => Api.DeleteBmi(idItem)
                },
            ],
        )
    }

    handleEdit = async (id,weight, height, bmiDate, bmi, idUser ) => {
        await this.props.navigation.navigate('EditBmi',{idBmi:id, weight: weight, height: height,
        bmiDate: bmiDate, bmi: bmi, idUser: idUser});
        console.log("edit"+bmiDate)
    }

    render() {
        const moment = require('moment');

        return (
            <ScrollView style={styles.container}>

      <View style={styles.header}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
              <Text style={styles.back}>{back}</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>My BMI</Text>
            </View>
  
        <View style={styles.containerTwo}>
        <View style={styles.containerTab}>
        <TouchableOpacity style={styles.tab}
            onPress={() => {this.props.navigation.navigate('BmiScreen')}}>
            <Text style={styles.tabText}>BMI</Text>
          </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, {
                        backgroundColor: '#56bed1',
                    }]}
          onPress={() => {this.props.navigation.navigate('BmiHistory')}}>
            <Text style={[styles.tabText, {
                        color: '#fff'
                    }]}>History</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tab}
            onPress={() => {this.props.navigation.navigate('BmiChart')}}>
            <Text style={styles.tabText}>Chart</Text>
          </TouchableOpacity>
          
        </View>
                 {
                     this.state.bmis.length>0?
                     <View>
 {
                            this.state.bmis.map((item,e) =>
                            
                           <View style={styles.containerTwo} key={e}>
        <Card1 shadow >
        <Block row space="between" style={{ marginBottom: 16 }}>
        <TouchableOpacity 
                    spacing={0.5} caption
                    onPress={ () => this.handleEdit(item.idBmi, item.weight, item.height, item.bmiDate, item.bmi, item.idUser)}
          >
                 <Image spacing={0.5} caption source={require('../../assets/pencil.png')} style={styles.image1}/>  
         </TouchableOpacity>
          <Text spacing={0.5} caption medium primary style={styles.dateText}>
          
          </Text>
          
          <TouchableOpacity 
                    spacing={0.5} caption
                    onPress={ () => this.showAlertDelete(item.idBmi)}
          >
                 <Image spacing={0.5} caption source={require('../../assets/x-button.png')} style={styles.image1}/>  
         </TouchableOpacity>
         
         
        </Block>
        <Text style={styles.dateText}>{moment(item.bmiDate).format('LL')}</Text>
        <Block row space="between" style={{ marginBottom: 16 }}>
          <Image spacing={0.5} caption source={require('../../assets/scale.png')} style={styles.image}/>
          <Image spacing={0.5} caption source={require('../../assets/height.png')} style={styles.image}/>
          <Image spacing={0.5} caption source={require('../../assets/bmiIcon.png')} style={styles.image}/>
        </Block>
        <Block row center>
          
          <Block row space="between">
          
            <Text spacing={0.5} caption medium primary style={styles.textStyle}>
              {item.weight} Kg
            </Text>
            <Text spacing={0.5} caption style={styles.textStyle}>
            {item.height} cm
            </Text>
            <Text spacing={0.5} caption style={styles.textStyle}>
            {item.bmi}
            </Text>
        </Block>
        </Block>
      

       
</Card1>
</View>
        
        ) }
                     </View>:<View style= {styles.containerTwo1}>
          <Text style={styles.cardText}>No data found..</Text>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('BmiCalculator')}>
            <Text style={styles.cardText}>Log your weight and height</Text>
          </TouchableOpacity>
        </View>
                 }
               
                </View>
                </ScrollView>
        )
    }
}

export default BmiHistory;

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
      cardText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf:"center",
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
      dateText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3a3c4e',
        marginTop: - height * 0.038,
        marginBottom: height * 0.05,
        alignSelf: 'center'
      },
    textStyle: {
        fontSize: 18,
        alignSelf:"center",
        marginTop: 20
    },
    image: {
        height: width *0.1,
        width: width * 0.1
    },
    image1: {
        height: width *0.07,
        width: width * 0.07
    }
    
});