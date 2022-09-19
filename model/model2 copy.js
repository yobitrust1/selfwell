import * as React from 'react';
import { View, Text } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

const takeAndUploadPhotoAsync = async () => {
  let result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3],
  });

  if (result.cancelled) {
    return;
  }
  let localUri = result.uri;
  let filename = localUri.split('/').pop();
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  let formData = new FormData();
  formData.append('photo', { uri: localUri, name: filename, type });

  return await fetch('https://https://jsonplaceholder.typicode.com/', {
    method: 'POST',
    body: formData,
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};
export default function App() {
  React.useEffect(() => {
    takeAndUploadPhotoAsync();
  }, []);

  return <View></View>;
}