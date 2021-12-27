import React from 'react';

import {View, StyleSheet, TextInput} from 'react-native';

const Input = (props: any) => {
  return (
    <View>
      <TextInput {...props} style={{...styles.input, ...props.style}} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
export default Input;
