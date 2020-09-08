import { Rule } from './prefixer'

export interface RuleSet {
  selector: string,
  rules: Rule[]
}

type Plugin = (set: RuleSet) => RuleSet

const plugins: Plugin[] = []

/**
 * Adds a plugin that ui-box will apply before emitting styles into a stylesheet.
 * Plugins are applied in the *opposite* order of insertion (most recent `use` first).
 */
export function use(plugin: Plugin): void {
  plugins.unshift(plugin)
}

/**
 * Applies the added plugins to a given set of CSS rules.
 * Should be used only internally by ui-box, not by plugin authors or consumers.
 */
export function apply(set: RuleSet) {
  let newSet = {...set}

  for (const plugin of plugins) {
    newSet = plugin({...newSet})
  }

  return newSet
}

/**
 * Removes all previously added plugins.
 */
export function clear(): void {
  plugins.length = 0
}
