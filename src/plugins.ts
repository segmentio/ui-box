import { Rule, isRule } from './prefixer'
import hasOwnProperty from './utils/has-own-property'

export interface RuleSet {
  selector: string,
  rules: Rule[]
}

type Plugin = (set: RuleSet) => RuleSet

const plugins: Plugin[] = []

function isRuleSet (set: unknown): set is RuleSet {
  if (typeof set !== 'object' || set === null) {
    return false
  }
  if (!hasOwnProperty(set, 'selector') ||
      typeof set.selector !== 'string') {
    return false
  }
  if (!hasOwnProperty(set, 'rules')) {
    return false
  }

  const rules = set.rules

  return Array.isArray(rules) && rules.every(isRule)
}

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
  let newSet = set

  for (const plugin of plugins) {
    const updatedSet = plugin({...newSet})

    // Skip broken plugins
    if (isRuleSet(updatedSet)) {
      newSet = updatedSet
    } else if (process.env.NODE_ENV !== 'production') {
      throw new Error(`📦 ui-box: Plugin "${plugin.name}" returned an invalid RuleSet.`)
    }
  }

  return newSet
}

/**
 * Removes all previously added plugins.
 */
export function clear(): void {
  plugins.length = 0
}
