import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, Alert, Dimensions, TouchableOpacity, ScrollView, Modal, TouchableHighlight } from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from 'react-native-chart-kit';
import Card1 from '../../components/Card1';
import Block from '../../components/Block';
import API from '../../API';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get("window");
var back = '<';
var idUser;

const ChartBloodAnalysis = ({navigation}) => {
  

  const moment = require('moment');
    const today = moment();
    const [bloodanalysis, setBloodanalysis] = useState([]);
    const [data0, setData0] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);
    const [data6, setData6] = useState([]);
    const [data7, setData7] = useState([]);
    const [data8, setData8] = useState([]);
    const [data9, setData9] = useState([]);
    const [data10, setData10] = useState([]);
    const [data11, setData11] = useState([]);
    const [data12, setData12] = useState([]);
    const [date0, setDate0] = useState([]);
    const [date1, setDate1] = useState([]);
    const [date2, setDate2] = useState([]);
    const [date3, setDate3] = useState([]);
    const [date4, setDate4] = useState([]);
    const [date5, setDate5] = useState([]);
    const [date6, setDate6] = useState([]);
    const [date7, setDate7] = useState([]);
    const [date8, setDate8] = useState([]);
    const [date9, setDate9] = useState([]);
    const [date10, setDate10] = useState([]);
    const [date11, setDate11] = useState([]);
    const [date12, setDate12] = useState([]);
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
    const [barColor, setbarColor] = useState("");
    const [barColor1, setbarColor1] = useState("");


    const retrieveBloodanalysis = async () => {
    
      idUser = await AsyncStorage.getItem("id");
      API.getBloodAnalysis(idUser)
      .then(response => {
      setBloodanalysis(response.data);
      
      })
      .catch(e => {
      console.log(e.message);
    });
    
  };

 
  

  useEffect(() => {
    
    retrieveBloodanalysis();
    let temp = [];
    let temp1 = [];
    let temp2 = [];
    let temp3 = [];
    let temp4 = [];
    let temp5 = [];
    let temp6 = [];
    let temp7 = [];
    let temp8 = [];
    let temp9 = [];
    let temp10 = [];
    let temp11 = [];
    let temp12 = [];
    let temp13 = [];
    let temp14 = [];
    let temp15 = [];
    let temp16 = [];
    let temp17 = [];
    let temp18 = [];
    let temp19 = [];
    let temp20 = [];
    let temp21 = [];
    let temp22 = [];
    let temp23 = [];
    let temp24 = [];
    let temp25 = [];

    
      for (var i = 0; i < bloodanalysis.length; i++) {
        if (bloodanalysis[i].glucose > 0 ) {
          
          temp.push(bloodanalysis[i].glucose);
          temp13.push(bloodanalysis[i].bloodAnalysisDate);
          setData0(temp);
          setDate0(temp13);
          
        }
        if (bloodanalysis[i].cReactiveProtein > 0 ) {
          temp1.push(bloodanalysis[i].cReactiveProtein);
          temp14.push(bloodanalysis[i].bloodAnalysisDate);
          setData1(temp1);
          setDate1(temp14);
        }
        if (bloodanalysis[i].dDimer > 0 ) {
          temp2.push(bloodanalysis[i].dDimer);
          temp15.push(bloodanalysis[i].bloodAnalysisDate);
          setData2(temp2);
          setDate2(temp15);
        }
        if (bloodanalysis[i].ip10 > 0 ) {
          temp3.push(bloodanalysis[i].ip10);
          temp16.push(bloodanalysis[i].bloodAnalysisDate);
          setData3(temp3);
          setDate3(temp16);
        }
        if (bloodanalysis[i].freeAlbumin > 0 ) {
          temp4.push(bloodanalysis[i].freeAlbumin);
          temp17.push(bloodanalysis[i].bloodAnalysisDate);
          setData4(temp4);
          setDate4(temp17);
        }
        if (bloodanalysis[i].leptin > 0 ) {
          temp5.push(bloodanalysis[i].leptin);
          temp18.push(bloodanalysis[i].bloodAnalysisDate);
          setData5(temp5);
          setDate5(temp18);
        }
        if (bloodanalysis[i].adiponectin > 0 ) {
          temp6.push(bloodanalysis[i].adiponectin);
          temp19.push(bloodanalysis[i].bloodAnalysisDate);
          setData6(temp6);
          setDate6(temp19);
        }
        if (bloodanalysis[i].igf1 > 0 ) {
          temp7.push(bloodanalysis[i].igf1);
          temp20.push(bloodanalysis[i].bloodAnalysisDate);
          setData7(temp7);
          setDate7(temp20);
        }
        if (bloodanalysis[i].resistin > 0 ) {
          temp8.push(bloodanalysis[i].resistin);
          temp21.push(bloodanalysis[i].bloodAnalysisDate);
          setData8(temp8);
          setDate8(temp21);
        }
        if (bloodanalysis[i].opn > 0 ) {
          temp9.push(bloodanalysis[i].opn);
          temp22.push(bloodanalysis[i].bloodAnalysisDate);
          setData9(temp9);
          setDate9(temp22);
        }
        if (bloodanalysis[i].orexinA > 0 ) {
          temp10.push(bloodanalysis[i].orexinA);
          temp23.push(bloodanalysis[i].bloodAnalysisDate);
          setData10(temp10);
          setDate10(temp23);
        }
        if (bloodanalysis[i].melatonin > 0 ) {
          temp11.push(bloodanalysis[i].melatonin);
          temp24.push(bloodanalysis[i].bloodAnalysisDate);
          setData11(temp11);
          setDate11(temp24);
        }
        if (bloodanalysis[i].creatinine > 0 ) {
          temp12.push(bloodanalysis[i].creatinine);
          temp25.push(bloodanalysis[i].bloodAnalysisDate);
          setData12(temp12);
          setDate12(temp25);
        }
        };
        for (var i =0 ; i< data0.length; i++) {
          if (data0[i] >= 0.2 && data0[i] <= 0.7){
            setbarColor1('blue')
          }
          else if (data0[i] >= 0.7 && data0[i] <= 1.1){
            setbarColor('green')
          }
          else if (data0[i] > 1.1){
            setbarColor('red')
          }
        }
  }, [idUser,bloodanalysis]);
 
  const glucoseAlert = () => {
    Alert.alert(
        'What is glucose ?',
        'Glucose comes from the Greek word for "sweet." It is a type of sugar you get from foods you eat, and your body uses it for energy. As it travels through your bloodstream to your cells, it is called blood glucose or blood sugar.',
        [
          
          {text: 'OK'},
        ],
        {cancelable: false},
      );
}

