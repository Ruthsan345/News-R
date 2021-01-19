import React from 'react';
import { AppLoading } from 'expo';

import { Scene, Router, Stack } from 'react-native-router-flux';

import Home from '../modules/scenes/Home';
import Article from '../modules/scenes/Article';
import Source from '../modules/scenes/Source';

import { color, navTitleStyle } from "../styles/theme";

export default class extends React.Component {
    render() {
        return (
            <Router>
                <Stack key="root"
                       navigationBarStyle={{backgroundColor: "#fff"}}
                       titleStyle={navTitleStyle}
                       backButtonTintColor={color.black}>
                    <Scene key="Home" sceneStyle ={{backgroundColor:'#363636'}} component={Home} title="News R" initial/>
                    <Scene key="Article" component={Article} title=""/>
                    <Scene key="Source"  component={Source} title=""/>
                </Stack>
            </Router>
        )
    }
}