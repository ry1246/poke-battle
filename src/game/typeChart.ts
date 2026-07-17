import type { PokemonType } from '../types/battle'

// 攻撃タイプ: { 防御タイプ: 倍率 } 未記載の組み合わせは等倍(1)
// normal は全タイプ等倍のため省略（ゴーストなどが現状ない）
const TYPE_CHART: Partial<Record<PokemonType, Partial<Record<PokemonType, number>>>> = {
  fire: { grass: 2, fire: 0.5, water: 0.5 },
  water: { fire: 2, water: 0.5, grass: 0.5 },
  grass: { water: 2, fire: 0.5, grass: 0.5 },
}

// 単タイプ同士の倍率を返す順関数（React 非依存）
export function getTypeEffectiveness(
  attackType: PokemonType,
  defenseType: PokemonType,
): number {
  return TYPE_CHART[attackType]?.[defenseType] ?? 1
}

