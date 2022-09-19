import React from 'react';
import { Platform, StyleSheet, Text, View, WebView, Button } from 'react-native';
import { Pedometer } from 'expo-sensors';
import CircularProgressBar from "../../components/CircularProgressBar";
const TEN_THOUSAND = 10000, ZERO = 0;
export default class PedometerCounter extends React.Component {
  state = {
    currentStepCount: 0,
    loadContent: false
  }
  componentDidMount() {
    this._subscribe();
  }
  _subscribe = () => {
    const { currentStepCount } = this.state;
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState((state) => {
        const { currentStepCount } = state;
        // calculating steps or resetting when reaching 5001 
        let steps = currentStepCount === ZERO ? result.steps :
          currentStepCount === TEN_THOUSAND ?
            ZERO :
            currentStepCount + 1;
        return {
          currentStepCount: steps
        }
      });
    });
  }
  openpage = (e) => {
    this.setState({
      loadContent: true
    });
    this.forceUpdate();
  }
  render() {
    if (!this.state.loadContent) {
      return (
        <View style={styles.container}>
          <View style={styles.container}>
            <CircularProgressBar steps={this.state.currentStepCount} />
            <Text style={styles.instructions}>total steps: {this.state.currentStepCount}</Text>
          </View>
          <View style={styles.margBotton}>
            <Button
              style={styles.paragraph}
              size={15}
              title="go Premium"
              onPress={() => alert("clicked me")}
            />
          </View>
        </View>

      );
    } else {
      return (
        <View style={styles.Vcontainer}>
          <View style={{ flex: 1 }}>
            <WebView
              //source={{ baseUrl: 'https://projects.absolutedouble.co.uk/health-app/' }}
              style={{ flex: 1, width: 300, overflow: 'hidden' }}
              scalesPageToFit={true}
              source={{ url: 'https://github.com/facebook/react-native' }}
            /></View >
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "linear-gradient(to right, rgb(255, 81, 47), rgb(221, 36, 118))",
  },
  Vcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "transparent",
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 30,
    marginTop: 10
  },
  webview: {
    backgroundColor: "white",
    flex: 1
  },
  margBotton: {
    marginTop: 20,
    marginBottom: 30
  },
  paragraph: {
    backgroundColor: "white",
    margin: 0
  }
});