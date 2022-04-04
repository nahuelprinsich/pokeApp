import React, { useEffect, useState } from 'react';
import { View, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { usePokemon } from '../../hooks/usePokemon';
import { useStorage } from '../../hooks/useStorage';
import styles from './styles';
import ListItem from '../../components/ListItem';
import Spinner from '../../components/Spinner';

const PokemonList = () => {

    const [ pokemonList, setPokemonList ] = useState([]);
    const [ updateList, setUpdateList] = useState(false);

    const { getAll, pokemons, loading } = usePokemon();
    const { favourites } = useStorage();

    const navigation = useNavigation();

    useEffect(() => {
        getAll()
    }, [])

    useEffect(() => {
        if(!!pokemons){
            if(favourites.length > 0){
                let filterPokemons = [...pokemons];
                pokemons.forEach((item, i) => {
                    if(favourites.some(p => p === item.name)){
                        filterPokemons.splice(i, 1);
                        filterPokemons.unshift(item);
                    }
                })
                setPokemonList(filterPokemons);
                setUpdateList(!updateList);
            } else {
                setPokemonList(pokemons);
            }
        }
    }, [pokemons, favourites])

    const renderItem = ({ item }) => {
        return (
            <ListItem title={item.name} pressAction={() => navigation.navigate('PokemonDetail', { name: item.name })} favourites={favourites}/>
        );
    }

    return (
        <>
            { 
                loading ? <Spinner/> : 
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/images/logo.png')} style={styles.imageSize}/>
                    </View>
                    <FlatList
                        data={pokemonList}
                        renderItem={renderItem}
                        keyExtractor={item => item.name}
                        extraData={updateList}
                    />
                </View>
            }
            
        </>
    )
}

export default PokemonList