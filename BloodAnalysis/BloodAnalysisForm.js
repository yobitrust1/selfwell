import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Wizard from '../../components/Wizard';
import Input from '../../components/Input';


var back = '<';

class BloodAnalysisForm extends React.Component {
  render() {
    const moment = require('moment');
    const today = moment();
    return (
      <View style={styles.container}>
       <View style={styles.header}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('BloodAnalysisTab')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Add my blood analysis</Text>
          </View>

        
         <View style={styles.containerOne}>
        <Wizard
          initialValues={{
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
            bloodAnalysisDate: today.format('YYYY-MM-DD h:mm')
          }}
        >
          
          <Wizard.Step>
              {({ onChangeValue, values }) => (
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
                >
                   <Text style={styles.text_footer
                   }>Glucose (g/L)</Text>
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder="glocose..."
                    value={values.glucose}
                    name="glucose"
                    keyboardType={'numeric'}
                  />
                  {values.glucose > 4 || values.glucose < 0 ? 
                   (<Animatable.View  animation="fadeInLeft" duration={500}>
                      <Text style={styles.errorMsg}>Please enter a valid glucose value.</Text>
                   </Animatable.View>) 
                   : (<Animatable.View></Animatable.View>)}
                  <Text style={styles.text_footer
                   }>C-Reactive protein (??)</Text>
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder="cReactiveProtein..."
                    value={values.cReactiveProtein}
                    name="cReactiveProtein"
                    keyboardType={'numeric'}
                  />
                  {values.cReactiveProtein > 1000 || values.cReactiveProtein < 0 ? 
                   (<Animatable.View  animation="fadeInLeft" duration={500}>
                      <Text style={styles.errorMsg}>Please enter a valid C-Reactive protein value.</Text>
                   </Animatable.View>) 
                   : (<Animatable.View></Animatable.View>)}
                </Animatable.View>
              )}
            </Wizard.Step>

            <Wizard.Step>
              {({ onChangeValue, values }) => (
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
                >
              
                <Text style={styles.text_footer
                }>D-Dimer (ug/L)</Text>
                
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder="dDimer..."
                    value={values.dDimer}
                    name="dDimer"
                    keyboardType={'numeric'}
                  />
                  {values.dDimer > 500000 || values.dDimer < 0 ? 
                   (<Animatable.View  animation="fadeInLeft" duration={500}>
                      <Text style={styles.errorMsg}>Please enter a valid dDimer value.</Text>
                   </Animatable.View>) 
                   : (<Animatable.View></Animatable.View>)}
                  <Text style={styles.text_footer
                  }>IP-10 (pg/mL)</Text>
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder="ip10..."
                    value={values.ip10}
                    name="ip10"
                    keyboardType={'numeric'}
                  />
                    {values.ip10 > 10000 || values.ip10 < 0 ? 
                   (<Animatable.View  animation="fadeInLeft" duration={500}>
                      <Text style={styles.errorMsg}>Please enter a valid ip10n value.</Text>
                   </Animatable.View>) 
                   : (<Animatable.View></Animatable.View>)}
                </Animatable.View>
              )}
            </Wizard.Step>

            <Wizard.Step>
              {({ onChangeValue, values }) => (
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
                >
                   <Text style={styles.text_footer
                   }>Free Albumin (g/dL)</Text>
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder="freeAlbumin..."
                    value={values.freeAlbumin}
                    name="freeAlbumin"
                    keyboardType={'numeric'}
                  />
                  {values.freeAlbumin > 50 || values.freeAlbumin < 0 ? 
                   (<Animatable.View  animation="fadeInLeft" duration={500}>
                      <Text style={styles.errorMsg}>Please enter a valid freeAlbumin value.</Text>
                   </Animatable.View>) 
                   : (<Animatable.View></Animatable.View>)}
                  <Text style={styles.text_footer
                   }>Leptin (ng/mL)</Text>
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder="leptin..."
                    value={values.leptin}
                    name="leptin"
                    keyboardType={'numeric'}
                  />
                  {values.freeAlbumin > 400 || values.freeAlbumin < 0 ? 
                   (<Animatable.View  animation="fadeInLeft" duration={500}>
                      <Text style={styles.errorMsg}>Please enter a valid leptin value.</Text>
                   </Animatable.View>) 
                   : (<Animatable.View></Animatable.View>)}
                </Animatable.View>
              )}
            </Wizard.Step>

            <Wizard.Step>
              {({ onChangeValue, values }) => (
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
                >
                   <Text style={styles.text_footer
                   }>Adiponectin (ug/mL)</Text>
                
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder="adiponectin..."
                    value={values.adiponectin}
                    name="adiponectin"
                    keyboardType={'numeric'}
                  />
                  {values.adiponectin > 1000  || values.adiponectin < 0 ? 
                   (<Animatable.View  animation="fadeInLeft" duration={500}>
                      <Text style={styles.errorMsg}>Please enter a valid adiponectin value.</Text>
                   </Animatable.View>) 
                   : (<Animatable.View></Animatable.View>)}
                  <Text style={styles.text_footer
                   }>IGF-1 (ug/L)</Text>
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder="igf1..."
                    value={values.igf1}
                    name="igf1"
                    keyboardType={'numeric'}
                  />
                  {values.igf1 > 1000   || values.igf1 < 0 ? 
                   (<Animatable.View  animation="fadeInLeft" duration={500}>
                      <Text style={styles.errorMsg}>Please enter a valid igf1 value.</Text>
                   </Animatable.View>) 
                   : (<Animatable.View></Animatable.View>)}
                </Animatable.View>
              )}
            </Wizard.Step>

            <Wizard.Step>
              {({ onChangeValue, values }) => (
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
                >
                   <Text style={styles.text_footer
                   }>Resistin</Text>
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder="resistin..."
                    value={values.resistin}
                    name="resistin"
                    keyboardType={'numeric'}
                  />
                  <Text style={styles.text_footer
                   }>OPN</Text>
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder="opn..."
                    value={values.opn}
                    name="opn"
                    keyboardType={'numeric'}
                  />
                </Animatable.View>
              )}
            </Wizard.Step>

            <Wizard.Step>
              {({ onChangeValue, values }) => (
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
                >
                   <Text style={styles.text_footer
                   }>Orexin-A</Text>
                    
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder="orexinA..."
                    value={values.orexinA}
                    name="orexinA"
                    keyboardType={'numeric'}
                  />
                  <Text style={styles.text_footer
                   }>Melatonin</Text>
                    
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder="melatonin..."
                    value={values.melatonin}
                    name="melatonin"
                    keyboardType={'numeric'}
                  />
                </Animatable.View>
              )}
            </Wizard.Step>

            <Wizard.Step>
              {({ onChangeValue, values }) => (
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
                >
                  <Text style={styles.text_footer
                   }>Creatinine</Text>
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder="creatinine..."
                    value={values.creatinine}
                    name="creatinine"
                    keyboardType={'numeric'}
                  />
                  
                </Animatable.View>
              )}
            </Wizard.Step>
          
        </Wizard>
        </View>
      </View>
    );
  }
}
 

export default BloodAnalysisForm;

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
  containerOne: {
    backgroundColor: '#ffff',
    width: width * 0.94,
    height: height * 0.7,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignSelf: "center",
    marginTop: height * 0.05,
    borderRadius: 20,
    
  },

  footer: {
    flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
  },
  text_footer: {
    color: '#000000',
    fontSize: 18,
    top: height * 0.03
},
action: {
  flexDirection: 'row',
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5
},
errorMsg: {
  color: '#FF0000',
  fontSize: 14,
},
});