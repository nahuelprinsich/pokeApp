import api from '../index';

const SUCCESS = 'success';
const OK = 'OK';
const ERROR = 'error';

export interface IPokemon {
  name: string;
  height?: number
  weight?: number
  abilities?: any[]
  moves?: any[]
  stats?: any[]
  types?: any[]
}

export class Pokemon implements IPokemon {
  name: string
  height?: number
  weight?: number
  image?: string
  abilities?: any[]
  moves?: any[]
  stats?: any[]
  types?: any[]

  constructor(name: string, height?: number, weight?: number, image?: string, abilites?: any[], moves?: any, stats?: any[], types: any[]) {
    this.name = name
    this.height = height
    this.weight = weight
    this.image = image
    this.abilities = abilites
    this.moves = moves
    this.stats = stats
    this.types = types
  }

}

const getAll = async () => {

  try {
    const response = await api.get(`/pokemon`);
    return {
      status: SUCCESS,
      message: OK,
      data: response.data.results
    }
  } catch(error) {
    throw {
      status: ERROR,
      message: 'Ocurrió un error al traer los datos, intentá nuevamente en unos minutos.',
      error: JSON.stringify(error)
    }
  }

}

const getByName = async (name: string) => {
  
  try {
    const response = await api.get<Pokemon>(`/pokemon/${name}`);
    return {
      status: SUCCESS,
      message: OK,
      data: mapPopkemon(response.data)
    }
  } catch(error) {
    throw {
      status: ERROR,
      message: 'Ocurrió un error al traer los datos, intentá nuevamente en unos minutos.',
      error: JSON.stringify(error)
    }
  }
  
}

const mapPopkemon = (data: any) => {

  const pokemon = new Pokemon(
    data.name,
    data.height,
    data.weight,
    data.sprites.other.home.front_default,
    data.abilities,
    data.moves,
    data.stats,
    data.types,
  ); 

  return pokemon;

}

export default { getAll, getByName }