import React from "react";
import { View, Text, TextInput } from "react-native";

const Input = props => {
  const { label, placeholder, onChangeText, value, secureTextEntry } = props;
  const { containerStyle, textInputStyle, textStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{label}</Text>
      <TextInput
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={textInputStyle}
        value={value}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1
  },
  textInputStyle: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#f6f6f6'
  },
  textStyle: {
    fontSize: 15,
    padding: 5,
  }
};

export default Input;
