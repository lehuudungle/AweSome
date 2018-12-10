import React, {Component} from 'react';
import {
    View, StyleSheet
} from 'react-native';

export  default class Ovuong extends Component {
    render() {
        return(
            <View style = {titles .ovuong}/>
        );
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
    ovuong: {
        backgroundColor: "yellow",
        borderWidth: 1,
        width: 200,
        height: 200, 
    }
    
});