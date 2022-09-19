import { 
    View, 
    Text, 
    ScrollView, 
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { Button , TextInput , useTheme } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
const radioButtonsData = [{
  id: '1', // acts as primary key, should be unique and non-empty string
  label: 'Oui',
  value: true
}, {
  id: '2',
  label: 'Non',
  value: false
}]
const radioButtonsData1 = [{
  id: '3', // acts as primary key, should be unique and non-empty string
  label: 'Oui',
  value: true
}, {
  id: '4',
  label: 'Non',
  value: false
}]
const radioButtonsData2 = [{
  id: '5', // acts as primary key, should be unique and non-empty string
  label: 'Oui',
  value: true
}, {
  id: '6',
  label: 'Non',
  value: false
}]


const HabitudesDeVie1 = (props) => {
  const { colors } = useTheme();
  const [prediction, setprediction] = useState();
  const [prediction2, setprediction2] = useState();
  const [laboratory_test_L, setLaboratory_test_L] = useState(0)
  const [laboratory_test_N, setLaboratory_test_N] = useState(0)
  const [laboratory_test_ESR, setLaboratory_test_ESR] = useState()
  const [laboratory_test_CRP, setLaboratory_test_CRP] = useState()
  const [laboratory_test_PCT, setLaboratory_test_PCT] = useState()
  const [laboratory_test_CK_MB, setLaboratory_test_CK_MB] = useState()
  const [laboratory_test_D_dimer, setLaboratory_test_D_dimer] = useState()
  const [laboratory_test_ALT, setLaboratory_test_ALT] = useState()
  const [laboratory_test_AST, setLaboratory_test_AST] = useState()
  const [laboratory_test_ALB, setLaboratory_test_ALB] = useState()
  const [laboratory_test_LDH, setLaboratory_test_LDH] = useState()
  const [age, setAge] = useState()
  const [cK, setCK] = useState()
  const [o2, setO2] = useState()
  const [symptoms_Cough, setSymptoms_Cough] = useState()
  const [symptoms_Dyspnea, setSymptoms_Dyspnea] = useState()
  const [symptoms_Fatigue, setSymptoms_Fatigue] = useState()
  const [symptoms_Cough1, setSymptoms_Cough1] = useState(radioButtonsData)
  const [symptoms_Dyspnea1, setSymptoms_Dyspnea1] = useState(radioButtonsData1)
  const [symptoms_Fatigue1, setSymptoms_Fatigue1] = useState(radioButtonsData2)
  function onPressRadioButton(radioButtonsArray) {
    
  for(var i in radioButtonsArray)
  {
      if(radioButtonsArray[i].value==true)
        {
          setSymptoms_Cough1(radioButtonsArray);
          setSymptoms_Cough(radioButtonsArray[i].selected);
          console.log(radioButtonsArray[i].selected)
        }
    }
}
function onPressRadioButton1(radioButtonsArray) {
  
  for(var i in radioButtonsArray)
  {
    if(radioButtonsArray[i].value==true)
      {
        setSymptoms_Dyspnea1(radioButtonsArray);
        setSymptoms_Dyspnea(radioButtonsArray[i].selected);
        console.log(radioButtonsArray[i].selected)
      }
  }
}
function onPressRadioButton2(radioButtonsArray) {
  for(var i in radioButtonsArray)
  {
    if(radioButtonsArray[i].value==true)
      {
        setSymptoms_Fatigue1(radioButtonsArray);
        setSymptoms_Fatigue(radioButtonsArray[i].selected);
        console.log(radioButtonsArray[i].selected)
      }
  }
  
}

  var handle1Change = (text) => {
    setLaboratory_test_L(text)
}
var handle2Change = (text) => {
  setLaboratory_test_N(text)
}
var handle3Change = (text) => {
  setLaboratory_test_ESR(text)
}
var handle4Change = (text) => {
  setLaboratory_test_CRP(text)
}
var handle5Change = (text) => {
  setLaboratory_test_PCT(text)
}
var handle6Change = (text) => {
  setLaboratory_test_CK_MB(text)
}

var handle7Change = (text) => {
  setLaboratory_test_D_dimer(text)
}
var handle8Change = (text) => {
  setLaboratory_test_ALT(text)
}
var handle9Change = (text) => {
  setLaboratory_test_AST(text)
}
var handle10Change = (text) => {
  setLaboratory_test_ALB(text)
}
var handle11Change = (text) => {
  setLaboratory_test_LDH(text)
}
var handle12Change = (text) => {
  setAge(text)
}
var handle13Change = (text) => {
  setCK(text)
}
var handle14Change = (text) => {
  setO2(text)
}
var handle15Change = (data) => {
  if (data[0].selected)
  setSymptoms_Cough(true)
    else setSymptoms_Cough(false)
}
var handle16Change = (data) => {
  if (data[0].selected)
  setSymptoms_Dyspnea(true)
    else setSymptoms_Dyspnea(false)
}
var handle17Change = (data) => {
  if (data[0].selected)
  setSymptoms_Fatigue(true)
    else setSymptoms_Fatigue(false)
};
function get_prediction() {
  alert(prediction)};
function get_prediction2() {
    alert(prediction2)};  
useEffect(() => {
  fetch('https://lit-brook-43404.herokuapp.com/predict',{method:"POST",
  body :JSON . stringify({ 'Laboratory_test_L':laboratory_test_L, 'Laboratory_test_N':laboratory_test_N, 'Laboratory_test_ESR_(mm/hr)':laboratory_test_ESR, 'Laboratory_test_CRP_(mg/L)':laboratory_test_CRP, 'Laboratory_test_PCT_(ng/ml)':laboratory_test_PCT, 'Laboratory_test_CK_MB_(ng/ml)':laboratory_test_CK_MB, 'Laboratory_test_D_dimer_(ug/ml)':laboratory_test_D_dimer, 'Laboratory_test_ALT_(U/L)':laboratory_test_ALT, 'Laboratory_test_AST_(U/L)':laboratory_test_AST, 'Laboratory_test_ALB_(g/L)':laboratory_test_ALB, 'Laboratory_test_LDH_(U/L)':laboratory_test_LDH, 'Age':age, 'CK':cK, 'O2%':o2, 'Symptoms_Cough':symptoms_Cough, 'Symptoms_Dyspnea':symptoms_Dyspnea, 'Symptoms_Fatigue':symptoms_Fatigue,
})})
    .then(res => res.json())
      .then(data => {
        setprediction(data.pred);
        setprediction2(data.pred2);
        console.log(data)
      });
  });

    return (
<ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>les 17 variables du modèle:</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <View  >
            <TextInput placeholder="laboratory_test_L" mode="outlined" style={{ marginTop: 15 }} type="number-pad" onChangeText={handle1Change} required/>
       <TextInput placeholder="laboratory_test_N" type="number-pad" mode='outlined' style={{ marginTop: 15 }} onChangeText={handle2Change} required/>
       <TextInput placeholder="laboratory_test_ESR" type="number-pad" mode='outlined' style={{ marginTop: 15 }}onChangeText={handle3Change} required />
       <TextInput placeholder="laboratory_test_CRP" type="number-pad" mode='outlined' style={{ marginTop: 15 }} onChangeText={handle4Change} required />
       <TextInput placeholder="laboratory_test_PCT" type="number-pad" mode='outlined' style={{ marginTop: 15 }} onChangeText={handle5Change} required />
       <TextInput placeholder="laboratory_test_CK_MB" type="number-pad" mode='outlined' style={{ marginTop: 15 }} onChangeText={handle6Change}required/>
       <TextInput placeholder="laboratory_test_D_dimer" type="number-pad" mode='outlined' style={{ marginTop: 15 }} onChangeText={handle7Change} required />
       <TextInput placeholder="laboratory_test_ALT" type="number-pad" mode='outlined' style={{ marginTop: 15 }} onChangeText={handle8Change} required />
       <TextInput placeholder="laboratory_test_AST" type="number-pad" mode='outlined' style={{ marginTop: 15 }} onChangeText={handle9Change}required />
       <TextInput placeholder="laboratory_test_ALB" type="number-pad" mode='outlined' style={{ marginTop: 15 }} onChangeText={handle10Change}required />
       <TextInput placeholder="laboratory_test_LDH" type="number-pad" mode='outlined' style={{ marginTop: 15 }} onChangeText={handle11Change} required />
       <TextInput placeholder="Age" type="number-pad" style={{ marginTop: 15 }} mode='outlined' onChangeText={handle12Change} required/>
       <TextInput placeholder="cK" type="number-pad" style={{ marginTop: 15 }} mode='outlined' onChangeText={handle13Change}required />
       <TextInput placeholder="o2%" type="number-pad" style={{ marginTop: 15 }} mode='outlined' onChangeText={handle14Change} required/>
       <View style={styles.row}>
            <Text >
            symptoms_Cough ?</Text>
            <RadioGroup 
            radioButtons={symptoms_Cough1} 
            onPress={onPressRadioButton} 
        />
       
        </View>
        <View style={styles.row}>
            <Text >
            symptoms_Dyspnea ?</Text>
            <RadioGroup 
            radioButtons={symptoms_Dyspnea1} 
            onPress={onPressRadioButton1} 
        />
        </View>
        <View style={styles.row}>
            <Text >
            symptoms_Fatigue ?</Text>
            <RadioGroup 
            radioButtons={symptoms_Fatigue1} 
            onPress={onPressRadioButton2} 
        />
        </View>
        
       <Button title="prediction" mode="contained" style={{ marginTop: 15 }} onPress={get_prediction} >prediction</Button>
       <Button title="prediction2" mode="contained" style={{ marginTop: 15 }} onPress={get_prediction2} >prediction 2</Button>
       <Text> "prediction est "{prediction}</Text>
       <Text> "prediction2 est "{prediction2}</Text>
            </View>
 



            </Animatable.View>
      </View>
      </ScrollView>
    );
};
const styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: "row",
      padding: 10
    },
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2193b0',
    },
      container: {
        flex: 1, 
        backgroundColor: '#009387'
      },
      header: {
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: 20,
          paddingBottom: 50
      },
      footer: {
          flex: 3,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 20,
          paddingVertical: 30
      },
      text_header: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: Platform.OS === 'ios' ? 0 : 39,
        fontSize: 25
    },
      text_footer: {
          color: '#05375a',
          fontSize: 18
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
          marginTop: 50
      },
      signIn: {
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10
      },
      textSign: {
          fontSize: 18,
          fontWeight: 'bold'
      }
    });



export default HabitudesDeVie1;
