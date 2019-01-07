/** @format */
// import thư viện 
import {AppRegistry, 
    View, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import React, {Component} from 'react';
import Ovuong from './componens/Topica';


// viet code
class Topica extends Component {
    clickMe(name) {
        alert("Function: YOu Click "+name)
    }

    render() {
        console.log("render")
        return (
            <Navigator
                initialRoute = {{name: "ManHinhVang"}}
            />
        );
    }

}



var styles = StyleSheet.create({
    khachhang: {
        backgroundColor: "yellow",
        height: 50,
        justifyContent: "center",
    },

    button: {
        backgroundColor: "green",
        width: 100,
        height: 30,
        marginTop: 100,
        marginLeft: 50
    }
});

export default class ManHinhVang extends  Component {
    render(){
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "green",

                }}>

            </View>
        );
    }
}

export class ManHinhDo extends  Component {
    render(){
        return (
            <View style = {{flex: 1, brackgroundColor: "red"}}></View>
        );
    }
}





// Đăng ký register
AppRegistry.registerComponent('AwesomeProject', () => Topica);
