import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component{
    render() {
        return (
            <View style = {styles.CircleButton}>
                <Text style = {styles.CircleButtonTitle}>
                  {this.props.children}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    CircleButton: {
      position: 'absolute',
      bottom: 32,
      right: 32,
      width: 48,
      height: 48,
      backgroundColor: '#f72c50',
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
  
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2},
      shadowOpacity: 0.9,
      shadowRadius: 3,
    },
    CircleButtonTitle: {
      fontSize: 24,
      lineHeight: 24,
      color: '#fff',
    },
  });

export default CircleButton;