import React from 'react';
import {View, Text, Platform} from 'react-native';

/**
 * 自动计算Text高度
 */
const ADDITIONAL_HEIGHT = 5;
export default class CustomText extends React.Component {

    _resetTextHeight(event) {
        if (Platform.OS === 'android') {
            let heightRatio = this.props.numberOfLines;
            if (!heightRatio) {
                heightRatio = 2;
            }
            this.titleHeight = event.nativeEvent.layout.height;
            let finalHeight = this.titleHeight + (ADDITIONAL_HEIGHT * heightRatio);
            this._resetTextHeightImpl(finalHeight);
        }
    }

    _resetTextHeightImpl(finalHeight) {
        if (this.reseted) {
            return
        }
        this.refs.customText.setNativeProps({
            style: {
                height: finalHeight,
            },
        });
        this.reseted = true;
    }

    render() {
        this.reseted = false;
        return (
            <View>
                <Text
                    style={this.props.customTextStyle}
                    ref={'customText'}
                    onLayout={this._resetTextHeight.bind(this)}
                    numberOfLines={this.props.numberOfLines}>
                    {this.props.content}
                </Text>
            </View>
        );
    }
}
