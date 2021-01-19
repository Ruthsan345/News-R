import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { LogBox } from "react-native";

import Router from './app/config/routes'
import store from './app/redux/store';

LogBox.ignoreLogs([
    "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo- constants).",
  ]);

export default class App extends Component {
    render() {
        return (
            
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}