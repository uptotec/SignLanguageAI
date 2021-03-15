import * as React from 'react';
import {StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

import CameraView from './CameraView';
import PendingView from './PendingView';

const CameraComponent = ({setAccuracy, setPrediction, prediction}) => (
  <RNCamera
    cameraViewDimensions={{width: 200, height: 200}}
    style={styles.preview}
    ratio={'1:1'}
    type={RNCamera.Constants.Type.back}
    flashMode={RNCamera.Constants.FlashMode.off}
    androidCameraPermissionOptions={{
      title: 'Permission to use camera',
      message: 'We need your permission to use your camera',
      buttonPositive: 'Ok',
      buttonNegative: 'Cancel',
    }}>
    {({camera, status}) => {
      if (status !== 'READY') {
        return <PendingView />;
      }
      return (
        <CameraView
          camera={camera}
          prediction={prediction}
          setAccuracy={setAccuracy}
          setPrediction={setPrediction}
        />
      );
    }}
  </RNCamera>
);

export default CameraComponent;

const styles = StyleSheet.create({
  preview: {
    flex: 0.85,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
