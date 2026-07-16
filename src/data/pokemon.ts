import type { Pokemon } from '../types/battle'
import {
  tackle,
  ember,
  fireBlast,
  waterGun,
  hydroPump,
  vineWhip,
  solarBeam,
} from './move' 

export const charmander: Pokemon = {
  name: 'ヒトカゲ',
  type: 'fire',
  maxHp: 39,
  attack: 52,
  defense: 43,
  moves: [tackle, ember, fireBlast],
}

export const squirtle: Pokemon = {
  name: 'ゼニガメ',
  type: 'water',
  maxHp: 44,
  attack: 48,
  defense: 65,
  moves: [tackle, waterGun, hydroPump],
}

export const bulbasaur: Pokemon = {
  name: 'フシギダネ',
  type: 'grass',
  maxHp: 45,
  attack: 49,
  defense: 49,
  moves: [tackle, vineWhip,  solarBeam],
}

export const POKEMONS: Pokemon[] = [charmander, squirtle, bulbasaur]
