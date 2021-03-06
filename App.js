import React from 'react';
import { StyleSheet, View } from 'react-native';

import BodyText from './src/elements/BodyText';

import Appbar from './src/components/appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
});
