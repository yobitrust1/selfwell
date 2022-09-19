import React, {useState, useEffect} from 'react';
import { View, ScrollView, TextInput, Text, Dimensions, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import  { LinearGradient } from 'expo-linear-gradient';

import Card1 from '../../components/Card1';
import Block from '../../components/Block';

import Api from '../../API';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get("window");
var back = '<';

const BloodAnalysisEdit = props  => {

    const initialAnalyseState = {
        idBloodAnalyse: "",
        glucose: 0,
        cReactiveProtein: 0,
        dDimer: 0,
        ip10: 0,
        freeAlbumin: 0,
        leptin: 0,
        adiponectin: 0,
        igf1: 0,
        resistin: 0,
        opn: 0,
        orexinA: 0,
        melatonin: 0,
        creatinine: 0,
      };

      const [currentBloodAnalysis, setCurrentBloodAnalysis] = useState(initialAnalyseState);
      const [message, setMessage] = useState("");

      const getBloodAnalysis = id => {
        Api.getBloodAnalysisById(id)
          .then(response => {
            setCurrentBloodAnalysis (response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
    
      useEffect(() => {
        getBloodAnalysis (props.route.params.idBloodAnalyse);
      }, [props.route.params.idBloodAnalyse]);
       
      const setBloodAnalysis = () => {
        axios.put(`http://4531c28949ef.ngrok.io/selfwell/bloodAnalyses/${props.route.params.idBloodAnalyse}`, currentBloodAnalysis)
        
          .then(response => {
            setMessage("The blood analysis was updated successfully!");
            props.navigation.navigate("BloodAnalysisHistory");
          })
          .catch(e => {
            console.log(e);
            
          });
      };
      
      const handleInputChange = (name, value) => {
       
        setCurrentBloodAnalysis({ ...currentBloodAnalysis, [name]: value });
      };

    return(
      <ScrollView style={styles.container}>

      <View style={styles.header}>
            <TouchableOpacity onPress={() => {props.navigation.navigate('BloodAnalysisHistory')}}>
              <Text style={styles.back}>{back}</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>Edit my blood analysis</Text>
            </View>
  
        <View style={styles.containerTwo}>
      
         
            {currentBloodAnalysis ? ( 
                <View >
                  <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                   <Text style={styles.text_footer}>    
                     Glucose: </Text> 
                   <Text style={styles.textfooter}>    
                     {currentBloodAnalysis.glucose} (g/L)
                   </Text>  
                    
                   </View>
                   <TextInput 
                    style={styles.textInput}
                    name="glucose"
                    placeholder="Glucose new value..."
                    value={currentBloodAnalysis.glucose}
                    onChangeText={(value) => handleInputChange("glucose", value)}
                    
                    />
                   <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                   <Text style={styles.text_footer}>    
                   C Reactive protein: </Text>  
                   <Text style={styles.textfooter}>    
                   {currentBloodAnalysis.cReactiveProtein} (mg/l)
                   </Text>
                   </View>
                   <TextInput 
                    style={styles.textInput}
                    name="cReactiveProtein"
                    placeholder="C Reactive protein new value..."
                    value={currentBloodAnalysis.cReactiveProtein}
                    onChangeText={(value) => handleInputChange("cReactiveProtein", value)}
                    
                    />
                   <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                   <Text style={styles.text_footer}>    
                   D-Dimer: </Text> 
                   <Text style={styles.textfooter}>    
                   {currentBloodAnalysis.dDimer} (ug/L)
                   </Text>  
                    
                   </View>
                   <TextInput 
                    style={styles.textInput}
                    name="dDimer"
                    placeholder="D-Dimer new value..."
                    value={currentBloodAnalysis.dDimer}
                    onChangeText={(value) => handleInputChange("dDimer", value)}
                    
                    />
                   <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                   <Text style={styles.text_footer}>    
                   IP-10: </Text>  
                   <Text style={styles.textfooter}>    
                   {currentBloodAnalysis.ip10} (pg/mL)
                   </Text>
                    
                   </View>
                   <TextInput 
                    style={styles.textInput}
                    name="ip10"
                    placeholder="ip10 new value..."
                    value={currentBloodAnalysis.ip10}
                    onChangeText={(value) => handleInputChange("ip10", value)}
                    
                    />
                   <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                   <Text style={styles.text_footer}>    
                   Free albumin: </Text>  
                   <Text style={styles.textfooter}>    
                    {currentBloodAnalysis.freeAlbumin} (g/dL)
                   </Text> 
                    
                   </View>
                   <TextInput 
                    style={styles.textInput}
                    name="freeAlbumin"
                    placeholder="Free albumin new value..."
                    value={currentBloodAnalysis.freeAlbumin}
                    onChangeText={(value) => handleInputChange("freeAlbumin", value)}
                    
                    />
                   <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                   <Text style={styles.text_footer}>    
                   Leptin: </Text>  
                   <Text style={styles.textfooter}>    
                   {currentBloodAnalysis.leptin} (ng/mL)
                   </Text>  
                   
                   </View>
                   <TextInput 
                    style={styles.textInput}
                    name="leptin"
                    placeholder="Leptin new value..."
                    value={currentBloodAnalysis.leptin} 
                    onChangeText={(value) => handleInputChange("leptin", value)}
                    
                    />
                   <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                   <Text style={styles.text_footer}>    
                   Adiponectin: </Text>
                   <Text style={styles.textfooter}>    
                   {currentBloodAnalysis.adiponectin} (ug/mL)
                   </Text>  
                    
                   </View>
                   <TextInput 
                    style={styles.textInput}
                    name="adiponectin"
                    placeholder="Adiponectin new value..."
                    value={currentBloodAnalysis.adiponectin}
                    onChangeText={(value) => handleInputChange("adiponectin", value)}
                    
                    />
                   <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                   <Text style={styles.text_footer}>    
                   IGF-1: </Text>
                   <Text style={styles.textfooter}>    
                   {currentBloodAnalysis.igf1} (ug/L)
                   </Text>  
                    
                   </View>
                   <TextInput 
                    style={styles.textInput}
                    name="igf1"
                    placeholder="IGF-1 new value..."
                    value={currentBloodAnalysis.igf1}
                    onChangeText={(value) => handleInputChange("igf1", value)}
                    
                    />
                   <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                   <Text style={styles.text_footer}>    
                   Resistin: </Text> 
                   <Text style={styles.textfooter}>    
                    {currentBloodAnalysis.resistin} (ng/mL)
                   </Text>  
                    
                   </View>
                   <TextInput 
                    style={styles.textInput}
                    name="resistin"
                    placeholder="Resistin new value..."
                    value={currentBloodAnalysis.resistin}
                    onChangeText={(value) => handleInputChange("resistin", value)}
                    
                    />
                   <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                   <Text style={styles.text_footer}>    
                   OPN: </Text> 
                   <Text style={styles.textfooter}>    
                   {currentBloodAnalysis.opn} (ng/ml)
                   </Text>  
                    
                   </View>
                   <TextInput 
                    style={styles.textInput}
                    name="opn"
                    placeholder="OPN new value..."
                    value={currentBloodAnalysis.opn}
                    onChangeText={(value) => handleInputChange("opn", value)}
                    
                    />
                   <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                   <Text style={styles.text_footer}>    
                   Orexin-A: </Text>  
                   <Text style={styles.textfooter}>    
                   {currentBloodAnalysis.orexinA} (pg/ml)
                   </Text>
                   
                   </View>
                   <TextInput 
                    style={styles.textInput}
                    name="orexinA"
                    placeholder="Orexin-A new value..."
                    value={currentBloodAnalysis.orexinA}
                    onChangeText={(value) => handleInputChange("orexinA", value)}
                    
                    />
                   <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}> 
                   <Text style={styles.text_footer}>    
                   Melatonin: </Text>
                   <Text style={styles.textfooter}>    
                    {currentBloodAnalysis.melatonin} 
                   </Text>  
                   
                   </View>
                   <TextInput 
                    style={styles.textInput}
                    name="melatonin"
                    placeholder="Melatonin new value..."
                    value={currentBloodAnalysis.melatonin}
                    onChangeText={(value) => handleInputChange("melatonin", value)}
                    
                    />
                   <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                   <Text style={styles.text_footer}>    
                   creatinine: </Text>  
                   <Text style={styles.textfooter}>    
                   {currentBloodAnalysis.creatinine} (μmol/L)
                   </Text> 
                    
                   </View>
                   <TextInput 
                    style={styles.textInput}
                    name="creatinine"
                    placeholder="creatinine new value..."
                    value={currentBloodAnalysis.creatinine}
                    onChangeText={(value) => handleInputChange("creatinine", value)}
                    
                    />
                   <View style={{flexDirection: 'row', alignSelf: 'center', marginBottom: height * 0.03}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196' }}
              onPress={() => {
                setBloodAnalysis()
              }}>
              <Text style={styles.textStyle}>Edit</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#d36a68' }}
              onPress={() => {
                props.navigation.navigate("BloodAnalysisHistory")
              }}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableHighlight>
            </View>
                   
                </View>
            ) : (
                <View><Text>Not found</Text></View>
            ) }
       
        </View>
        </ScrollView>
    );
}

export default BloodAnalysisEdit;
    
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
containerTwo: {
    flex: 1, 
    backgroundColor: '#fff',
    marginTop: height * 0.05,
    marginBottom: height * 0.05,
    width: width * 0.95,
    alignSelf: 'center',
    borderRadius: 20
  },
  openButton: {
    height: height * 0.06,
    width: width * 0.3,
    marginLeft: width * 0.03,
    marginTop: height * 0.05,
    alignContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf:"center",
},
  footer: {
      flex: Platform.OS === 'ios' ? 3 : 5,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30,
      marginTop: height * 0.1,
      marginBottom: height * 0.000009,
      alignSelf: 'center'
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18,
      marginLeft: width * 0.05
  },
  textfooter: {
    color: '#5C75D9',
    fontWeight: 'bold',
    fontSize: 18,
},
  textInput: {
    height: height * 0.07,
    width: width * 0.6,
    marginBottom: height * 0.05,
    marginLeft: width * 0.07,
    color: 'black',
    borderBottomWidth: 2,
    borderBottomColor: '#56bed1',
    
  },
  button: {
    width: width * 0.6,
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10
  },
  textbutton: {
    fontSize: 18,
    fontWeight: 'bold'
  }
  });
