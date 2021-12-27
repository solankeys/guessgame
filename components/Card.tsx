import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Card = (props: any) => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};
const styles = StyleSheet.create({
  card: {
    elevation: 8,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 130,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
