import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import predict from '../tflite/tflite';

const CameraView = ({camera, setAccuracy, setPrediction, prediction}) => {
  const takePicture = async function (Camera) {
    const options = {quality: 1, base64: false, width: 200, doNotSave: false};
    const data = await Camera.takePictureAsync(options);

    console.log(data);

    predict(data.uri, prediction, setPrediction, setAccuracy);
  };

  return (
    <View style={styles.ButtonView}>
      <TouchableOpacity
        onPress={() => takePicture(camera)}
        style={styles.capture}>
        <Text style={styles.captureText}> SNAP </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setPrediction('');
          setAccuracy(null);
        }}
        style={styles.capture}>
        <Text style={styles.captureText}> RESET </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraView;

const styles = StyleSheet.create({
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  captureText: {
    fontSize: 14,
    color: 'black',
  },
  ButtonView: {flexDirection: 'row'},
});
