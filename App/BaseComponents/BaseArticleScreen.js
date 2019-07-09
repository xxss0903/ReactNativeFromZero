import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container} from "native-base";
import BaseScreen from "./BaseScreen";

export default class BaseArticleScreen extends BaseScreen {
    constructor(props) {
        super(props);
    }


    renderArticleHeader() {
        return (
            <View>
                <Text>{this.getArticleTitle() ? this.getArticleTitle() : ""}</Text>
            </View>
        );
    }

    renderArticleContent() {
        return (
            <View>
               {this.getArticleContent ? this.getArticleContent() : null}
            </View>
        );
    }

    renderArticleFooter() {
        return(
            <View>
                {this.getArticleFooter() ? this.getArticleFooter() : null}
            </View>
        );
    }

    render() {
        return (
            <Container>
                {this.renderArticleHeader()}
                {this.renderArticleContent()}
                {this.renderArticleFooter()}
            </Container>
        )
    }


    getArticleTitle() {

    }

    getArticleContent(){

    }

    getArticleFooter(){

    }
}

