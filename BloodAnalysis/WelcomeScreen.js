import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, Platform, TextInput, TouchableOpacity, Image,Dimensions, ScrollView } from 'react-native';
import Card1 from '../../components/Card1';
import Block from '../../components/Block';
import * as Animatable from 'react-native-animatable';
import DateTimePicker from '@react-native-community/datetimepicker';
import API from '../../API';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get("window");
var back = '<';

const WelcomeScreen = ({navigation}) => {

  const moment = require('moment');
    const today = moment();

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  const [modalVisible6, setModalVisible6] = useState(false);
  const [modalVisible7, setModalVisible7] = useState(false);
  const [modalVisible8, setModalVisible8] = useState(false);
  const [modalVisible9, setModalVisible9] = useState(false);
  const [modalVisible10, setModalVisible10] = useState(false);
  const [modalVisible11, setModalVisible11] = useState(false);
  const [modalVisible12, setModalVisible12] = useState(false);

  const [data, setData] = React.useState({
    glucose: 0,
    isValidGlucose: true,
    cReactiveProtein: 0,
    isValidcReactiveProtein: true,
    dDimer: 0,
    isValiddDimer: true,
    ip10: 0,
    isValidip10: true,
    freeAlbumin: 0,
    isValidfreeAlbumin: true,
    leptin: 0,
    isValidleptin: true,
    adiponectin: 0,
    isValidadiponectin: true,
    igf1: 0,
    isValidigf1: true,
    resistin: 0,
    isValidresistin: true,
    opn: 0,
    isValidopn: true,
    orexinA: 0,
    isValidorexinA: true,
    melatonin: 0,
    isValidmelatonin: true,
    creatinine: 0,
    isValidcreatinine: true,
    bloodAnalysisDate: today.format('YYYY-MM-DD h:mm'),
});

const [disable1, setDidable1] = useState(true);
const [disable2, setDidable2] = useState(true);
const [disable3, setDidable3] = useState(true);
const [disable4, setDidable4] = useState(true);
const [disable5, setDidable5] = useState(true);
const [disable6, setDidable6] = useState(true);
const [disable7, setDidable7] = useState(true);
const [disable8, setDidable8] = useState(true);
const [disable9, setDidable9] = useState(true);
const [disable10, setDidable10] = useState(true);
const [disable11, setDidable11] = useState(true);
const [disable12, setDidable12] = useState(true);
const [disable13, setDidable13] = useState(true);

const [opacityColor1, setOpacityColor1] = useState(0.5);
const [opacityColor2, setOpacityColor2] = useState(0.5);
const [opacityColor3, setOpacityColor3] = useState(0.5);
const [opacityColor4, setOpacityColor4] = useState(0.5);
const [opacityColor5, setOpacityColor5] = useState(0.5);
const [opacityColor6, setOpacityColor6] = useState(0.5);
const [opacityColor7, setOpacityColor7] = useState(0.5);
const [opacityColor8, setOpacityColor8] = useState(0.5);
const [opacityColor9, setOpacityColor9] = useState(0.5);
const [opacityColor10, setOpacityColor10] = useState(0.5);
const [opacityColor11, setOpacityColor11] = useState(0.5);
const [opacityColor12, setOpacityColor12] = useState(0.5);
const [opacityColor13, setOpacityColor13] = useState(0.5);

useEffect(() => {
  formatDate(date, time);
  data.bloodAnalysisDate;
  setData({ bloodAnalysisDate: formatDate(date,time) });

 }, [date, time, data.bloodAnalysisDate]);
  const onChange = (event, selectedValue) => {
    setShow(Platform.OS === 'ios');
    if (mode == 'date') {
      const currentDate = selectedValue || new Date();
      setDate(currentDate);
      setMode('time');
      
      setShow(Platform.OS !== 'ios'); // to show the picker again in time mode       
    } else {
      const selectedTime = selectedValue || new Date();
      setTime(selectedTime);
      setShow(Platform.OS === 'ios');
      setMode('date');
    }
    
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const formatDate = (date, time) => {
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)} ${("0" + time.getHours()).slice(-2)}:${("0"+time.getMinutes()).slice(-2)}`;
  };

    const addGlucose = async () => {
        const idUser = await AsyncStorage.getItem("id");

        const glucose = data.glucose;
        const bloodAnalysisDate = data.bloodAnalysisDate;

        await API.saveBloodAnalysis({idUser, bloodAnalysisDate, glucose }, idUser, bloodAnalysisDate);
      };
      const textInputGlucose = (val) => {
        if( val <= 6  && val >= 0.2 ) {
            setData({
            ...data,
            glucose: val,
            isValidGlucose: true,
            });
            setDidable1(false);
            setOpacityColor1(1);
        } else {
            setData({
            ...data,
            glucose: val,
            isValidGlucose: false,
            });
            setDidable1(true);
            setOpacityColor1(0.5);
        }
    }   
      const addcReactiveProtein = async () => {
        const idUser = await AsyncStorage.getItem("id");
        const bloodAnalysisDate = data.bloodAnalysisDate;
        const cReactiveProtein = data.cReactiveProtein;
        await API.saveBloodAnalysis({idUser, bloodAnalysisDate, cReactiveProtein }, idUser, bloodAnalysisDate);
      };

      const textInputcReactiveProtein = (val) => {
        if( val <= 1000  && val > 0 ) {
            setData({
            ...data,
            cReactiveProtein: val,
            isValidcReactiveProtein: true,
            });
            setDidable2(false);
            setOpacityColor2(1);
        } else {
            setData({
            ...data,
            cReactiveProtein: val,
            isValidcReactiveProtein: false,
            });
            setDidable2(true);
            setOpacityColor2(0.5);
        }
    }   

    const adddDimer = async () => {
      const idUser = await AsyncStorage.getItem("id");

      const dDimer = data.dDimer;
      const bloodAnalysisDate = data.bloodAnalysisDate;
      await API.saveBloodAnalysis({idUser, bloodAnalysisDate, dDimer }, idUser, bloodAnalysisDate);
    };
    const textInputdDimer = (val) => {
      if( val <= 5000  && val > 0 ) {
          setData({
          ...data,
          dDimer: val,
          isValiddDimer: true,
          });
          setDidable3(false);
          setOpacityColor3(1);
      } else {
          setData({
          ...data,
          dDimer: val,
          isValiddDimer: false,
          });
          setDidable3(true);
          setOpacityColor3(0.5);
      }
    };

      const addip10 = async () => {
        const idUser = await AsyncStorage.getItem("id");
  
        const ip10 = data.ip10;
        const bloodAnalysisDate = data.bloodAnalysisDate;
        await API.saveBloodAnalysis({idUser, bloodAnalysisDate, ip10 }, idUser, bloodAnalysisDate);
      };
      const textInputip10 = (val) => {
        if( val < 10000  && val > 0 ) {
            setData({
            ...data,
            ip10: val,
            isValidip10: true,
            });
            setDidable4(false);
            setOpacityColor4(1);
        } else {
            setData({
            ...data,
            ip10: val,
            isValidip10: false,
            });
            setDidable4(true);
            setOpacityColor4(0.5);
      }
    }
      const addfreeAlbumin = async () => {
        const idUser = await AsyncStorage.getItem("id");
  
        const freeAlbumin = data.freeAlbumin;
        const bloodAnalysisDate = data.bloodAnalysisDate;
        await API.saveBloodAnalysis({idUser, bloodAnalysisDate, freeAlbumin }, idUser, bloodAnalysisDate);
      };
      const textInputfreeAlbumin = (val) => {
        if( val < 50  && val > 0 ) {
            setData({
            ...data,
            freeAlbumin: val,
            isValidfreeAlbumin: true,
            });
            setDidable5(false);
            setOpacityColor5(1);
        } else {
            setData({
            ...data,
            freeAlbumin: val,
            isValidfreeAlbumin: false,
            });
            setDidable5(true);
            setOpacityColor5(0.5);
        }
        
      };

      const addleptin = async () => {
        const idUser = await AsyncStorage.getItem("id");
  
        const leptin = data.leptin;
        const bloodAnalysisDate = data.bloodAnalysisDate;
        await API.saveBloodAnalysis({idUser, bloodAnalysisDate, leptin }, idUser, bloodAnalysisDate);
      };
      const textInputleptin = (val) => {
        if( val < 400  && val > 0 ) {
            setData({
            ...data,
            leptin: val,
            isValidleptin: true,
            });
            setDidable6(false);
            setOpacityColor6(1);
        } else {
            setData({
            ...data,
            leptin: val,
            isValidleptin: false,
            });
            setDidable6(true);
            setOpacityColor6(0.5);
        }
      };

      const addadiponectin = async () => {
        const idUser = await AsyncStorage.getItem("id");
  
        const adiponectin = data.adiponectin;
        const bloodAnalysisDate = data.bloodAnalysisDate;
        await API.saveBloodAnalysis({idUser, bloodAnalysisDate, adiponectin }, idUser, bloodAnalysisDate);
      };
      const textInputadiponectin = (val) => {
        if( val < 1000  && val > 0 ) {
            setData({
            ...data,
            adiponectin: val,
            isValidadiponectin: true,
            });
            setDidable7(false);
            setOpacityColor7(1);
        } else {
            setData({
            ...data,
            adiponectin: val,
            isValidadiponectin: false,
            });
            setDidable7(true);
            setOpacityColor7(0.5);
        }
      };

      const addigf1 = async () => {
        const idUser = await AsyncStorage.getItem("id");
  
        const igf1 = data.igf1;
        const bloodAnalysisDate = data.bloodAnalysisDate;
        await API.saveBloodAnalysis({idUser, bloodAnalysisDate, igf1 }, idUser, bloodAnalysisDate);
      };
      const textInputigf1 = (val) => {
        if( val < 1000  && val > 0 ) {
            setData({
            ...data,
            igf1: val,
            isValidigf1: true,
            });
            setDidable8(false);
            setOpacityColor8(1);
        } else {
            setData({
            ...data,
            igf1: val,
            isValidigf1: false,
            });
            setDidable8(true);
            setOpacityColor8(0.5);
        }
      };

      const addresistin = async () => {
        const idUser = await AsyncStorage.getItem("id");
  
        const resistin = data.resistin;
        const bloodAnalysisDate = data.bloodAnalysisDate;
        await API.saveBloodAnalysis({idUser, bloodAnalysisDate, resistin }, idUser, bloodAnalysisDate);
      };
      const textInputresistin = (val) => {
        if( val < 100  && val > 0 ) {
            setData({
            ...data,
            resistin: val,
            isValidresistin: true,
            });
            setDidable9(false);
            setOpacityColor9(1);
        } else {
            setData({
            ...data,
            resistin: val,
            isValidresistin: false,
            });
            setDidable9(true);
            setOpacityColor9(0.5);
        }
      };

      const addopn = async () => {
        const idUser = await AsyncStorage.getItem("id");
  
        const opn = data.opn;
        const bloodAnalysisDate = data.bloodAnalysisDate;
        await API.saveBloodAnalysis({idUser, bloodAnalysisDate, opn }, idUser, bloodAnalysisDate);
      };
      const textInputopn = (val) => {
        if( val < 5  && val > 0 ) {
            setData({
            ...data,
            opn: val,
            isValidopn: true,
            });
            setDidable10(false);
            setOpacityColor10(1);
        } else {
            setData({
            ...data,
            opn: val,
            isValidopn: false,
            });
            setDidable10(true);
            setOpacityColor10(0.5);
        }
      };

      const addorexinA = async () => {
        const idUser = await AsyncStorage.getItem("id");
  
        const orexinA = data.orexinA;
        const bloodAnalysisDate = data.bloodAnalysisDate;
        await API.saveBloodAnalysis({idUser, bloodAnalysisDate, orexinA }, idUser, bloodAnalysisDate);
      };
      const textInputorexinA = (val) => {
        if( val < 500  && val > 0 ) {
            setData({
            ...data,
            orexinA: val,
            isValidorexinA: true,
            });
            setDidable11(false);
            setOpacityColor11(1);
        } else {
            setData({
            ...data,
            orexinA: val,
            isValidorexinA: false,
            });
            setDidable11(true);
            setOpacityColor11(0.5);
        }
      };

      const addmelatonin = async () => {
        const idUser = await AsyncStorage.getItem("id");
  
        const melatonin = data.melatonin;
        const bloodAnalysisDate = data.bloodAnalysisDate;
        await API.saveBloodAnalysis({idUser, bloodAnalysisDate, melatonin }, idUser, bloodAnalysisDate);
      };
      const textInputmelatonin = (val) => {
        if( val < 1000  && val > 0 ) {
            setData({
            ...data,
            melatonin: val,
            isValidmelatonin: true,
            });
            setDidable12(false);
            setOpacityColor12(1);
        } else {
            setData({
            ...data,
            melatonin: val,
            isValidmelatonin: false,
            });
            setDidable12(true);
            setOpacityColor12(0.5);
        }
      };

      const addcreatinine = async () => {
        const idUser = await AsyncStorage.getItem("id");
  
        const creatinine = data.creatinine;
        const bloodAnalysisDate = data.bloodAnalysisDate;
        await API.saveBloodAnalysis({idUser, bloodAnalysisDate, creatinine }, idUser, bloodAnalysisDate);
      };
      const textInputcreatinine = (val) => {
        if( val < 300  && val > 0 ) {
            setData({
            ...data,
            creatinine: val,
            isValidcreatinine: true,
            });
            setDidable13(false);
            setOpacityColor13(1);
        } else {
            setData({
            ...data,
            creatinine: val,
            isValidcreatinine: false,
            });
            setDidable13(true);
            setOpacityColor13(0.5);
        }
      };
   

const glucoseAlert = () => {
        Alert.alert(
            'What is glucose ?',
            'Glucose comes from the Greek word for "sweet." It is a type of sugar you get from foods you eat, and your body uses it for energy. As it travels through your bloodstream to your cells, it is called blood glucose or blood sugar.',
            [
              
              {text: 'OK' },
            ],
            {cancelable: false},
          );
    }

    const cReactiveProteinAlert = () => {
        Alert.alert(
            'What is C-Reactive Protein ?',
            'C-reactive protein (CRP) is a protein made by the liver. CRP levels in the blood increase when there is a condition causing inflammation somewhere in the body. A CRP test measures the amount of CRP in the blood to detect inflammation due to acute conditions or to monitor the severity of disease in chronic conditions.',
            [
              {text: 'OK' },
            ],
            {cancelable: false},
          );
    }

    const dDimerAlert = () => {
        Alert.alert(
            'What is D-Dimer ?',
            'D-dimer is one of the protein fragments produced when a blood clot gets dissolved in the body. It is normally undetectable or detectable at a very low level unless the body is forming and breaking down blood clots. Then, its level in the blood can significantly rise. This test detects D-dimer in the blood.',
            [
              {text: 'OK' },
            ],
            {cancelable: false},
          );
    }

    const ip10Alert = () => {
      Alert.alert(
          'What is IP-10 ?',
          'not yet',
          [
            {text: 'OK' },
          ],
          {cancelable: false},
        );
    }

    const albuminAlert = () => {
      Alert.alert(
          'What is Albimin ?',
          'Albumin is a protein made by the liver. It makes up about 60% of the total protein in the blood and plays many roles. This test measures the level of albumin in the blood. Levels of albumin may decrease, to a greater or lesser degree, when conditions interfere with its production by the liver, increase protein breakdown, increase protein loss via the kidneys, and/or expand the volume of plasma, the liquid portion of blood (diluting the blood). Important causes of low blood albumin include Severe liver disease and Kidney disease',
          [
            {text: 'OK' },
          ],
          {cancelable: false},
        );
    }

    const leptinAlert = () => {
      Alert.alert(
          'What is Leptin ?',
          'Leptin, a hormone released from the fat cells located in adipose tissues, sends signals to the hypothalamus in the brain. This particular hormone helps regulate and alter long-term food intake and energy the body burns throughout the day, not just from one meal to the next.',
          [
            {text: 'OK' },
          ],
          {cancelable: false},
        );
    }

    const adiponectinAlert = () => {
      Alert.alert(
          'What is Adiponectin ?',
          'A protein hormone produced and secreted exclusively by adipocytes (fat cells) that regulates the metabolism of lipids and glucose. Adiponectin influences the body response to insulin.High blood levels of adiponectin are associated with a reduced risk of heart attack. Low levels of adiponectin are found in people who are obese (and who are at increased risk of a heart attack). ',
          [
            {text: 'OK' },
          ],
          {cancelable: false},
        );
    }

    const igf1Alert = () => {
      Alert.alert(
          'What is IGF-1 ?',
          'This test measures the amount of insulin-like growth factor-1 (IGF-1) in your blood. IGF-1 is a hormone found naturally in your blood. Its main job is to manage the effects of growth hormone (GH) in your body. Normal IGF-1 and GH functions include tissue and bone growth. You may need this test if your healthcare provider believes that you have or are at risk for a GH-related disease, including Acromegaly and Laron syndrome.',
          [
            {text: 'OK' },
          ],
          {cancelable: false},
        );
    }

    const resistinAlert = () => {
      Alert.alert(
        'What is Resistin ?',
        'Resistin, a plasma protein, induces insulin resistance in rodents. Recent reports suggest that circulating levels of resistin are elevated in obese and insulin-resistant rodents and humans. Whereas rodent resistin is made in adipocytes, macrophages are a major source of human resistin. Given the convergence of adipocyte and macrophage function, resistin may provide unique insight into links between obesity, inflammation, and atherosclerosis in humans.',
        [
          {text: 'OK' },
        ],
        {cancelable: false},
      );
    }

    const opnAlert = () => {
      Alert.alert(
        'What is OPN ?',
        'Osteopontin (OPN) is a versatile protein that acts on various receptors which are associated with different signalling pathways implicated in cancer. OPN mediates critical processes for cancer progression such as immune response, cell adhesion and migration, and tumorigenesis.',
        [
          {text: 'OK' },
        ],
        {cancelable: false},
      );
    }

    const orexinaAlert = () => {
      Alert.alert(
        'What is Orexin-A ?',
        'Orexin-A, also known as hypocretin-1, is a naturally occurring neuropeptide and orexin isoform. The orexinergic nucleus in the lateral hypothalamus is the primary orexin projection system in the brain. Orexins strongly excite various brain nuclei (neurons) to affect an organism wakefulness by affecting their dopamine, norepinephrine, histamine and acetylcholine systems. These systems work together to stabilize the organism sleep cycles. ',
        [
          {text: 'OK' },
        ],
        {cancelable: false},
      );
    }

    const melatoninAlert = () => {
      Alert.alert(
        'What is Melatonin ?',
        ' Melatonin is a hormone made by the pineal gland. That is a pea-sized gland found just above the middle of your brain. It helps your body know when it is time to sleep and wake up.Normally, your body makes more melatonin at night. Levels usually start to go up in the evening once the sun sets. They drop in the morning when the sun goes up. The amount of light you get each day -- plus your own body clock -- set how much your body makes.',
        [
          {text: 'OK' },
        ],
        {cancelable: false},
      );
    }

    const creatinineAlert = () => {
      Alert.alert(
        'What is Creatine ?',
        'A creatinine test reveals important information about your kidneys. Creatinine is a chemical waste product that is produced by your muscle metabolism and to a smaller extent by eating meat. Healthy kidneys filter creatinine and other waste products from your blood. The filtered waste products leave your body in your urine. If your kidneys are not functioning properly, an increased level of creatinine may accumulate in your blood. ',
        [
          {text: 'OK' },
        ],
        {cancelable: false},
      );
    }

   
           

  return (
    <ScrollView style={styles.container}>

    <View style={styles.header}>
          <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Add my blood analysis</Text>
          </View>

      <View style={styles.containerTwo}>
        <View style={styles.containerTab}>
        <TouchableOpacity style={[styles.tab, {
                        backgroundColor: '#56bed1',
                    }]}
          onPress={() => {navigation.navigate('WelcomeScreen')}}>
            <Text style={[styles.tabText, {
                        color: '#fff'
                    }]}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}
            onPress={() => {navigation.navigate('BloodAnalysisHistory')}}>
            <Text style={styles.tabText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}
            onPress={() => {navigation.navigate('ChartBloodAnalysis')}}>
            <Text style={styles.tabText}>Chart</Text>
          </TouchableOpacity>
        </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text_footer}>Glucose (g/L)</Text>
            <TextInput 
            style={styles.input}
                    placeholder="Glucose..."
                    autoCapitalize="none"
                    onChangeText={(val) => textInputGlucose(val)}
                />
                
            { data.isValidGlucose ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid value.</Text>
            </Animatable.View>
            }
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196', opacity:opacityColor1 }} 
              disabled= {disable1}
              onPress={() => {
                addGlucose(),
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
            <Text style={styles.text_footer}>C-Reactive protein (mg/l)</Text>
            <TextInput 
                    placeholder="cReactiveProtein"
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputcReactiveProtein(val)}
                />
                
            { data.isValidcReactiveProtein ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid value.</Text>
            </Animatable.View>
            }
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196', opacity:opacityColor2 }}
              onPress={() => {
                addcReactiveProtein(),
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text_footer}>D-Dimer (ug/L)</Text>
            <TextInput 
                    placeholder="dDimer"
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputdDimer(val)}
                />
                
            { data.isValiddDimer ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid value.</Text>
            </Animatable.View>
            }
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196', opacity:opacityColor3 }}
              onPress={() => {
                adddDimer(),
                setModalVisible2(!modalVisible2);
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#d36a68' }}
              onPress={() => {
                setModalVisible2(!modalVisible2);
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
        visible={modalVisible3}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text_footer}>IP-10 (pg/mL)</Text>
            <TextInput 
                    placeholder="ip10"
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputip10(val)}
                />
                
            { data.isValidip10 ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid value.</Text>
            </Animatable.View>
            }
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196', opacity:opacityColor4 }}
              onPress={() => {
                addip10(),
                setModalVisible3(!modalVisible3);
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#d36a68' }}
              onPress={() => {
                setModalVisible3(!modalVisible3);
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
        visible={modalVisible4}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text_footer}>Free Albumin (g/dL)</Text>
            <TextInput 
                    placeholder="freeAlbumin..."
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputfreeAlbumin(val)}
                />
                
            { data.isValidfreeAlbumin ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid value.</Text>
            </Animatable.View>
            }
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196', opacity:opacityColor5 }}
              onPress={() => {
                addfreeAlbumin(),
                setModalVisible4(!modalVisible4);
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#d36a68' }}
              onPress={() => {
                setModalVisible4(!modalVisible4);
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
        visible={modalVisible5}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text_footer}>Leptin (ng/mL)</Text>
            <TextInput 
                    placeholder="leptin..."
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputleptin(val)}
                />
                
            { data.isValidleptin ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid value.</Text>
            </Animatable.View>
            }
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196', opacity:opacityColor6 }}
              onPress={() => {
                addleptin(),
                setModalVisible5(!modalVisible5);
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#d36a68' }}
              onPress={() => {
                setModalVisible5(!modalVisible5);
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
        visible={modalVisible6}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text_footer}>Adiponectin (ug/mL)</Text>
            <TextInput 
                    placeholder="adiponectin..."
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputadiponectin(val)}
                />
                
            { data.isValidadiponectin ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid value.</Text>
            </Animatable.View>
            }
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196', opacity:opacityColor7 }}
              onPress={() => {
                addadiponectin(),
                setModalVisible6(!modalVisible6);
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#d36a68' }}
              onPress={() => {
                setModalVisible6(!modalVisible6);
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
        visible={modalVisible7}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text_footer}>IGF-1 (ug/L)</Text>
            <TextInput 
                    placeholder="igf1..."
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputigf1(val)}
                />
                
            { data.isValidigf1 ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid value.</Text>
            </Animatable.View>
            }
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196', opacity:opacityColor8 }}
              onPress={() => {
                addigf1(),
                setModalVisible7(!modalVisible7);
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#d36a68' }}
              onPress={() => {
                setModalVisible7(!modalVisible7);
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
        visible={modalVisible8}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text_footer}>Resistin (ng/mL)</Text>
            <TextInput 
                    placeholder="igf1..."
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputresistin(val)}
                />
                
            { data.isValidresistin ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid value.</Text>
            </Animatable.View>
            }
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196', opacity:opacityColor9 }}
              onPress={() => {
                addresistin(),
                setModalVisible8(!modalVisible8);
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#d36a68' }}
              onPress={() => {
                setModalVisible8(!modalVisible8);
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
        visible={modalVisible9}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text_footer}>OPN (ng/ml)</Text>
            <TextInput 
                    placeholder="OPN..."
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputopn(val)}
                />
                
            { data.isValidopn ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid value.</Text>
            </Animatable.View>
            }
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196', opacity:opacityColor10 }}
              onPress={() => {
                addopn(),
                setModalVisible9(!modalVisible9);
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#d36a68' }}
              onPress={() => {
                setModalVisible9(!modalVisible9);
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
        visible={modalVisible10}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text_footer}>Orexin-A (pg/ml)</Text>
            <TextInput 
                    placeholder="Orexin-A..."
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputorexinA(val)}
                />
                
            { data.isValidorexinA ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid value.</Text>
            </Animatable.View>
            }
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196' , opacity:opacityColor11}}
              onPress={() => {
                addorexinA(),
                setModalVisible10(!modalVisible10);
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#d36a68' }}
              onPress={() => {
                setModalVisible10(!modalVisible10);
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
        visible={modalVisible12}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text_footer}>Creatinine (μmol/L)</Text>
            <TextInput 
                    placeholder="Creatinine..."
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputcreatinine(val)}
                />
                
            { data.isValidcreatinine ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid value.</Text>
            </Animatable.View>
            }
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196', opacity:opacityColor13 }}
              onPress={() => {
                addcreatinine(),
                setModalVisible12(!modalVisible12);
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#d36a68' }}
              onPress={() => {
                setModalVisible12(!modalVisible12);
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
        visible={modalVisible11}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text_footer}>Melatonin</Text>
            <TextInput 
                    placeholder="Melatonin..."
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputmelatonin(val)}
                />
                
            { data.isValidmelatonin ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid value.</Text>
            </Animatable.View>
            }
            <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3cc196', opacity:opacityColor12 }}
              onPress={() => {
                addmelatonin(),
                setModalVisible11(!modalVisible11);
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#d36a68' }}
              onPress={() => {
                setModalVisible11(!modalVisible11);
              }}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

      <Text style={styles.dateText}>{moment(time).format('LLLL')}</Text>

      <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                    onPress={() => navigation.navigate("BloodAnalysisForm")}
                    style={[styles.signIn, {
                        backgroundColor: '#56BED1',
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Add all</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={showDatepicker}
                    style={[styles.signIn, {
                        backgroundColor: '#EFBE45',
                        marginLeft: width * 0.15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Pick a date</Text>
                </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
        
 <View style={{flexDirection: 'row'}}>
 <Card1 style={styles.containerThree}>
 
              <Block row space="between" style={{ marginBottom: 16 }}>
                           
                                <Image source={require('../../assets/glucose.png')} style={styles.icon}/>
                                <TouchableOpacity
                                onPress={() => glucoseAlert()}
                            >
                              <Text spacing={0.5} caption style={styles.points}>...</Text>
                              </TouchableOpacity>
                                </Block>

                            <Block row space="between" style={{ marginBottom: 16 }}>
                            <TouchableOpacity
                                onPress={() => {
                                  setModalVisible(true);
                                }}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.iconadd}/>
                            </TouchableOpacity>
                                <Text spacing={0.5} caption style={styles.text_footer}>glucose</Text>
                       
                            </Block>
                        </Card1>
                        <Card1 style={styles.containerThree}>
                        <Block row space="between" style={{ marginBottom: 16 }}>
                            
                                <Image source={require('../../assets/creactive.png')} style={styles.icon}/>
                                <TouchableOpacity
                                onPress={() => cReactiveProteinAlert()}
                            >
                              <Text spacing={0.5} caption style={styles.points}>...</Text>
                            </TouchableOpacity>
                              </Block>  

                            <Block row space="between" style={{ marginBottom: 16 }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible1(true)}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.iconadd}/>
                            </TouchableOpacity>
                                <Text spacing={0.5} caption style={styles.text_footer}>C-Reactive {"\n"} Protein</Text>
                       
                            </Block>
                        </Card1>
 </View>
 <View style={{flexDirection: 'row'}}>
 <Card1 style={styles.containerThree}>
                            
                            <Block row space="between" style={{ marginBottom: 16 }}>
                            
                                <Image source={require('../../assets/dimer.png')} style={styles.icon}/>
                            <TouchableOpacity
                                onPress={() => dDimerAlert()}
                            >
                                <Text spacing={0.5} caption style={styles.points}>...</Text>
                                </TouchableOpacity>
                            </Block>

                            <Block row space="between" style={{ marginBottom: 16 }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible2(true)}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.iconadd}/>
                            </TouchableOpacity>
                                <Text spacing={0.5} caption style={styles.text_footer}>D-Dimer</Text>
                       
                            </Block>
                        </Card1>
                        <Card1 style={styles.containerThree}>
                        <Block row space="between" style={{ marginBottom: 16 }}>
                            
                                <Image source={require('../../assets/ip10.png')} style={styles.icon}/>
                                <TouchableOpacity
                                onPress={() => ip10Alert()}
                            >
                              <Text spacing={0.5} caption style={styles.points}>...</Text>
                            </TouchableOpacity>
                                </Block>

                            <Block row space="between" style={{ marginBottom: 16 }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible3(true)}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.iconadd}/>
                            </TouchableOpacity>
                                <Text spacing={0.5} caption style={styles.text_footer}>IP-10</Text>
                       
                            </Block>
                        </Card1>
 </View>
 <View style={{flexDirection: 'row'}}>
 <Card1 style={styles.containerThree}>
 <Block row space="between" style={{ marginBottom: 16 }}>
                            
                                <Image source={require('../../assets/albumin.png')} style={styles.icon}/>
                                <TouchableOpacity
                                onPress={() => albuminAlert()}
                            >
                               <Text spacing={0.5} caption style={styles.points}>...</Text>
                            </TouchableOpacity>
                                </Block>

                            <Block row space="between" style={{ marginBottom: 16 }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible4(true)}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.iconadd}/>
                            </TouchableOpacity>
                                
                                <Text spacing={0.5} caption style={styles.text_footer}>Free {"\n"} Albumin</Text>
                       
                            </Block>
                        </Card1>
                        <Card1 style={styles.containerThree}>
                        <Block row space="between" style={{ marginBottom: 16 }}>
                            
                                <Image source={require('../../assets/leptin.png')} style={styles.icon}/>
                                <TouchableOpacity
                                onPress={() => leptinAlert()}
                            >
                              <Text spacing={0.5} caption style={styles.points}>...</Text>
                            </TouchableOpacity>
                            </Block>    

                            <Block row space="between" style={{ marginBottom: 16 }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible5(true)}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.iconadd}/>
                            </TouchableOpacity>
                                <Text spacing={0.5} caption style={styles.text_footer}>Leptin</Text>
                       
                            </Block>
                        </Card1>
 </View>
 <View style={{flexDirection: 'row'}}>
 <Card1 style={styles.containerThree}>
 <Block row space="between" style={{ marginBottom: 16 }}>
                            
                                <Image source={require('../../assets/adiponectin.png')} style={styles.icon}/>
                                <TouchableOpacity
                                onPress={() => adiponectinAlert()}
                            >
                              <Text spacing={0.5} caption style={styles.points}>...</Text>
                            </TouchableOpacity>
                              </Block>  

                            <Block row space="between" style={{ marginBottom: 16 }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible6(true)}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.iconadd}/>
                            </TouchableOpacity>
                                <Text spacing={0.5} caption style={styles.text_footer}>Adiponectin</Text>
                       
                            </Block>
                        </Card1>
                        <Card1 style={styles.containerThree}>
                        <Block row space="between" style={{ marginBottom: 16 }}>
                            
                                <Image source={require('../../assets/igf1.png')} style={styles.icon}/>
                                <TouchableOpacity
                                onPress={() => igf1Alert()}
                            >
                              <Text spacing={0.5} caption style={styles.points}>...</Text>
                            </TouchableOpacity>
                              </Block>  

                            <Block row space="between" style={{ marginBottom: 16 }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible7(true)}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.iconadd}/>
                            </TouchableOpacity>
                                <Text spacing={0.5} caption style={styles.text_footer}>IGF-1</Text>
                       
                            </Block>
                        </Card1>
 </View>
 <View style={{flexDirection: 'row'}}>
 <Card1 style={styles.containerThree}>
 <Block row space="between" style={{ marginBottom: 16 }}>
                            
                                <Image source={require('../../assets/igf1.png')} style={styles.icon}/>
                                <TouchableOpacity
                                onPress={() => resistinAlert()}
                            >
                              <Text spacing={0.5} caption style={styles.points}>...</Text>
                            </TouchableOpacity>
                              </Block>  

                            <Block row space="between" style={{ marginBottom: 16 }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible8(true)}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.iconadd}/>
                            </TouchableOpacity>
                                <Text spacing={0.5} caption style={styles.text_footer}>Resistin</Text>
                       
                            </Block>
                        </Card1>
                    
                        <Card1 style={styles.containerThree}>
                        <Block row space="between" style={{ marginBottom: 16 }}>
                            
                                <Image source={require('../../assets/opn.jpeg')} style={styles.littleIcon}/>
                                <TouchableOpacity
                                onPress={() => opnAlert()}
                            >
                              <Text spacing={0.5} caption style={styles.points}>...</Text>
                            </TouchableOpacity>
                          </Block>      

                            <Block row space="between" style={{ marginBottom: 16 }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible9(true)}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.iconadd}/>
                            </TouchableOpacity>
                                <Text spacing={0.5} caption style={styles.text_footer}>OPN</Text>
                       
                            </Block>
                        </Card1>
 </View>
 <View style={{flexDirection: 'row'}}>
 <Card1 style={styles.containerThree}>
 <Block row space="between" style={{ marginBottom: 16 }}>
                           
                                <Image source={require('../../assets/orexinA.png')} style={styles.littleIcon}/>
                                <TouchableOpacity
                                onPress={() => orexinaAlert()}
                            >
                              <Text spacing={0.5} caption style={styles.points}>...</Text>
                            </TouchableOpacity>
                                </Block>

                            <Block row space="between" style={{ marginBottom: 16 }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible10(true)}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.iconadd}/>
                            </TouchableOpacity>
                                <Text spacing={0.5} caption style={styles.text_footer}>Orexin-A</Text>
                       
                            </Block>
                        </Card1>
                        <Card1 style={styles.containerThree}>
                        <Block row space="between" style={{ marginBottom: 16 }}>
                            
                                <Image source={require('../../assets/melatonin.png')} style={styles.icon1}/>
                                <TouchableOpacity
                                onPress={() => melatoninAlert()}
                            >
                              <Text spacing={0.5} caption style={styles.points}>...</Text>
                            </TouchableOpacity>
                              </Block>  

                            <Block row space="between" style={{ marginBottom: 16 }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible11(true)}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.iconadd}/>
                            </TouchableOpacity>
                                <Text spacing={0.5} caption style={styles.text_footer}>Melatonin</Text>
                       
                            </Block>
                        </Card1>
 </View>
 <View style={{flexDirection: 'row'}}>
 <Card1 style={styles.containerThree}>
 <Block row space="between" style={{ marginBottom: 16 }}>
                           
                                <Image source={require('../../assets/creatinine.png')} style={styles.icon}/>
                                <TouchableOpacity
                                onPress={() => creatinineAlert()}
                            >
<Text spacing={0.5} caption style={styles.points}>...</Text>
                            </TouchableOpacity>
                               </Block> 

                            <Block row space="between" style={{ marginBottom: 16 }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible12(true)}
                            >
                              <Image source={require('../../assets/addgray.png')} style={styles.iconadd}/>
                            </TouchableOpacity>
                                
                                <Text spacing={0.5} caption style={styles.text_footer}>Creatinine</Text>
                                
                            </Block>
                            

                        </Card1>
                        <Card1 style={styles.containerfour}>
                           

                        </Card1>
 </View>

                       
                        </View>
    </ScrollView>
  );
}

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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
 
  },
  modalView: {
    height: 300,
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    height: height * 0.05,
    width: width * 0.25,
    marginLeft: width * 0.03,
    marginTop: height * 0.05,
    alignContent: 'center',
    alignItems: 'center'
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
points: {
  color: '#05375a',
  fontSize: 20,
  fontWeight: 'bold'
},
containerThree: {
  backgroundColor: '#ffff',
  flex: 1,
  height: height * 0.27,
  width: width * 0.24,
  marginTop: height * 0.03,
  marginLeft: width * 0.03,
  marginRight: width * 0.03,
  alignSelf: "center",
  borderLeftWidth: 8,
  borderLeftColor: '#5b76d8',
  borderWidth: 2,
  borderBottomColor: '#d4d4d4',
  borderTopColor: '#d4d4d4',
  borderRightColor: '#d4d4d4'
},
containerfour: {
  backgroundColor: '#ffff',
  flex: 1,
  height: height * 0.25,
  width: width * 0.2,
  marginTop: height * 0.03,
  marginLeft: width * 0.05,
  marginRight: width * 0.05,
  alignSelf: "center",
 
},
icon: {
  width: width * 0.1,
  height: height * 0.062,
},
iconadd: {
  width: width * 0.07,
  height: height * 0.04,
},
icon1: {
width: width * 0.25,
height: height * 0.067,
},
littleIcon: {
width: width * 0.25,
height: height * 0.067
},
errorMsg: {
  color: '#FF0000',
  fontSize: 14,
},
input: {
  height: height * 0.07,
  width: width * 0.5,
  marginTop: height * 0.05,
  marginBottom: height * 0.05,
  paddingLeft: 10,
  color: 'black',
  borderBottomWidth: 2,
  borderBottomColor: '#56bed1',
  
},

signIn: {
  width: width * 0.3,
  height: height * 0.07,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  marginLeft: width * 0.08,
  marginTop: height * 0.03,
  marginBottom: height * 0.02
},
textSign: {
  fontSize: 18,
  fontWeight: 'bold'
},
dateText:{
  fontSize: 18,
  fontWeight: 'bold',
  color: '#3a3c4e',
  marginTop: height * 0.02,
  alignSelf: 'center'
}
});

export default WelcomeScreen;