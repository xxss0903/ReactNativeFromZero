import React from 'react';
import {
    StyleSheet,
    View,
    Button,
} from 'react-native';


export default class DocViewScreen extends React.Component {
  render(){
      return (
          <View style={styles.container}>
              <Button title={'查看PDF'} onPress={()=>{
                  this._openPdfView();
              }}/>
              <Button title={'Dod-View查看文档'} onPress={()=>{
                  this._openDocView();
              }}/>
          </View>
      );
  }

    _openPdfView() {
        this.props.navigation.navigate('PdfViewScreen');
    }

    _openDocView() {
        this.props.navigation.navigate('DocView');
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

