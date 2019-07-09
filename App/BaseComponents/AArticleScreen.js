import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BaseArticleScreen from "./BaseArticleScreen";

export default class AArticleScreen extends BaseArticleScreen {



    getArticleTitle(): String {
        return 'A Article'
    }

    getArticleContent(){
        return(
            <Text>Article Content</Text>
        );
    }

    getArticleFooter(){
        return(
            <Text>Article Footer</Text>
        );
    }

    render(){
        return super.render();
    }
}

const styles = StyleSheet.create({});