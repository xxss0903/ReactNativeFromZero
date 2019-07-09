import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Picker from 'react-native-picker'

export default class YearMonthPicker extends React.Component{

    constructor(props){
        super(props);
        this.minYear = this.props.minYear;
        this.maxYear = this.props.maxYear;
        this.initPicker();
        this.state = {
            selectedDate: [2019, 1],
        };
    }

    onPress(){
        Picker.show();
    }

    render(){
        return(
            <TouchableOpacity onPress={this.onPress}>
                <Text>{this.state.selectedDate[0]}-{this.state.selectedDate[1]}</Text>
            </TouchableOpacity>
        );
    }

    initPicker() {
        let {onConfirmDate, onCancelDate, onChangePicker} = this.props;

        let minYear = this.minYear ? this.minYear : 2000;
        let maxyear = this.maxYear ? this.maxYear : 2019;
        let minMonth = 1;
        let maxMonth = 12;

        let dateYear = [];
        let dateMonth = [];
        for (let i = minYear; i <= maxyear; i++) {
            dateYear.push(i);
        }
        for (let i = minMonth; i <= maxMonth; i++) {
            dateMonth.push(i);
        }

        let dateData = [
            dateYear,
            dateMonth,
        ];

        Picker.init({
            pickerData: dateData,
            selectedDate: [2, 3],
            onPickerConfirm: data => {
                this.setState({
                    selectedDate: data,
                });
                if (onConfirmDate) {
                    onConfirmDate(data);
                } else {
                    console.log("select date ====>" + data);
                }
            },
            onPickerCancel: data => {
                if (onCancelDate) {
                    onCancelDate(data);
                } else {
                    console.log("select date ====>" + data);
                }
            },
            onPickerSelect: data => {
                if (onChangePicker) {
                    onChangePicker(data);
                } else {
                    console.log("select date ====>" + data);
                }
            }
        });
        return this;
    }
}