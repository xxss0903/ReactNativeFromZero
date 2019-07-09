import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';



export default class Item extends React.Component {

    static defaultProps = {
        title: '',
        text: '',
        itemCount: 0,
        titleStyle: View.propTypes.style,
        textStyle: View.propTypes.style,
        viewStyle: View.propTypes.style,
        callBackItemHeight: PropTypes.func

    }


    static propTypes = {
        title: PropTypes.string,
        text: PropTypes.string,
        itemCount: PropTypes.number,
        viewStyle: View.propTypes.style,
        titleStyle: Text.propTypes.style,
        textStyle: Text.propTypes.style,
        callBackItemHeight: PropTypes.func

    }

    constructor(props) {
        super(props);
        this.titleHeight = 0;
        this.textHeight = 0;
        this.state = {
            itemHeight: 40,
            reload: false,
        }

    }

    _titleLayout(event) {
        this.titleHeight = event.nativeEvent.layout.height
        // this.getItemHeight(this.titleHeight,this.textHeight)

    }

    _textLayout(event) {

        this.textHeight = event.nativeEvent.layout.height
        this.getItemHeight(this.titleHeight, this.textHeight)
    }

    getItemHeight(titleHeight, textHeight) {

        let maxHeight = titleHeight > textHeight ? titleHeight : textHeight
        this.setState({
            itemHeight: maxHeight
        })
        if (this.props.callBackItemHeight) {
            this.props.callBackItemHeight(maxHeight)
        }
        this.refs.title.setNativeProps({
            style: {
                top: (this.state.itemHeight - titleHeight) / 2,
                left: 16,
                width: 134,
                backgroundColor: 'transparent',
                height: titleHeight,
                justifyContent: 'center'

            }
        });
        this.refs.text.setNativeProps({
            style: {
                left: 10,
                top: (this.state.itemHeight - textHeight) / 2,
                height: textHeight,
                backgroundColor: 'transparent',
                justifyContent: 'center'
            }
        });
        this.refs.seperate.setNativeProps({
            style: {
                position: 'absolute', left: 16, height: 1, backgroundColor: '#1a1a1a', top: this.state.itemHeight - 1
            }
        })
    }

    render() {

        let container = {height: this.state.itemHeight}
        return (
            <View style={[styles.item, container]}>
                <View ref="title">
                    <Text style={{color: '#666666'}} onLayout={this._titleLayout.bind(this)}>
                        {this.props.title}
                    </Text>
                </View>

                <View ref="text">
                    <Text style={{color: '#000000'}} onLayout={this._textLayout.bind(this)}>
                        {this.props.text}
                    </Text>
                </View>
                <View ref="seperate"></View>
            </View>
        )


    }
}

const styles = StyleSheet.create({

    item: {
        flexDirection: 'row'
    }``

});