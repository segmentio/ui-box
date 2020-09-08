import { Rule } from './prefixer'

export interface RuleSet {
  selector: string,
  rules: Rule[]
}

type Plugin = (set: RuleSet) => RuleSet

const plugins: Plugin[] = []

export function use(plugin: Plugin): void {
  plugins.unshift(plugin)
}

export function apply(set: RuleSet) {
  let newSet = {...set}

  for (const plugin of plugins) {
    newSet = plugin({...newSet})
  }

  return newSet
}

export function clear(): void {
  plugins.length = 0
}