const cReactiveProteinAlert = () => {
    Alert.alert(
        'What is C-Reactive Protein ?',
        'C-reactive protein (CRP) is a protein made by the liver. CRP levels in the blood increase when there is a condition causing inflammation somewhere in the body. A CRP test measures the amount of CRP in the blood to detect inflammation due to acute conditions or to monitor the severity of disease in chronic conditions.',
        [
          {text: 'OK'},
        ],
        {cancelable: false},
      );
}

const dDimerAlert = () => {
    Alert.alert(
        'What is D-Dimer ?',
        'D-dimer is one of the protein fragments produced when a blood clot gets dissolved in the body. It is normally undetectable or detectable at a very low level unless the body is forming and breaking down blood clots. Then, its level in the blood can significantly rise. This test detects D-dimer in the blood.',
        [
          {text: 'OK'},
        ],
        {cancelable: false},
      );
}

const ip10Alert = () => {
  Alert.alert(
      'What is IP-10 ?',
      'not yet',
      [
        {text: 'OK'},
      ],
      {cancelable: false},
    );
}

const albuminAlert = () => {
  Alert.alert(
      'What is Albimin ?',
      'Albumin is a protein made by the liver. It makes up about 60% of the total protein in the blood and plays many roles. This test measures the level of albumin in the blood. Levels of albumin may decrease, to a greater or lesser degree, when conditions interfere with its production by the liver, increase protein breakdown, increase protein loss via the kidneys, and/or expand the volume of plasma, the liquid portion of blood (diluting the blood). Important causes of low blood albumin include Severe liver disease and Kidney disease',
      [
        {text: 'OK'},
      ],
      {cancelable: false},
    );
}

const leptinAlert = () => {
  Alert.alert(
      'What is Leptin ?',
      'Leptin, a hormone released from the fat cells located in adipose tissues, sends signals to the hypothalamus in the brain. This particular hormone helps regulate and alter long-term food intake and energy the body burns throughout the day, not just from one meal to the next.',
      [
        {text: 'OK'},
      ],
      {cancelable: false},
    );
}

