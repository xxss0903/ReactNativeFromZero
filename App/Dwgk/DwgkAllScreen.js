import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';

/**
 * 党务公开-全部
 */
export default class DwgkAllScreen extends React.Component {

    _onPressItem() {
        this.props.navigation.navigate('ArticleDetail');
    }

    renderSingleItem(data) {
        return (
            <TouchableOpacity onPress={() => this._onPressItem()}>
                <View style={styles.itemContainer}>
                    <View style={styles.topView}>
                        <Text style={styles.titleText}>{data.title}</Text>
                        <View style={styles.customerView}>
                            <Text style={styles.borderText}>{data.customer}</Text>
                        </View>

                    </View>
                    <View style={styles.middleView}>
                        <Text style={styles.descriptionText}>{data.description}</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <Text style={styles.bottomText}>{data.date}</Text>
                        <Text style={styles.bottomText}>阅读:{data.readerNum}</Text>
                        <Text style={styles.bottomText}>评论:{data.commentNum}</Text>
                    </View>
                    <View style={{backgroundColor: "#000000", height: 1, marginTop: 4}}/>
                </View>
            </TouchableOpacity>

        );
    }

    getItemList() {
        return [
            {
                title: "党务公开",
                description: "xxx 规章制度",
                date: "2019-08-06  1:30",
                customer: '机关/基层党委',
                readerNum: 20,
                commentNum: 12,
                id: 18,
            },
            {
                title: "党务公开",
                description: "xxx 规章制度",
                date: "2019-08-06  1:30",
                customer: '机关/基层党委',
                readerNum: 20,
                commentNum: 12,
                id: 18,
            },
            {
                title: "党务公开",
                description: "xxx 规章制度",
                date: "2019-08-06  1:30",
                customer: '机关/基层党委',
                readerNum: 20,
                commentNum: 12,
                id: 18,
            }
        ]
    }

    renderItemList() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.getItemList()}
                    renderItem={({item}) => this.renderSingleItem(item)}
                />
            </View>
        );
    }

    render() {
        return this.renderItemList();
    }
}

const PADDING_TOP = 4;
const PADDING_LEFT = 15;
const SMALL_FONT = 13;
const BIGGEST_FONT = 20;
const MIDDLE_FONT = 16;
const CONTAINER_PADDING = 20;

const styles = StyleSheet.create({
    customerView: {
        fontSize: MIDDLE_FONT,
        backgroundColor: '#169998',
        paddingLeft: PADDING_LEFT,
        paddingRight: PADDING_LEFT,
        paddingBottom: PADDING_TOP,
        paddingTop: PADDING_TOP,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    borderText: {
        fontSize: MIDDLE_FONT,
        color: '#ffffff'
    },
    bottomText: {
        fontSize: SMALL_FONT,
        color: '#b1b1b1'
    },

    titleText: {
        fontSize: BIGGEST_FONT,
        alignSelf: 'center',
    },
    descriptionText: {
        fontSize: MIDDLE_FONT,
    },
    bottomView: {
        flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginTop: 20,
    },

    middleView: {
        alignItems: "flex-start",
        marginTop: 10,
    },

    topView: {
        flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end",
        marginTop: 10,
    },
    itemContainer: {
        paddingLeft: CONTAINER_PADDING, paddingRight: CONTAINER_PADDING,
    },
});