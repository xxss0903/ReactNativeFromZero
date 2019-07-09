import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';

export default class HorizontalFlatList extends React.Component {

    _renderItem(item){
        return(
            <TouchableOpacity style={{marginTop:10,marginBottom :10}}
                              onPress={()=>console.warn('click item')}>
                <Text style={{fontSize:13,color:'#D11519',alignItems:'center'}}>{item}/</Text>
            </TouchableOpacity>
        )
    }

    render() {
        let navTab = ['Top/', 'First column/', 'Second column/', 'Third column/', 'Fourth column/', 'Fifth column/', 'Sixth column/'];
        return (
            <View>
                <FlatList
                    horizontal={true}
                    keyExtractor={(item,index)=>{
                        if (item.id) {
                            return `${item.id}`;
                        }
                        return index;
                    }}
                    style={{flexDirection:'row'}}
                    data={navTab}
                    renderItem={({item}) => this._renderItem(item)}
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={true}
                    bounces = {false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});