import React from 'react';
import {
    Button,
    View,
    Text,
    StyleSheet,
    NativeAppEventEmitter
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'; // Version can be specified in package.json
import GxzjScreen from './App/Gxzj/GxzjScreen';
import GxzjDetailScreen from './App/Gxzj/GxzjDetailScreen';
import NewGxzjScreen from './App/Gxzj/NewGxzjScreen';
import DwgkScreen from "./App/Dwgk/DwgkScreen";
import DwfwScreen from "./App/Dwgk/DwfwScreen";
import ZjtxScreen from './App/Zjtx/ZjtxScreen'
import ZjtxFirstScreen from "./App/Zjtx/ZjtxFirstScreen";
import ZjtxSecondScreen from "./App/Zjtx/ZjtxSecondScreen";
import AndroidCutScreen from "./App/AndroidTextCut/AndroidTextCutScreen";
import DocViewScreen from "./App/DocView/DocViewScreen";
import PdfView from "./App/DocView/PdfView";
import DocView from "./App/DocView/DocView";
import AArticleScreen from "./App/BaseComponents/AArticleScreen";
import HorizontalFlatList from "./App/HorizontalList/HorizontalFlatList";
import GetuiPushScreen from "./App/Getui/GetuiPushScreen";
import DatepickerScreen from "./App/Datepicker/DatepickerScreen";


class HomeScreen extends React.Component {

    _enterGxzj() {
        this.props.navigation.navigate('Gxzj');
    }

    _enterDwfw(){
        this.props.navigation.navigate('Dwfw');
    }

    _enterZjtx(){
        this.props.navigation.navigate('Zjtx')
    }

    _enterAndroidCut() {
        this.props.navigation.navigate('AndroidCutScreen');

    }

    _enterDocViewer(){
        this.props.navigation.navigate('DocViewScreen', {title: '文档查看器'});
    }

    _enterComponentJc(){
        this.props.navigation.navigate('ArticleScreen')
    }

    _enterHorizontalFlatList(){
        this.props.navigation.navigate('HorizontalListScreen');
    }

    _enterGetuiPush(){
        this.props.navigation.navigate('GetuiScreen');
    }

    _enterDatepicker(){
        this.props.navigation.navigate('DatepickerScreen');
    }

    render() {
        return (
            <View>
                <Button title="进入关系转接" onPress={() => {
                    this._enterGxzj()
                }}/>
                <Button title="进入党务公开" onPress={() => {
                    this._enterDwfw()
                }}/>
                <Button title="进入组件通信" onPress={() => {
                    this._enterZjtx()
                }}/>
                <Button title="进入Android文本显示测试" onPress={() => {
                    this._enterAndroidCut()
                }}/>
                <Button title="进入文档查看" onPress={() => {
                    this._enterDocViewer()
                }}/>
                <Button title="进入Component继承例子" onPress={() => {
                    this._enterComponentJc()
                }}/>
                <Button title="进入横向的list" onPress={() => {
                    this._enterHorizontalFlatList()
                }}/>
                <Button title="进入个推推送页面" onPress={() => {
                    this._enterGetuiPush()
                }}/>
                <Button title="进入日期选择" onPress={() => {
                    this._enterDatepicker()
                }}/>
            </View>
        );
    }


}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Gxzj: GxzjScreen,
        GxzjDetailScreen: GxzjDetailScreen,
        NewGxzjScreen: NewGxzjScreen,
        Dwgk: DwgkScreen,
        Dwfw: DwfwScreen,
        Zjtx: ZjtxScreen,
        ZjtxFirst: ZjtxFirstScreen,
        ZjtxSecond: ZjtxSecondScreen,
        AndroidCutScreen: AndroidCutScreen,
        DocViewScreen: DocViewScreen,
        PdfViewScreen: PdfView,
        DocView: DocView,
        ArticleScreen: AArticleScreen,
        HorizontalListScreen: HorizontalFlatList,
        GetuiScreen: GetuiPushScreen,
        DatepickerScreen: DatepickerScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this._registeGetui();
    }

    render() {
        return <AppContainer/>;
    }

    _registeGetui() {
        this.receiveRemoteNotificationSub = NativeAppEventEmitter.addListener(
            'receiveRemoteNotification',
            (notification) => {
                //消息类型分为 cmd 和 payload 透传消息，具体的消息体格式会有差异
                switch (notification.type) {
                    case "cid":
                        console.log('cid 消息通知 ====> ', JSON.stringify(notification));
                        break;
                    case "cmd":
                        console.log('cmd 消息通知 ====>',JSON.stringify(notification));
                        break;
                    case "payload":
                        console.log('payload 消息通知 ====>',JSON.stringify(notification));
                        break;
                    //新增回调通知到达，点击回调
                    case 'notificationArrived':
                        console.log('notificationArrived 通知到达 ====>',JSON.stringify(notification));
                        break;
                    case 'notificationClicked':
                        console.log('notificationArrived 通知点击 ====>',JSON.stringify(notification));
                        break;
                    default:
                }
            }
        );
    }

    componentWillUnmount(): void {
        console.log('remove getui  ====>');
        this.receiveRemoteNotificationSub.remove();
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