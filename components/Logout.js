import React from "react";
import Button from "./Button";
import { View } from "react-native";

const Logout = ({ handleLogout }) => {
  return (
    <View>
      <Button onPress={handleLogout}>Logout</Button>
    </View>
  );
};

export default Logout;
