/** @format */
// import thư viện 
import {AppRegistry, 
    View, StyleSheet
} from 'react-native';
import React, {Component} from 'react';
import Ovuong from './componens/Topica.js';


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
               <Ovuong></Ovuong>
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
        backgroundColor: "gray",
        flex: 1,
        flexDirection: 'column',
    },
    view1: {
        backgroundColor: "green",
        flex: 1
    },
    view2: {
        backgroundColor: "red",
        flex: 2
    },
    // ovuong: {
    //     backgroundColor: "yellow",
    //     borderWidth: 1,
    //     width: 200,
    //     height: 200, 
    // }
    
});

// Đăng ký register
AppRegistry.registerComponent('AwesomeProject', () => Topica);
