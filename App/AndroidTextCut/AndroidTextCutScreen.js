import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomText from "./CustomText";
import BaseScreen from "../BaseComponents/BaseScreen";

let reseted = false;
export default class AndroidTextCutScreen2 extends BaseScreen {

    constructor(props) {
        super(props)
        this.state = {
            reload: false,
        }
    }

    _textLayout8(event) {
        this.titleHeight = event.nativeEvent.layout.height;
        let finalHeight = this.titleHeight + 10;
        // this._resetText8Height(finalHeight);
        console.warn('文本高度:' + finalHeight);
    }

    render() {
        reseted = false;
        return (
            <View>
                <Text>安卓两行显示文字，下面被截掉</Text>
                <View>
                    {/*<Text numberOfLines={3} style={styles.multiLine1}>不设置行高:*/}
                    {/*    测试两行Line的显示，文字是否被截去了下半部分;测试两行Line的显示，文字是否被截去了下半部分</Text>*/}
                    {/*<View style={{height: 10}}/>*/}
                    {/*<Text numberOfLines={2} style={styles.multiLine2}>设置行高20:*/}
                    {/*    测试两行Line的显示，文字是否被截去了下半部分;测试两行Line的显示，文字是否被截去了下半部分</Text>*/}
                    {/*<View style={{height: 10}}/>*/}
                    {/*<Text numberOfLines={2} style={styles.multiLine3}>设置行高40:*/}
                    {/*    测试两行Line的显示，文字是否被截去了下半部分;测试两行Line的显示，文字是否被截去了下半部分</Text>*/}
                    {/*<View style={{height: 10}}/>*/}
                    {/*<Text numberOfLines={2} style={styles.multiLine4}>设置行高100:*/}
                    {/*    测试两行Line的显示，文字是否被截去了下半部分;测试两行Line的显示，文字是否被截去了下半部分</Text>*/}
                    {/*<View style={{height: 10}}/>*/}
                    {/*<Text numberOfLines={2} style={styles.multiLine5}>不设置行高，设置bottompadding=10:*/}
                    {/*    测试两行Line的显示，文字是否被截去了下半部分;测试两行Line的显示，文字是否被截去了下半部分</Text>*/}
                    {/*<View style={{height: 10}}/>*/}
                    {/*<Text numberOfLines={2} style={styles.multiLine6}>不设置行高，设置marginbottom=10:*/}
                    {/*    测试两行Line的显示，文字是否被截去了下半部分;测试两行Line的显示，文字是否被截去了下半部分</Text>*/}
                    {/*<View style={{height: 10}}/>*/}
                    {/*<View>*/}
                    {/*    <Text numberOfLines={2} style={styles.multiLine7}>使用View进行包裹:*/}
                    {/*        测试两行Line的显示，文字是否被截去了下半部分;测试两行Line的显示，文字是否被截去了下半部分</Text>*/}
                    {/*</View>*/}
                    {/*<View style={{height: 10}}/>*/}
                    {/*<Text numberOfLines={2} style={styles.multiLine8}>固定行高为字体大小的两倍:*/}
                    {/*    测试两行Line的显示，文字是否被截去了下半部分;测试两行Line的显示，文字是否被截去了下半部分</Text>*/}
                    {/*<View style={{height: 10}}/>*/}
                    <View>
                        <Text numberOfLines={2}
                              ref={'text8'}
                              onLayout={this._textLayout8.bind(this)}
                              style={styles.multiLine8}>获取Text的高度:
                            测试两行Line的显示，文字是否被截去了下半部分;测试两行Line的显示，文字是否被截去了下半部分</Text>
                    </View>
                    <View style={{height: 10}}/>
                    <CustomText customTextStyle={styles.multiLine7}  numberOfLines={2} content={'自定义文本动态计算高度:测试两行Line的显示，文字是否被截去了下半部分;测试两行Line的显示，文字是否被截去了下半部分'}/>
                </View>
            </View>
        );
    }

    _resetText8Height(finalHeight) {
        if (reseted) {
            return
        }
        this.refs.text8.setNativeProps({
            style: {
                height: finalHeight,
            },
        });
        reseted = true;
    }
}

const styles = StyleSheet.create({
    multiLine1: {
        backgroundColor: '#833214',
    },
    multiLine2: {
        backgroundColor: '#833214',
        height: 20,
    },
    multiLine3: {
        backgroundColor: '#833214',
        height: 40,
    },
    multiLine4: {
        backgroundColor: '#833214',
        height: 100,
    },
    multiLine5: {
        backgroundColor: '#833214',
        paddingBottom: 10,
    },
    multiLine6: {
        backgroundColor: '#833214',
        marginBottom: 10,
    },
    multiLine7: {
        backgroundColor: '#833214',
        padding: 8,
        fontSize: 26,
    },
    multiLine8: {
        backgroundColor: '#833214',
        fontSize: 20,
    },
});