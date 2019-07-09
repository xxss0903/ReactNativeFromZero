import React from 'react';
import {View, StyleSheet, Button,Text} from 'react-native';
import Picker from 'react-native-picker';
import YearMonthPicker from "./YearMonthPicker";


let data = [];
for (let i = 0; i < 100; i++) {
    data.push(i);
}

let year = [];
for (let j = 2000; j <= 2019; j++) {
    year.push(j);
}
let month = [];
for (let j = 1; j <= 12; j++) {
    month.push(j);
}

let dateData = [
    year,
    month,
];

export default class DatepickerScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date: [],
            num: -1,
            selectedDate: [1, 1],
        }
    }

    render() {
        return (
            <View>
                <Button title={'打开单选'} onPress={() => this._openSinglepicker()}/>
                <Button title={'打开日期选择'} onPress={() => this._openDatepicker()}/>
                <Text>选中的num:{this.state.num}</Text>
                <Text>选中的date:{this.state.date}</Text>
                <YearMonthPicker
                    minYear={2010}
                    onConfirmDate={(date) => {
                        console.log('选中日期 ====>' + date);
                    }}
                    onCancelDate={(date) => {
                        console.log('取消 ====>' + date);
                    }}
                    onChangePicker={(date) => {
                        console.log('改变 ====>' + date);
                    }}
                />
            </View>
        );
    }

    _openSinglepicker() {
        Picker.init({
            pickerData: data,
            selectedValue: this.state.num,
            onPickerConfirm: data => {
                console.log('confirm selected data====>' +data);
            },
            onPickerCancel: data => {
                console.log('cancel selected data====>' +data);
            },
            onPickerSelect: data => {
                console.log('picker selected data====>' +data);
            }
        });
        Picker.show();
    }

    _openDatepicker() {
        Picker.init({
            pickerData: dateData,
            selectedValue: this.state.date,
            onPickerConfirm: data => {
                console.log('confirm selected date====>' +data);
                this.setState({
                    date: data,
                });
            },
            onPickerCancel: data => {
                console.log('cancel selected date====>' +data);
            },
            onPickerSelect: data => {
                console.log('picker selected date====>' +data);
            }
        });
        Picker.show();
    }
}

const styles = StyleSheet.create({});