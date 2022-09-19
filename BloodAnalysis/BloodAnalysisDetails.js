import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text, Button, Dimensions, StyleSheet, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

import Card1 from '../../components/Card1';
import Block from '../../components/Block';

import Api from '../../API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../../API';

const { width, height } = Dimensions.get("window");

const BloodAnalysisDetails = props => {

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
      const [showAlert, setShowAlert] = useState(false);
      
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
      }, [props.route.params.idBloodAnalyse, currentBloodAnalysis]);
       
      const removeBloodAnalysis = (id) => {
        API.DeleteBloodAnalysis(id)
          .then(response => {
            console.log(response.data);
            refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      };

    const showAlertDelete = (idItem) => {
        Alert.alert(
            'Confirmation',
            'Sure you want to delete this item ?',
            [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => removeBloodAnalysis(idItem)
                },
            ],
        )
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
        <View style={styles.container}>
        <View style={styles.header}>
              <Text style={styles.text_header}>Blood Analysis details</Text>
          </View>
        <View style={styles.footer}>
        
           <Text>For more informations click on the icons</Text>

              {currentBloodAnalysis ? ( 
                  <ScrollView >
                      {currentBloodAnalysis.glucose >0 ? ( 
                        <Card1 style={styles.containerThree}>
                            <TouchableOpacity
                                onPress={() => glucoseAlert()}
                            >
                                <Image source={require('../../assets/glucose.png')} style={styles.icon}/>
                            </TouchableOpacity>
                                

                            <Block row space="between" style={{ marginBottom: 16 }}>
                                <Text spacing={0.5} caption style={styles.text_footer}>glucose</Text>
                                <Text spacing={0.5} caption style={styles.text_footer}>{currentBloodAnalysis.glucose}</Text>
                       
                            </Block>
                        </Card1>):(<View>

                      </View>
                    )}

                    {currentBloodAnalysis.cReactiveProtein > 0 ? ( 
                        <Card1 style={styles.containerThree}>
                            <TouchableOpacity
                                onPress={() => cReactiveProteinAlert()}
                            >
                                <Image source={require('../../assets/creactive.png')} style={styles.icon}/>
                            </TouchableOpacity>
                                

                            <Block row space="between" style={{ marginBottom: 16 }}>
                                <Text spacing={0.5} caption style={styles.text_footer}>C-Reactive Protein</Text>
                                <Text spacing={0.5} caption style={styles.text_footer}>{currentBloodAnalysis.cReactiveProtein}</Text>
                       
                            </Block>
                        </Card1>):(<View>

                      </View>
                    )}

                    {currentBloodAnalysis.dDimer > 0 ? ( 
                        <Card1 style={styles.containerThree}>
                            <TouchableOpacity
                                onPress={() => dDimerAlert()}
                            >
                                <Image source={require('../../assets/dimer.png')} style={styles.icon}/>
                            </TouchableOpacity>
                                

                            <Block row space="between" style={{ marginBottom: 16 }}>
                                <Text spacing={0.5} caption style={styles.text_footer}>D-Dimer</Text>
                                <Text spacing={0.5} caption style={styles.text_footer}>{currentBloodAnalysis.dDimer}</Text>
                       
                            </Block>
                        </Card1>):(<View>

                      </View>
                    )}

                    {currentBloodAnalysis.ip10 > 0 ? ( 
                        <Card1 style={styles.containerThree}>
                            <TouchableOpacity
                                onPress={() => ip10Alert()}
                            >
                                <Image source={require('../../assets/ip10.png')} style={styles.icon}/>
                            </TouchableOpacity>
                                

                            <Block row space="between" style={{ marginBottom: 16 }}>
                                <Text spacing={0.5} caption style={styles.text_footer}>IP-10</Text>
                                <Text spacing={0.5} caption style={styles.text_footer}>{currentBloodAnalysis.ip10}</Text>
                       
                            </Block>
                        </Card1>):(<View>

                      </View>
                    )}

                    {currentBloodAnalysis.freeAlbumin > 0 ? ( 
                        <Card1 style={styles.containerThree}>
                            <TouchableOpacity
                                onPress={() => albuminAlert()}
                            >
                                <Image source={require('../../assets/albumin.png')} style={styles.icon}/>
                            </TouchableOpacity>
                                

                            <Block row space="between" style={{ marginBottom: 16 }}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Free Albumin</Text>
                                <Text spacing={0.5} caption style={styles.text_footer}>{currentBloodAnalysis.freeAlbumin}</Text>
                       
                            </Block>
                        </Card1>):(<View>

                      </View>
                    )}

                    {currentBloodAnalysis.leptin > 0 ? ( 
                        <Card1 style={styles.containerThree}>
                            <TouchableOpacity
                                onPress={() => leptinAlert()}
                            >
                                <Image source={require('../../assets/leptin.png')} style={styles.icon}/>
                            </TouchableOpacity>
                                

                            <Block row space="between" style={{ marginBottom: 16 }}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Leptin</Text>
                                <Text spacing={0.5} caption style={styles.text_footer}>{currentBloodAnalysis.leptin}</Text>
                       
                            </Block>
                        </Card1>):(<View>

                      </View>
                    )}

                    {currentBloodAnalysis.adiponectin > 0 ? ( 
                        <Card1 style={styles.containerThree}>
                            <TouchableOpacity
                                onPress={() => adiponectinAlert()}
                            >
                                <Image source={require('../../assets/adiponectin.png')} style={styles.icon}/>
                            </TouchableOpacity>
                                

                            <Block row space="between" style={{ marginBottom: 16 }}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Adiponectin</Text>
                                <Text spacing={0.5} caption style={styles.text_footer}>{currentBloodAnalysis.adiponectin}</Text>
                       
                            </Block>
                        </Card1>):(<View>

                      </View>
                    )}

                    {currentBloodAnalysis.igf1 > 0 ? ( 
                        <Card1 style={styles.containerThree}>
                            <TouchableOpacity
                                onPress={() => igf1Alert()}
                            >
                                <Image source={require('../../assets/igf1.png')} style={styles.icon}/>
                            </TouchableOpacity>
                                

                            <Block row space="between" style={{ marginBottom: 16 }}>
                                <Text spacing={0.5} caption style={styles.text_footer}>IGF-1</Text>
                                <Text spacing={0.5} caption style={styles.text_footer}>{currentBloodAnalysis.igf1}</Text>
                       
                            </Block>
                        </Card1>):(<View>

                      </View>
                    )}

                    {currentBloodAnalysis.resistin > 0 ? ( 
                        <Card1 style={styles.containerThree}>
                            <TouchableOpacity
                                onPress={() => resistinAlert()}
                            >
                                <Image source={require('../../assets/igf1.png')} style={styles.icon}/>
                            </TouchableOpacity>
                                

                            <Block row space="between" style={{ marginBottom: 16 }}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Resistin</Text>
                                <Text spacing={0.5} caption style={styles.text_footer}>{currentBloodAnalysis.resistin}</Text>
                       
                            </Block>
                        </Card1>):(<View>

                      </View>
                    )}

                    {currentBloodAnalysis.opn > 0 ? ( 
                        <Card1 style={styles.containerThree}>
                            <TouchableOpacity
                                onPress={() => opnAlert()}
                            >
                                <Image source={require('../../assets/opn.jpeg')} style={styles.littleIcon}/>
                            </TouchableOpacity>
                                

                            <Block row space="between" style={{ marginBottom: 16 }}>
                                <Text spacing={0.5} caption style={styles.text_footer}>OPN</Text>
                                <Text spacing={0.5} caption style={styles.text_footer}>{currentBloodAnalysis.opn}</Text>
                       
                            </Block>
                        </Card1>):(<View>

                      </View>
                    )}

                    {currentBloodAnalysis.orexinA > 0 ? ( 
                        <Card1 style={styles.containerThree}>
                            <TouchableOpacity
                                onPress={() => orexinaAlert()}
                            >
                                <Image source={require('../../assets/orexinA.png')} style={styles.littleIcon}/>
                            </TouchableOpacity>
                                

                            <Block row space="between" style={{ marginBottom: 16 }}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Orexin-A</Text>
                                <Text spacing={0.5} caption style={styles.text_footer}>{currentBloodAnalysis.orexinA}</Text>
                       
                            </Block>
                        </Card1>):(<View>

                      </View>
                    )}

                    {currentBloodAnalysis.melatonin > 0 ? ( 
                        <Card1 style={styles.containerThree}>
                            <TouchableOpacity
                                onPress={() => melatoninAlert()}
                            >
                                <Image source={require('../../assets/melatonin.png')} style={styles.icon1}/>
                            </TouchableOpacity>
                                

                            <Block row space="between" style={{ marginBottom: 16 }}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Melatonin</Text>
                                <Text spacing={0.5} caption style={styles.text_footer}>{currentBloodAnalysis.melatonin}</Text>
                       
                            </Block>
                        </Card1>):(<View>

                      </View>
                    )}

                    {currentBloodAnalysis.creatinine > 0 ? ( 
                        <Card1 style={styles.containerThree}>
                            <TouchableOpacity
                                onPress={() => creatinineAlert()}
                            >
                                <Image source={require('../../assets/creatinine.png')} style={styles.icon}/>
                            </TouchableOpacity>
                                

                            <Block row space="between" style={{ marginBottom: 16 }}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Creatinine</Text>
                                <Text spacing={0.5} caption style={styles.text_footer}>{currentBloodAnalysis.creatinine}</Text>
                       
                            </Block>
                        </Card1>):(<View>

                      </View>
                    )}
                      
                  </ScrollView>
                ):
                (<View>

                </View>
                )}
        </View>
        </View>
    );

};

export default BloodAnalysisDetails;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#d4d4d4'
    },
    containerThree: {
        backgroundColor: '#ffff',
        flex: 1,
        height: height * 0.2,
        width: width * 0.90,
        marginTop: height * 0.03,
        alignSelf: "center",
        borderLeftWidth: 8,
        borderLeftColor: '#adcfa1',
        borderWidth: 2,
        borderBottomColor: '#d4d4d4',
        borderTopColor: '#d4d4d4',
        borderRightColor: '#d4d4d4'
    },
    header: {
        height: height * 0.15,
        backgroundColor: '#adcfa1',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        marginBottom: height* 0.05
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: height * 0.15,
        marginBottom: height * 0.000009,
        alignSelf: 'center'
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
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
    },
    icon: {
        width: width * 0.1,
        height: height * 0.062,
    },
    icon1: {
      width: width * 0.25,
      height: height * 0.067,
  },
    littleIcon: {
      width: width * 0.27,
      height: height * 0.067
    }
    });
  