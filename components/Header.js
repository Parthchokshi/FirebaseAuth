/**
 * Created by Parthchokshi on 10/8/2016.
 */
import React from "react";
import { Text, View } from "react-native";

// Make a component
const Header = props => {
  const { textStyle, viewStyle } = styles;
  const { headerText } = props;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#1976d2",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20,
    color: '#FFF'
  }
};

// Make the component available to other parts of the app
export default Header;
