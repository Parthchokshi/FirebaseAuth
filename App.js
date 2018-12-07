/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View } from "react-native";
import Header from "./components/Header";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import Spinner from "./components/Spinner";

const config = {
  apiKey: "AIzaSyBYGVJzhLeCkuIBBtcd5PL8cdNLyRu4ZB4",
  authDomain: "auth-8c337.firebaseapp.com",
  databaseURL: "https://auth-8c337.firebaseio.com",
  projectId: "auth-8c337",
  storageBucket: "auth-8c337.appspot.com",
  messagingSenderId: "245312007253"
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: null };
  }
  componentWillMount() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  handleLogout = () => {
    firebase.auth().signOut();
  };
  renderLayout = () => {
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm />;
      case true:
        return <Logout handleLogout={this.handleLogout} />;
      default:
        return <Spinner />;
    }
  };
  render() {
    return (
      <View>
        <Header headerText="Firebase Auth" />
        <View style={{ marginTop: 20 }}>{this.renderLayout()}</View>
      </View>
    );
  }
}
