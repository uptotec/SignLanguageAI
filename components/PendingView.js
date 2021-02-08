import * as React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const PendingView = () => (
  <View style={styles.PendingView}>
    <Text>Waiting</Text>
  </View>
);

const styles = StyleSheet.create({
  PendingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PendingView;
