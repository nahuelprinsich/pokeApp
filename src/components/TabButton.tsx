import React from "react";
import { Text, TouchableOpacity, View } from "react-native";


const TabButton = ({show, pressAction, title}) => {
    return (
        <TouchableOpacity onPress={() => pressAction()}>
            <View>
                <Text style={{textAlign: 'center', fontSize: 20, fontWeight: show ? 'bold' : 'normal', color: '#37474f'}}>{title}</Text>
                {
                    show && <View style={{ borderBottomColor: '#333333', borderBottomWidth: 1}}></View>
                }
            </View>
        </TouchableOpacity>
    )
}

export default TabButton