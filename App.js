import React from 'react';
import { StyleSheet, View } from 'react-native';

import BodyText from './src/elements/BodyText';

import MemoList from './src/components/memoList';
import Appbar from './src/components/appbar';
import CircleButton from './src/elements/CircleButton';


export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
});
