/** @format */
// import thư viện 
import {AppRegistry, 
    View, Text, StatusBar, StyleSheet
} from 'react-native';
import React, {Component} from 'react';


// viet code
class Topica extends Component {

    constructor(props) {
        super(props)
        console.log("constructor")
    }

    componentWillMount() {
        console.log("ComponentWillMount")
    }

    render() {
        console.log("render")
        return (
            <View style = {titles.content}>
                <View style = {titles.view1} ></View>
                <View style = {titles.view2} ></View>
            </View>
        );  
    }

    componentDidMount() {
        console.log("ComponentDidMount")
    }
}

var titles = StyleSheet.create({
    tieude: {
        marginTop: 100, marginLeft: 50, color: "red"
    },
    maunen: {
        backgroundColor: "#09C"
    },
    content: {
        backgroundColor: "yellow",
        flex: 1,
        flexDirection: 'row',
    },
    view1: {
        backgroundColor: "green",
        flex: 1
    },
    view2: {
        backgroundColor: "red",
        flex: 2
    }
    
});

// Đăng ký register
AppRegistry.registerComponent('AwesomeProject', () => Topica);
