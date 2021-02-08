import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const PredictionView = ({prediction, accuracy}) => (
  <View style={styles.predictionView}>
    <Text style={styles.predictionText}>Predicted text:</Text>
    <Text style={styles.predictionText}>{prediction}</Text>
    <Text style={styles.predictionNumber}>
      {accuracy ? `confidence: ${accuracy.toFixed(2)}%` : null}
    </Text>
  </View>
);

export default PredictionView;

const styles = StyleSheet.create({
  predictionText: {
    alignSelf: 'center',
    //color: 'white',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  predictionView: {
    justifyContent: 'space-evenly',
    flex: 0.3,
  },
  predictionNumber: {
    //color: 'white',
    color: 'black',
    alignSelf: 'center',
  },
});
