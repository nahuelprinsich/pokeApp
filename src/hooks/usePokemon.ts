import React, { useState } from "react";
import { PokemonApi } from '../services/pokemon/index'
import { Pokemon } from "../services/pokemon/Pokemon";

const usePokemon = () => {

    const [ pokemons, setPokemos ] = useState([]);
    const [ pokemon, setPokemon ] = useState<Pokemon>();
    const [ loading, setLoading ] = useState(false);

    const getAll = async () => {
        try {
            setLoading(true);
            setTimeout(async () => {
                const result = await PokemonApi.getAll();
                setPokemos(result.data);
                setLoading(false);
            }, 1000)
        } catch (error) {

        }
    }

    const getByName = async (name: string) => {
        try {
            setLoading(true);
            setTimeout(async () => {
                const result = await PokemonApi.getByName(name);
                setPokemon(result.data);
                setLoading(false);
            }, 1000)
            
        } catch (error) {

        }
    }

    return { getAll, getByName, pokemons, pokemon, loading }

}

export { usePokemon }