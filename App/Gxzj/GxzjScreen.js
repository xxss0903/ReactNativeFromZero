import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, FlatList} from 'react-native';
import { Icon, Fab } from 'native-base';


export default class GxzjScreen extends React.Component {

  _onPress(msg) {
    console.warn("click: " + msg);
  }

  _onPressItem() {
    console.warn("click 关系转接Item ");
    this.props.navigation.navigate('GxzjDetailScreen');
  }

  renderSingleItem(data) {
    return (
      <TouchableOpacity onPress={()=>this._onPressItem()}>
        <View style={styles.itemContainer}>
          <View style={styles.topView}>
            <Text style={styles.titleText}>{data.title}</Text>
            <Text style={styles.borderText} onPress={(msg) => { this._onPress("单位内转") }}>单位内转</Text>
          </View>
          <View style={styles.middleView}>
            <Text style={styles.titleText} >{data.transform}</Text>
          </View>
          <View style={styles.bottomView} >
            <Text >发起日期：{data.date}}</Text>
            <Text style={styles.borderText} onPress={(msg) => { this._onPress("已转接") }}>已转接</Text>
          </View>
          <View style={{ backgroundColor: "#000000", height: 1, marginTop: 4 }}></View>
        </View>
      </TouchableOpacity>

    );
  }

  getItemList() {
    return [{ title: "Jack 党员关系转接", transform: "第1支部  转 第2支部", date: "2019-08-06  1:30", isDwnz: true, isTransformed: true },
    { title: "Zack 党员关系转接", transform: "第3支部  转 第1支部", date: "2019-08-06  1:30", isDwnz: true, isTransformed: true },
    { title: "Wilson 党员关系转接", transform: "第3支部  转 第2支部", date: "2019-06-06  1:30", isDwnz: true, isTransformed: true }]
  }

  createNewGxzj(){
    this.props.navigation.navigate('NewGxzjScreen');
  }

  renderItemList() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.getItemList()}
          renderItem={({ item }) => this.renderSingleItem(item)}
        >
        </FlatList>
          <Fab
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.createNewGxzj()}>
            <Icon name="add" />
          </Fab>
      </View>
    );
  }

  render() {
    return this.renderItemList();
  }
}

const PADDING_TOP = 3;
const PADDING_LEFT = 6;
const SMALL_FONT = 13;
const BIGGEST_FONT = 20;
const MIDDLE_FONT = 16;
const CONTAINER_PADDING = 20;

const styles = StyleSheet.create({
  borderText: {
    fontSize: SMALL_FONT,
    borderWidth: 1,
    paddingLeft: PADDING_LEFT,
    paddingRight: PADDING_LEFT,
    paddingBottom: PADDING_TOP,
    paddingTop: PADDING_TOP,
    borderColor: "#000000"
  },

  titleText: {
    fontSize: BIGGEST_FONT,
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