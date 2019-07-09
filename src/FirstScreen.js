
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';



export default class FirstScreen extends Component {
    
    render(){
        return(
            <View>
            <Text>FirstScreen</Text>
            <Button onPress={()=>{
                const {navigate} = this.props.navigation
            }}/>
            </View>
        );
    }
}