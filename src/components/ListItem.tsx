import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions, Image, View } from "react-native";
import { capitalizeFirstLetter } from "../utils/capitalizeString";

const windowWidth = Dimensions.get('window').width;

const ListItem = ({ title, pressAction, favourites }) => (
    <TouchableOpacity style={styles.item} onPress={() => pressAction()}>
        <View style={styles.container}>
            <Text style={styles.title}>{capitalizeFirstLetter(title)}</Text>
            { 
                favourites.some(f => f === title) && 
                <Image source={require('../assets/images/heartFullBlack.png')} style={styles.imageSize}/> 
            }
        </View>
        <Text style={styles.title}>{'>'}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f1f1f1',
      width: windowWidth,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      color: '#37474f'
    },
    container: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    imageSize: {
        width: 20, 
        height: 20, 
        marginLeft: 10
    }
});

export default ListItem