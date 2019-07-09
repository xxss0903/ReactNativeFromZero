import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from "@ant-design/react-native";

var inputValue = 1;

export default class ZjtxScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            boom: -1,
        }
    }

    enterFirstScreen(inputValue) {
        const {navigate} = this.props.navigation;
        navigate('ZjtxFirst', {inputValue: inputValue, callback: (data) => {this.setState({
                boom: data
            })}});
    }

    render() {
        inputValue += 1;
        return (
            <View>
                <Text>测试组件通信</Text>
                <Button title='组件通信' onPress={() => this.enterFirstScreen(inputValue)}>组件通信b</Button>
                <Text>回传数据:{this.state.boom}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});