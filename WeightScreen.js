import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WeightScreen = () => {
    return (
      <View style={styles.container}>
        <Text>weight Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default WeightScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
