import React from 'react';
import { View, Text, StyleSheet,  Platform } from 'react-native';
import { Picker, Icon, } from 'native-base'

export default class NewGxzjScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // 转接人 1
            zjr: '',
            // 转出单位 2
            zcdw: '',
            // 转入单位 3
            zrdw: '',
            // 转接类型 4
            zjlx: '',
        };
    }

    chooseSubItem(value, data) {
        data.choosedSubItem = value;
        switch (data.type) {
            case 1:
                this.setState({ zjr: value })
                break;
            case 2:
                this.setState({ zcdw: value })
                break;
            case 3:
                this.setState({ zrdw: value })
                break;
            case 4:
                this.setState({ zjlx: value })
                break;

            default:
                break;
        }
    }

    // renderContentItem() {
    //     return (
    //         <View>
    //             <View style={[styles.commonItemTitle]}>
    //                 <Text style={styles.commonItemText}>标题:</Text>
    //                 <Text style={styles.commonItemText}>王某的关系转接</Text>
    //             </View>
    //             <View style={styles.commonItem}>
    //                 <Text style={styles.commonItemText}>转接人</Text>
    //                 <View style={styles.itemRow}>
    //                     <Text style={styles.commonItemText}>王某</Text>
    //                     <Image style={styles.arrowDown} source={require('./arrow_down.png')}></Image>
    //                 </View>
    //             </View>
    //             <View style={styles.commonItem}>
    //                 <Text style={styles.commonItemText}>转接单位</Text>
    //                 <View style={styles.itemRow}>
    //                     <Text style={styles.commonItemText}>隔壁单位</Text>
    //                     <Image style={styles.arrowDown} source={require('./arrow_down.png')}></Image>
    //                 </View>
    //             </View>
    //             <View style={styles.commonItem}>
    //                 <Text style={styles.commonItemText}>转出单位</Text>
    //                 <View style={styles.itemRow}>
    //                     <Text style={styles.commonItemText}>我方单位</Text>
    //                     <Image style={styles.arrowDown} source={require('./arrow_down.png')}></Image>
    //                 </View>
    //             </View>
    //             <View style={styles.commonItem}>
    //                 <Text style={styles.commonItemText}>转接类型</Text>
    //                 <View style={styles.itemRow}>
    //                     <Text style={styles.commonItemText}>【单位内转】</Text>
    //                     <Image style={styles.arrowDown} source={require('./arrow_down.png')}></Image>
    //                 </View>
    //             </View>
    //         </View>
    //     );
    // }

    getSelectedValue(data) {
        console.warn("选择了:" + data.chooseSubItem)
        return data.chooseSubItem;
    }

    renderPickerItem(data, stateValue) {
        let chooseItems = data.subItems
        let title = data.title
        var pickerItems = [];
        for (let i = 0; i < chooseItems.length; i++) {
            pickerItems.push(<Picker.Item label={chooseItems[i]} value={chooseItems[i]} />)
        }
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                    position: 'absolute',
                    fontSize: 20,
                    marginLeft: 20,
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlignVertical: 'center',
                    ...Platform.select({
                        ios: {
                            lineHeight: BOTTOM_TAB_HEIGHT,
                        },
                        android: {

                        }
                    })
                }}>{title}</Text>

                <Picker
                    backgroundColor="#892173"
                    style={{ position: 'absolute' }}
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    textStyle={{
                        paddingLeft: 200,
                    }}
                    itemStyle={{
                        backgroundColor: "#d3d3d3",
                        marginLeft: 0,
                        paddingLeft: 10,
                        justifyContent: "flex-end",
                    }}
                    selectedValue={stateValue}
                    itemTextStyle={{ color: '#788ad2' }}
                    style={{ width: undefined }}
                    onValueChange={(value, position) => { this.chooseSubItem(value, data) }}
                >
                    {pickerItems}
                </Picker>

            </View>
        );
    }

    render() {
        let gxzjItems = [
            {
                title: "转接人",
                subItems: ['Zack', 'Johnson', 'Wilson'],
                choosedSubItem: 'Zack',
                type: 1,
            },
            {
                title: "转出单位",
                subItems: ['第一党支部', '第三党支部', '第五党支部'],
                choosedSubItem: '第一党支部',
                type: 2,
            },
            {
                title: "转入单位",
                subItems: ['第一党支部', '第三党支部', '第五党支部'],
                choosedSubItem: '第一党支部',
                type: 3
            },
            {
                title: "转接类型",
                subItems: ['【单位内转】', '【单位外转】', '【行业外转】'],
                choosedSubItem: '单位内转',
                type: 4,
            }
        ]
        return (
            <View>
                <Text style={[styles.commonItemTitle, ]}>标题: Zack的转移</Text>
                {this.renderPickerItem(gxzjItems[0], this.state.zjr)}
                {this.renderPickerItem(gxzjItems[1], this.state.zcdw)}
                {this.renderPickerItem(gxzjItems[2], this.state.zrdw)}
                {this.renderPickerItem(gxzjItems[3], this.state.zjlx)}
            </View>
        );
    }
}

const SPACE_LEFT = 20;
const SPACE_TOP = 10;
const BOTTOM_TAB_HEIGHT = 40;
const SHENPI_HEIGHT = 60;
const MIDDLE_FONT = 18;
const SMALL_FONT = 14;
const BOTTOM_TAB_WIDTH = 100;
const ARROW_DOWN_SISE = 40;
const TITLE_HEIGHT = 60;

const styles = StyleSheet.create({
    commonItemTitle: {
        fontSize: MIDDLE_FONT,
        paddingLeft: SPACE_LEFT,
        height: TITLE_HEIGHT,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                lineHeight: TITLE_HEIGHT,
            },
            android: {

            }
        })
    },
    itemRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    arrowDown: {
        width: ARROW_DOWN_SISE,
        height: ARROW_DOWN_SISE,
    },
    shenpi: {
        paddingLeft: SPACE_LEFT,
        paddingRight: SPACE_LEFT,
        height: SHENPI_HEIGHT,
        ...Platform.select({
            ios: {
                lineHeight: SHENPI_HEIGHT,
            },
            android: {
                alignItems: "center",
            }
        })
    },
    itemContainer: {
        fontSize: SMALL_FONT,
        height: SHENPI_HEIGHT,
        paddingLeft: SPACE_LEFT,
        paddingRight: SPACE_LEFT,
        paddingTop: SPACE_TOP,
        paddingBottom: SPACE_TOP,
    },
    itemText: {
        fontSize: SMALL_FONT,
    },
    itemDescriptionContainer: {
        marginTop: SPACE_TOP,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    line: {
        height: 1,
        backgroundColor: "#382812",
        paddingLeft: SPACE_LEFT,
        paddingRight: SPACE_LEFT,
    },
    bottomTabs: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: SPACE_TOP,
    },
    commonItem: {
        height: 48,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingLeft: SPACE_LEFT,
        paddingRight: SPACE_LEFT,
    },
    commonItemText: {
        fontSize: MIDDLE_FONT,
    },
    bottomTab: {
        fontSize: SPACE_LEFT,
        height: BOTTOM_TAB_HEIGHT,
        width: BOTTOM_TAB_WIDTH,
        backgroundColor: "#843321",
        color: "#ffffff",
        fontWeight: "bold",
    },
    textCenter: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        ...Platform.select({
            ios: {
                lineHeight: BOTTOM_TAB_HEIGHT,
            },
            android: {

            }
        })
    },
});