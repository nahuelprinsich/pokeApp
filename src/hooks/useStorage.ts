import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {

    const [ favourites, setFavourites ] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const storeData = async (value: string[]) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@storage_Favourites', jsonValue);
        } catch (e) {
            
        }
    }
    
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Favourites');
            if(jsonValue !== null) {
                setFavourites(JSON.parse(jsonValue));
            } else {
                setFavourites([]);
            }
        } catch(e) {
            
        }
    }
  
    return { favourites, storeData, getData }

}

export { useStorage }