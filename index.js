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
            <View style = {styles.container}>
                
                <Ovuong/>
                <Ovuong/>
                <Ovuong/>
            </View>
        );  
    }

    componentDidMount() {
        console.log("ComponentDidMount")
    }
}

export default class Ovuong extends Component {
    render() {
        return(
            <View style = {styles.column}></View>
        )
    };
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: "grey",
        flexDirection: "column",
        flex: 1,
    },
    row: {
        backgroundColor: "red",
        borderWidth: 1,
        height: 100,
        width: 100,
    },
    column: {
        backgroundColor: "green",
        flex: 1,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    numpad: {
        width: 50,
        height: 50,
        backgroundColor: "white",
        borderWidth: 0.5,
        // justifyContent: "center",
        // alignItems: "center"    
    },
    numpadGrey: {
        flex: 1,
        backgroundColor: "grey",
        borderWidth: 0.5
    },
    number: {
        fontSize: 20
    }
})

// Đăng ký register
AppRegistry.registerComponent('AwesomeProject', () => Topica);
