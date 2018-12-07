/**
 * Created by Parthchokshi on 11/7/2016.
 */
import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

const Button = ({ onPress, children, loading }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      {loading ? (
        <ActivityIndicator style={textStyle} size="small" color="#007aff" />
      ) : (
        <Text style={textStyle}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5,
    minHeight: 40
  }
};

export default Button;
