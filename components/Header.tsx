import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Guessing Game</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink',
    // color: 'blue',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // color: 'blue',
  },
});
export default Header;
