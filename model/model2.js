// App.js 
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

function App() {
  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState('');
  const [pickedImage, setPickedImage] = useState();
  const [prediction, setPrediction] = useState();

  
  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      setPickedImage(result);
      console.log(result.uri);
    }
  }

  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      setPickedImage(result);
      console.log(result.uri);
    }
  }
  //////////////////////////////////////////////////////////////
  
   UploadPhotoAsync = async () => {
    
    let localUri = pickedImage.uri;
    let filename = localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
  
    let formData = new FormData();
    formData.append('file', { uri: localUri, name: filename, type });
    console.log(formData);
    let prediction= await fetch('http://147.182.180.196/predict', {
      method: 'POST',
      body: (formData),
      headers: {
        'content-type': 'multipart/form-data',
      },
    }).then(res => res.json())
    .then(data => {
      alert(data.pred);
      console.log(data)
    });

  };
  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
      {/* <View style={styles.row}> */}
        <Button style={styles.ccl} onPress={showImagePicker} title="Select an image" />
        <View style={styles.space} />
        <Button style={styles.ccl} onPress={openCamera} title="Open camera" />
        <View style={styles.space} />
        <Button style={styles.ccl} onPress={UploadPhotoAsync} title="Prediction" />
        {/* </View> */}
      </View>

      <View style={styles.imageContainer}>
        {
          pickedImagePath !== '' && <Image
            source={{ uri: pickedImagePath }}
            style={styles.image}
          />
        }
      </View>
    </View>
  );
}

// Kindacode.com
// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttonContainer: {
    marginBottom: 20,
        padding: 30
    
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  imageContainer: {
    padding: 30
  },
  ccl:{
    marginBottom: 20,
        padding: 30
     },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover'
  }
});

export default App;
