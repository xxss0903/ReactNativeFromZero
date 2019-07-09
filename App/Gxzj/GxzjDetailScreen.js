import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking, Platform } from 'react-native';
import { Footer, FooterTab, Button, Container, Content, } from 'native-base'

export default class GxzjDetailScreen extends React.Component {

    renderShenpiItem(data) {
        return (
            <View style={[styles.itemContainer]}>
                <Text style={styles.itemText}>党委 | {data.dangwei}</Text>
                <View style={styles.itemDescriptionContainer}>
                    <Text style={styles.itemText}>{data.status}</Text>
                    <Text style={styles.itemText}>{data.date}</Text>
                </View>
            </View>
        );
    }
    // status: 0：未确认,1:确认, 2：同意
    getShenpiList() {
        return [{ date: "2019-03-02", status: "同意", dangwei: "机关党委" }, { date: "2019-03-10", status: "确认", dangwei: "第二支部" }]
    }

    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <View style={styles.commonItem}>
                            <Text style={styles.commonItemText}>转接人</Text>
                            <Text style={styles.commonItemText}>王某</Text>
                        </View>
                        <View style={styles.commonItem}>
                            <Text style={styles.commonItemText}>转接单位</Text>
                            <Text style={styles.commonItemText}>隔壁单位</Text>
                        </View>
                        <View style={styles.commonItem}>
                            <Text style={styles.commonItemText}>转出单位</Text>
                            <Text style={styles.commonItemText}>我方单位</Text>
                        </View>
                        <View style={styles.commonItem}>
                            <Text style={styles.commonItemText}>转接类型</Text>
                            <Text style={styles.commonItemText}>【单位内转】</Text>
                        </View>
                        <View style={styles.line}></View>
                        <View>
                            <Text style={styles.shenpi}>审批</Text>
                            <FlatList
                                data={this.getShenpiList()}
                                renderItem={({ item }) => this.renderShenpiItem(item)}>
                            </FlatList>
                        </View>
                    </View>
                </Content>

                <Footer bottomTab>
                    <FooterTab>
                        <Button>
                            <Text style={styles.bottomTab}>删除</Text>
                        </Button>
                        <Button>
                            <Text style={styles.bottomTab}>拒绝</Text>
                        </Button>
                        <Button>
                            <Text style={styles.bottomTab}>同意</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>

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

const styles = StyleSheet.create({
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