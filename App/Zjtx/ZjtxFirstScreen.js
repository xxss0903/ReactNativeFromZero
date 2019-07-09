import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from "@ant-design/react-native";

/**
 * 组件通信-第一个界面
 */
export default class ZjtxFirstScreen extends React.Component {

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>
                    传入数据：{params.inputValue}
                </Text>
                <Button onPress={() => this.callBackData(12)}>回传数据</Button>
            </View>
        );
    }

    callBackData(data) {
        const {navigate,goBack,state} = this.props.navigation;
        state.params.callback(data);
        this.props.navigation.goBack();
    }
}

const styles = StyleSheet.create({});