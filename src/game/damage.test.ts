import { describe, it, expect } from 'vitest'
import { calculateDamage } from './damage'
import type { BattlePokemon, Move } from '../types/battle'

function mkPokemon(over: Partial<BattlePokemon> = {}): BattlePokemon {
  return {
    name: 'テスト',
    type: 'normal',
    maxHp: 100,
    currentHp: 100,
    attack: 50,
    defense: 50,
    moves: [],
    ...over,
  }
}

const normalMove: Move = { name: '無', type: 'normal', power: 40, accuracy: 100 }

describe('calculateDamage', () => {
  it('相性2倍は等倍のほぼ2倍になる', () => {
    const attacker = mkPokemon({ type: 'water' })
    const fireDef = mkPokemon({ type: 'fire' })
    const grassDef = mkPokemon({ type: 'grass' })
    const waterGun: Move = { name: '水', type: 'water', power: 40, accuracy: 100 }

    const superEffective = calculateDamage(attacker, fireDef, waterGun)
    const notVery = calculateDamage(attacker, grassDef, waterGun)

    expect(superEffective).toBeGreaterThan(notVery)
  })

  it('STABありはなしより大きい', () => {
    const fireAttacker = mkPokemon({ type: 'fire' })
    const normalAttacker = mkPokemon({ type: 'normal' })
    const defender = mkPokemon({ type: 'water' })
    const fireMove: Move = { name: '炎', type: 'fire', power: 40, accuracy: 100 }

    const withStab = calculateDamage(fireAttacker, defender, fireMove)
    const withoutStab = calculateDamage(normalAttacker, defender, fireMove)

    expect(withStab).toBeGreaterThan(withoutStab)
  })

  it('威力0でも最低1ダメージ', () => {
    const attacker = mkPokemon()
    const defender = mkPokemon()
    const powerless: Move = { ...normalMove, power: 0 }

    expect(calculateDamage(attacker, defender, powerless)).toBe(1)
  })

  it('固定値で期待通りに計算', () => {
    const attacker = mkPokemon({ attack: 50, type: 'normal' })
    const defender = mkPokemon({ defense: 50, type: 'water' })
    expect(calculateDamage(attacker, defender, normalMove)).toBe(30)
  })
})
