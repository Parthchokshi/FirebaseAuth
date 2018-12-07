import React, { Component } from "react";
import { Text, View } from "react-native";
import firebase from "firebase";
import Button from "./Button";
import Card from "./Card";
import CardSection from "./CardSection";
import Input from "./Input";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", error: "", loading: false };
  }
  handleEmailChange = email => {
    this.setState({ email });
  };
  handlePasswordChange = password => {
    this.setState({ password });
  };
  handleLogin = () => {
    this.setState({ loading: true, error: '' });
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ loading: false, error: "Authentication failed." });
          });
      });
  };
  render() {
    const { errorTextStyle } = styles;
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Email"
              onChangeText={this.handleEmailChange}
              value={this.state.email}
              placeholder="user@gmail.com"
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              onChangeText={this.handlePasswordChange}
              value={this.state.password}
              placeholder="password"
            />
          </CardSection>
          <CardSection>
            <Button loading={this.state.loading} onPress={this.handleLogin}>
              Login
            </Button>
          </CardSection>
        </Card>
        <Text style={errorTextStyle}>{this.state.error}</Text>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    textAlign: "center",
    color: "red",
    fontSize: 20,
    margin: 10
  }
};

export default LoginForm;
