import React, {Component} from "react";
import {StyleSheet, View} from 'react-native';
import {Container} from "native-base";
import DwgkAllScreen from "./DwgkAllScreen";
import DwgkDzbScreen from "./DwgkDzbScreen";
import {Tabs} from '@ant-design/react-native';

/**
 * 党务公开
 */
export default class DwgkScreen extends Component {

    static getSubTabs() {
        return [{title: '全部'}, {title: '党支部/总支'}, {title: '机关/基层党委'}, {title: '党组'}];
    }

    render() {
        return (
            <Container>
                <Tabs tabs={DwgkScreen.getSubTabs()}
                      tabBarTextStyle={styles.tabFont}
                      tabBarActiveTextColor={"#D11519"}
                      tabBarUnderlineStyle={{backgroundColor: '#D11519'}}>
                    <DwgkAllScreen style={styles.tabStyle} navigation={this.props.navigation} />
                    <DwgkDzbScreen style={styles.tabStyle} navigation={this.props.navigation} />
                    <DwgkAllScreen style={styles.tabStyle} navigation={this.props.navigation} />
                    <DwgkDzbScreen style={styles.tabStyle} navigation={this.props.navigation} />
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
})