export const TYPES = ['normal', 'fire', 'water', 'grass'] as const
export type PokemonType = (typeof TYPES)[number]

export type Move = {
  name: string
  type: PokemonType
  power: number 
  accuracy: number
}

export type Pokemon = {
  name: string
  type: PokemonType
  maxHp: number
  attack: number
  defense: number
  moves: Move[]
}

export type BattlePokemon = Pokemon & { currentHp: number }
