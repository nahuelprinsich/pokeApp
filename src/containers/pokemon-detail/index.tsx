import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity  } from 'react-native';

import Abilities from '../../components/Abilities';
import Detail from '../../components/Detail';
import Moves from '../../components/Moves';
import Spinner from '../../components/Spinner';
import Stats from '../../components/Stats';
import TabButton from '../../components/TabButton';
import { usePokemon } from '../../hooks/usePokemon';
import { useStorage } from '../../hooks/useStorage';
import { capitalizeFirstLetter } from '../../utils/capitalizeString';
import styles from './styles';

const PokemonDetail = ({ route }) => {

    const [ showDetail, setShowDetail ] = useState(true);
    const [ showStats, setShowStats ] = useState(false);
    const [ showAbilities, setShowAbilities ] = useState(false);
    const [ showMoves, setShowMoves ] = useState(false);
    const [ favourite, setFavourite ] = useState(false);

    const navigation = useNavigation();
    const { getByName, pokemon, loading } = usePokemon();
    const { favourites, storeData } = useStorage();

    const { name } = route.params;

    useEffect(() => {
        navigation.setOptions({title: capitalizeFirstLetter(name)});
    }, [name])

    useEffect(() => {
        getByName(name);
    }, [])

    useEffect(() => {
        if(favourites.length > 0 && !!pokemon){
            setFavourite(favourites.some(n => n === pokemon.name));
        }
    }, [favourites, pokemon])

    const changeTab = (tab: string) => {
        switch(tab){
            case 'detail':
                setShowDetail(true);
                setShowStats(false);
                setShowAbilities(false);
                setShowMoves(false);
                break
            case 'stats':
                setShowDetail(false);
                setShowStats(true);
                setShowAbilities(false);
                setShowMoves(false);
            break
            case 'abilities':
                setShowDetail(false);
                setShowStats(false);
                setShowAbilities(true);
                setShowMoves(false);
            break
            case 'moves':
                setShowDetail(false);
                setShowStats(false);
                setShowAbilities(false);
                setShowMoves(true);
            break
        }
    }

    const addFavourite = (name: string) => {
        setFavourite(true);
        storeData([...favourites, name]);
    }

    const deleteFavourite = (name: string) => {
        setFavourite(false);
        storeData(favourites.filter(n => n !== name));
    }

    return (
        <View style={styles.container}>
            { loading && <Spinner/> }
            { 
                !!pokemon && 
                <ScrollView>
                    <View style={styles.imageContainer}>
                        {
                            !favourite ?
                                <TouchableOpacity onPress={() => addFavourite(pokemon.name)} style={styles.heartContainer}>
                                    <Image source={require('../../assets/images/heartOutlined.png')} style={styles.hearImage}/>
                                </TouchableOpacity>
                                
                            :
                                <TouchableOpacity onPress={() => deleteFavourite(pokemon.name)} style={styles.heartContainer}>
                                    <Image source={require('../../assets/images/heartFull.png')} style={styles.hearImage}/>
                                </TouchableOpacity>   
                        }
                        <Image source={{uri: pokemon.image}} style={styles.pokeImage} resizeMode={'contain'}/>
                    </View>
                    <View style={styles.dataContainer}>
                        <View style={styles.tab}>
                            <TabButton show={showDetail} pressAction={() => changeTab('detail')} title={'Detail'}/>
                            <TabButton show={showStats} pressAction={() => changeTab('stats')} title={'Stats'}/>
                            <TabButton show={showAbilities} pressAction={() => changeTab('abilities')} title={'Abilities'}/>
                            <TabButton show={showMoves} pressAction={() => changeTab('moves')} title={'Moves'}/>
                        </View>
                        <View>
                            {
                                showDetail && <Detail types={pokemon.types} height={pokemon.height} weight={pokemon.weight}/>
                            }
                            {
                                showStats && <Stats stats={pokemon.stats}/>
                            }
                            {
                                showAbilities && <Abilities abilities={pokemon.abilities}/>
                            }
                            {
                                showMoves && <Moves moves={pokemon.moves}/>
                            }
                        </View>
                    </View>
                </ScrollView>
            }
        </View>
    )
}

export default PokemonDetail