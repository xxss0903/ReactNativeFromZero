import React from 'react';
import {NativeModules, Button, View, Text, Image, StyleSheet, FlatList, Linking, Platform} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'; // Version can be specified in package.json

const styles = StyleSheet.create({
    mainContainer: {backgroundColor: '#fff', justifyContent: 'center', height: 140},
    title: {fontSize: 16, color: '#e6615c', marginTop: 12},
    image: {width: 160, height: 120},
    description: {color: '#676767', fontSize: 14},
    status: {fontSize: 8, color: '#f5f5f9', marginHorizontal: 6},
    contentContainer: {marginLeft: 33, marginTop: 12, marginBottom: 12, marginRight: 12, flex: 1, flexDirection: 'row'},
    statusContainer: {
        borderRadius: 7,
        height: 15,
        backgroundColor: '#D32720',
        marginLeft: 13,
        alignItems: 'center',
        justifyContent: 'center'
    },
    statusOutContainer: {flex: 1, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'flex-end'},
    bottomLine: {backgroundColor: '#000000', height: 1},
    leftContainer: {},
});

class HomeScreen extends React.Component {
    handleItemClick(appUrl) {
        switch (Platform.OS) {
            case 'ios':
                console.warn('goto ios app: ' + appUrl);
                var CalendarManager = NativeModules.CallAppModel;
                CalendarManager.callOtherApp("react call other app");
                break;
            case 'android':
                console.warn('goto android app: ' + appUrl);
                break;
            default:
                console.warn('default os');
                break;
        }
    }

    getStudyItems() {
        return [{
            title: '学习强国',
            description: '学习强国，天天学习',
            imageUrl: '../../Assets/img/partyEmpty.jpg',
            openUrl: 'dtxuexi://appclient',
        },
            {
                title: '在线学习',
                description: '"诚至诚"网络课堂',
                imageUrl: '../../Assets/img/partyEmpty.jpg',
                openUrl: 'zhixueyun://123',
            }]
    }

    renderRow(item) {
        return (<View style={styles.mainContainer} onStartShouldSetResponder={() => {
            this.handleItemClick(item.openUrl)
        }}>
            <View style={styles.contentContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.title} ellipsizeMode={'tail'}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
                <View style={styles.statusOutContainer}>
                    <Image style={styles.image} source={require('../../RnNavigateDemo/partyEmpty.jpg')}/>
                </View>
            </View>
            <View style={styles.bottomLine}/>
        </View>)
    }

    render() {
        return (
            <FlatList data={this.getStudyItems()} renderItem={({item}) => this.renderRow(item)}></FlatList>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>

                {/* Look here! We "push" the Details route */}

                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}
