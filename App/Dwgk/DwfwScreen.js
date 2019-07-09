import React from 'react';
import {StyleSheet} from 'react-native';
import {Container} from "native-base";
import {Tabs} from "@ant-design/react-native";
import DwgkScreen from "./DwgkScreen";
import GxzjScreen from "../Gxzj/GxzjScreen";

/**
 * 党务服务
 */
export default class DwfwScreen extends React.Component {

    getFatherTabs() {
        return [{title: '党务公开'}, {title: '关系转接'}]
    }

    render() {
        return (
            <Container>
                <Tabs tabs={this.getFatherTabs()}
                      tabBarTextStyle={styles.tabFont}
                      tabBarActiveTextColor={"#D11519"}
                      tabBarUnderlineStyle={{backgroundColor: '#D11519'}}>
                    <DwgkScreen style={styles.tabStyle} navigation={this.props.navigation} />
                    <GxzjScreen style={styles.tabStyle} navigation={this.props.navigation} />
                </Tabs>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    tabStyle: {
        margin: 10,
        flex: 1,
    },
    tabFont: {
        fontSize: 12,
    },
    underLine: {
        backgroundColor: "#ffffff"
    }
});