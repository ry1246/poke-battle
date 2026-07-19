import type { BattlePokemon, Move } from '../types/battle'
import { getTypeEffectiveness } from './typeChart'

// 命中した前提で、1回の攻撃ダメージを返す
// 命中判定(accuracy)は呼び出しがわ(reducer)の責務
export function calculateDamage(
  attacker: BattlePokemon,
  defender: BattlePokemon,
  move: Move,
): number {
  // 基礎ダメージ: 攻撃/防御の比 * 威力で調整
  const base = (attacker.attack / defender.defense) * move.power * 0.5

  // タイプ一致補正(STAB): 技タイプ = 攻撃タイプなら1.5倍
  const stab = move.type === attacker.type ? 1.5 : 1

  // 相性倍率: 2 / 1 / 0.5 etc...
  const effectiveness = getTypeEffectiveness(move.type, defender.type)
  const damage = Math.floor(base * stab * effectiveness)

  // 当たった以上は最低1ダメージ
  return Math.max(1, damage)
}
