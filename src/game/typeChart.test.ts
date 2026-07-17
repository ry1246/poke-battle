import { describe, it, expect } from 'vitest'
import { getTypeEffectiveness } from './typeChart'

describe('getTypeEffectiveness', () => {
  it('抜群なら2倍を返す', () => {
    expect(getTypeEffectiveness('water', 'fire')).toBe(2)
    expect(getTypeEffectiveness('fire', 'grass')).toBe(2)
    expect(getTypeEffectiveness('grass', 'water')).toBe(2)
  })

  it('いまひとつなら0.5倍を返す', () => {
    expect(getTypeEffectiveness('fire', 'water')).toBe(0.5)
    expect(getTypeEffectiveness('grass', 'fire')).toBe(0.5)
    expect(getTypeEffectiveness('water', 'grass')).toBe(0.5)
    expect(getTypeEffectiveness('fire', 'fire')).toBe(0.5)
  })

  it('テーブルに無い組み合わせは等倍（1）を返す', () => {
    expect(getTypeEffectiveness('normal', 'fire')).toBe(1)
    expect(getTypeEffectiveness('normal', 'normal')).toBe(1)
    expect(getTypeEffectiveness('fire', 'normal')).toBe(1)
  })
})