const adiponectinAlert = () => {
  Alert.alert(
      'What is Adiponectin ?',
      'A protein hormone produced and secreted exclusively by adipocytes (fat cells) that regulates the metabolism of lipids and glucose. Adiponectin influences the body response to insulin.High blood levels of adiponectin are associated with a reduced risk of heart attack. Low levels of adiponectin are found in people who are obese (and who are at increased risk of a heart attack). ',
      [
        {text: 'OK'},
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
            <Text style={styles.headerText}>Blood Analysis Chart</Text>
            </View>
  
        <View style={styles.containerTwo}>
        <View style={styles.containerTab}>
        <TouchableOpacity style={styles.tab}
          onPress={() => {navigation.navigate('WelcomeScreen')}}>
            <Text style={styles.tabText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}
            onPress={() => {navigation.navigate('BloodAnalysisHistory')}}>
            <Text style={styles.tabText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, {
                        backgroundColor: '#56bed1',
                    }]}
            onPress={() => {navigation.navigate('ChartBloodAnalysis')}}>
            <Text style={[styles.tabText, {
                        color: '#fff'
                    }]}>Chart</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.notice}>Click on the chart icons and track the evolution of your biomarkers</Text>
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
                              <Image source={require('../../assets/chart.png')} style={styles.iconadd}/>
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
                              <Image source={require('../../assets/chart.png')} style={styles.iconadd}/>
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
                              <Image source={require('../../assets/chart.png')} style={styles.iconadd}/>
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
                              <Image source={require('../../assets/chart.png')} style={styles.iconadd}/>
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
                              <Image source={require('../../assets/chart.png')} style={styles.iconadd}/>
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
                              <Image source={require('../../assets/chart.png')} style={styles.iconadd}/>
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
                              <Image source={require('../../assets/chart.png')} style={styles.iconadd}/>
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
                              <Image source={require('../../assets/chart.png')} style={styles.iconadd}/>
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
                              <Image source={require('../../assets/chart.png')} style={styles.iconadd}/>
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
                              <Image source={require('../../assets/chart.png')} style={styles.iconadd}/>
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
                              <Image source={require('../../assets/chart.png')} style={styles.iconadd}/>
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
                              <Image source={require('../../assets/chart.png')} style={styles.iconadd}/>
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
                              <Image source={require('../../assets/chart.png')} style={styles.iconadd}/>
                            </TouchableOpacity>
                                
                                <Text spacing={0.5} caption style={styles.text_footer}>Creatinine</Text>
                                
                            </Block>
                            

                        </Card1>
                        <Card1 style={styles.containerfour}>
                           

                        </Card1>
                        
      </View>
     
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <TouchableOpacity 
                                 onPress={ () => setModalVisible(!modalVisible)}
                       >
                              <Image source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
        <View style={styles.centeredView}>
       
        { data0.length != 0  ? ( 
          
             <View style={styles.modalView}>
               
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>Glucose Chart</Text>
                
                       
                       </View>
      <LineChart
    verticalLabelRotation={40} 
    data={{
      labels: date0,
      datasets: [
        {
          data: data0,
          strokeWidth: 2,
								color:  (opacity = 1) => barColor || barColor1, // optional
        }
      ]
    }}
    width= {width * 0.85}
    height={height * 0.7}
    
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  
  </View> ) : (<View><Text>Loading...</Text></View>)}
         
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <TouchableOpacity 
                                 onPress={ () => setModalVisible1(!modalVisible1)}
                       >
                              <Image source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
        <View style={styles.centeredView}>
       
        { data1.length != 0  ? ( 
          
             <View style={styles.modalView}>
               
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>C-Reactive protein Chart</Text>
                
                       
                       </View>
      <LineChart
    verticalLabelRotation={40} 
    data={{
      labels: date1,
      datasets: [
        {
          data: data1,
          strokeWidth: 2,
								color:  (opacity = 1) => `rgba(1, 130, 181, ${opacity})`, // optional
        }
      ]
    }}
    width= {width * 0.85}
    height={height * 0.7}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  
  </View> ) : (<View><Text>Loading...</Text></View>)}
         
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <TouchableOpacity 
                                 onPress={ () => setModalVisible2(!modalVisible2)}
                       >
                              <Image source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
        <View style={styles.centeredView}>
       
        { data2.length != 0  ? ( 
          
             <View style={styles.modalView}>
               
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>D-Dimer Chart</Text>
                
                       
                       </View>
      <LineChart
    verticalLabelRotation={40} 
    data={{
      labels: date2,
      datasets: [
        {
          data: data2,
          strokeWidth: 2,
								color:  (opacity = 1) => `rgba(1, 130, 181, ${opacity})`, // optional
        }
      ]
    }}
    width= {width * 0.85}
    height={height * 0.7}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  
  </View> ) : (<View><Text>Loading...</Text></View>)}
         
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <TouchableOpacity 
                                 onPress={ () => setModalVisible3(!modalVisible3)}
                       >
                              <Image source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
        <View style={styles.centeredView}>
       
        { data3.length != 0  ? ( 
          
             <View style={styles.modalView}>
               
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>IP-10 Chart</Text>
                
                       
                       </View>
      <LineChart
    verticalLabelRotation={40} 
    data={{
      labels: date3,
      datasets: [
        {
          data: data3,
          strokeWidth: 2,
								color:  (opacity = 1) => `rgba(1, 130, 181, ${opacity})`, // optional
        }
      ]
    }}
    width= {width * 0.85}
    height={height * 0.7}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  
  </View> ) : (<View><Text>Loading...</Text></View>)}
         
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible4}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <TouchableOpacity 
                                 onPress={ () => setModalVisible4(!modalVisible4)}
                       >
                              <Image source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
        <View style={styles.centeredView}>
       
        { data4.length != 0  ? ( 
          
             <View style={styles.modalView}>
               
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>Free albumin Chart</Text>
                
                       
                       </View>
      <LineChart
    verticalLabelRotation={40} 
    data={{
      labels: date4,
      datasets: [
        {
          data: data4,
          strokeWidth: 2,
								color:  (opacity = 1) => `rgba(1, 130, 181, ${opacity})`, // optional
        }
      ]
    }}
    width= {width * 0.85}
    height={height * 0.7}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  
  </View> ) : (<View><Text>Loading...</Text></View>)}
         
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible5}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <TouchableOpacity 
                                 onPress={ () => setModalVisible5(!modalVisible5)}
                       >
                              <Image source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
        <View style={styles.centeredView}>
       
        { data5.length != 0  ? ( 
          
             <View style={styles.modalView}>
               
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>Leptin Chart</Text>
                
                       
                       </View>
      <LineChart
    verticalLabelRotation={40} 
    data={{
      labels: date5,
      datasets: [
        {
          data: data5,
          strokeWidth: 2,
								color:  (opacity = 1) => `rgba(1, 130, 181, ${opacity})`, // optional
        }
      ]
    }}
    width= {width * 0.85}
    height={height * 0.7}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  
  </View> ) : (<View><Text>Loading...</Text></View>)}
         
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible6}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <TouchableOpacity 
                                 onPress={ () => setModalVisible6(!modalVisible6)}
                       >
                              <Image source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
        <View style={styles.centeredView}>
       
        { data6.length != 0  ? ( 
          
             <View style={styles.modalView}>
               
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>Adiponectin Chart</Text>
                
                       
                       </View>
      <LineChart
    verticalLabelRotation={40} 
    data={{
      labels: date6,
      datasets: [
        {
          data: data6,
          strokeWidth: 2,
								color:  (opacity = 1) => `rgba(1, 130, 181, ${opacity})`, // optional
        }
      ]
    }}
    width= {width * 0.85}
    height={height * 0.7}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  
  </View> ) : (<View><Text>Loading...</Text></View>)}
         
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible7}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <TouchableOpacity 
                                 onPress={ () => setModalVisible7(!modalVisible7)}
                       >
                              <Image source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
        <View style={styles.centeredView}>
       
        { data7.length != 0  ? ( 
          
             <View style={styles.modalView}>
               
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>IGF-1 Chart</Text>
                
                       
                       </View>
      <LineChart
    verticalLabelRotation={40} 
    data={{
      labels: date7,
      datasets: [
        {
          data: data7,
          strokeWidth: 2,
								color:  (opacity = 1) => `rgba(1, 130, 181, ${opacity})`, // optional
        }
      ]
    }}
    width= {width * 0.85}
    height={height * 0.7}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  
  </View> ) : (<View><Text>Loading...</Text></View>)}
         
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible8}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <TouchableOpacity 
                                 onPress={ () => setModalVisible8(!modalVisible8)}
                       >
                              <Image source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
        <View style={styles.centeredView}>
       
        { data8.length != 0  ? ( 
          
             <View style={styles.modalView}>
               
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>Resistin Chart</Text>
                
                       
                       </View>
      <LineChart
    verticalLabelRotation={40} 
    data={{
      labels: date8,
      datasets: [
        {
          data: data8,
          strokeWidth: 2,
								color:  (opacity = 1) => `rgba(1, 130, 181, ${opacity})`, // optional
        }
      ]
    }}
    width= {width * 0.85}
    height={height * 0.7}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  
  </View> ) : (<View><Text>Loading...</Text></View>)}
         
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible9}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <TouchableOpacity 
                                 onPress={ () => setModalVisible9(!modalVisible9)}
                       >
                              <Image source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
        <View style={styles.centeredView}>
       
        { data9.length != 0  ? ( 
          
             <View style={styles.modalView}>
               
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>OPN Chart</Text>
                
                       
                       </View>
      <LineChart
    verticalLabelRotation={40} 
    data={{
      labels: date9,
      datasets: [
        {
          data: data9,
          strokeWidth: 2,
								color:  (opacity = 1) => `rgba(1, 130, 181, ${opacity})`, // optional
        }
      ]
    }}
    width= {width * 0.85}
    height={height * 0.7}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  </View> ) : (<View><Text>Loading...</Text></View>)}
         
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible10}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <TouchableOpacity 
                                 onPress={ () => setModalVisible10(!modalVisible10)}
                       >
                              <Image source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
        <View style={styles.centeredView}>
       
        { data10.length != 0  ? ( 
          
             <View style={styles.modalView}>
               
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>Orexin-A Chart</Text>
                
                       
                       </View>
      <LineChart
    verticalLabelRotation={40} 
    data={{
      labels: date10,
      datasets: [
        {
          data: data10,
          strokeWidth: 2,
								color:  (opacity = 1) => `rgba(1, 130, 181, ${opacity})`, // optional
        }
      ]
    }}
    width= {width * 0.85}
    height={height * 0.7}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  </View> ) : (<View><Text>Loading...</Text></View>)}
         
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible11}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <TouchableOpacity 
                                 onPress={ () => setModalVisible11(!modalVisible11)}
                       >
                              <Image source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
        <View style={styles.centeredView}>
       
        { data11.length != 0  ? ( 
          
             <View style={styles.modalView}>
               
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>Melatonin Chart</Text>
                
                       
                       </View>
      <LineChart
    verticalLabelRotation={40} 
    data={{
      labels: date11,
      datasets: [
        {
          data: data11,
          strokeWidth: 2,
								color:  (opacity = 1) => `rgba(1, 130, 181, ${opacity})`, // optional
        }
      ]
    }}
    width= {width * 0.85}
    height={height * 0.7}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  </View> ) : (<View><Text>Loading...</Text></View>)}
         
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible12}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <TouchableOpacity 
                                 onPress={ () => setModalVisible12(!modalVisible12)}
                       >
                              <Image source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
        <View style={styles.centeredView}>
       
        { data12.length != 0  ? ( 
          
             <View style={styles.modalView}>
               
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>Creatinine Chart</Text>
                
                       
                       </View>
      <LineChart
    verticalLabelRotation={40} 
    data={{
      labels: date12,
      datasets: [
        {
          data: data12,
          strokeWidth: 2,
								color:  (opacity = 1) => `rgba(1, 130, 181, ${opacity})`, // optional
        }
      ]
    }}
    width= {width * 0.85}
    height={height * 0.7}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  </View> ) : (<View><Text>Loading...</Text></View>)}
         
        </View>
      </Modal>
            </View>
        <View> 
       
       
 
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
  notice: {
    fontSize: 19,
    alignSelf: "center",
    color: '#5C75D9',
    marginLeft: width * 0.05,
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
  },
  modalView: {
    height: height * 0.85,
    width: width * 0.9,
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
  marginTop: height * 0.05,
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
},
image1: {
  height: width *0.08,
  width: width * 0.08,
  marginLeft: width * 0.9,
},
title: {
  color: '#05375a',
  fontSize: 18,
  alignSelf: 'center'
},
});

export default ChartBloodAnalysis;


