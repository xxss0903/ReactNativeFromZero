import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Button,
    Alert,
    ActivityIndicator,
    NativeAppEventEmitter,
    DeviceEventEmitter,
    NativeModules,
    NativeEventEmitter,
    TouchableHighlight
} from 'react-native';
import OpenFile from 'react-native-doc-viewer';

export default class DocView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: false,
            progress: "",
            donebuttonclicked: false,
        };
        this.eventEmitter = new NativeEventEmitter(NativeModules.RNReactNativeDocViewer);
        this.eventEmitter.addListener('DoneButtonEvent', (data) => {
            /*
            *Done Button Clicked
            * return true
            */
            console.log(data.close);
            this.setState({donebuttonclicked: data.close});
        });
        this.didPressToObjcButton = this.didPressToObjcButton.bind(this);
    }

    componentDidMount() {
        // download progress
        this.eventEmitter.addListener(
            'RNDownloaderProgress',
            (Event) => {
                console.log("Progress - Download " + Event.progress + " %")
                this.setState({progress: Event.progress + " %"});
            }
        );
    }

    componentWillUnmount() {
        this.eventEmitter.removeListener();
    }

    didPressToObjcButton() {
        // We'll sent event press button to ObjetiveC
        NativeModules.RNReactNativeDocViewer.showAlert('This is react-native');
    }


    /*
    * Handle WWW File Method
    * fileType Default == "" you can use it, to set the File Extension (pdf,doc,xls,ppt etc) when in the Url the File Extension is missing.
    */
    handlePress = () => {
        this.setState({animating: true});
        if (Platform.OS === 'ios') {
            OpenFile.openDoc([{
                url: "https://calibre-ebook.com/downloads/demos/demo.docx",
                fileNameOptional: "test filename"
            }], (error, url) => {
                if (error) {
                    this.setState({animating: false});
                } else {
                    this.setState({animating: false});
                    console.log(url)
                }
            })
        } else {
            //Android
            this.setState({animating: true});
            OpenFile.openDoc([{
                url: "http://114.116.29.250:4080/staticdic/2019-06-18/15608464850743867.xls",
                fileName: "sample",
                cache: false,
                fileType: "xls"
            }], (error, url) => {
                if (error) {
                    this.setState({animating: false});
                    console.error(error);
                } else {
                    this.setState({animating: false});
                    console.log(url)
                }
            })
        }

    };

    render() {
        return (

            <View style={styles.container}>
                <TouchableHighlight style={styles.button}
                                    underlayColor='#99d9f4'
                                    onPress={this.didPressToObjcButton}>
                    <Text style={styles.buttonText}/>
                </TouchableHighlight>
                <Text>{this.state.progress}</Text>
                <Text>{this.state.donebuttonclicked ? "Done Button Clicked" : ""}</Text>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[styles.centering, {height: 80}]}
                    size="large"/>
                <Text style={styles.welcome}>
                    Doc Viewer React Native
                </Text>
                <Button
                    onPress={this.handlePress.bind(this)}
                    title="查看文档"
                    accessibilityLabel="See a Document"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
