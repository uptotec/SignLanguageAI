import * as React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import CameraComponent from './components/CameraComponent';
import PredictionView from './components/PredictionView';

const App = () => {
  const [prediction, setPrediction] = React.useState('');
  const [accuracy, setAccuracy] = React.useState(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <CameraComponent
          prediction={prediction}
          setAccuracy={setAccuracy}
          setPrediction={setPrediction}
        />
        <PredictionView prediction={prediction} accuracy={accuracy} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'black',
    backgroundColor: 'white',
  },
});

export default App;
