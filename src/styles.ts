import StyleSheet from './utils/style-sheet'

const styleSheet = new StyleSheet({})
styleSheet.inject()

export function add(styles: string) {
  styleSheet.insert(styles)
}

export function getAll() {
  // Convert rules array to a string
  return styleSheet
    .rules()
    .reduce((combinedRules: string, rule: {cssText: string; }) => combinedRules + rule.cssText, '')
}

export function clear() {
  styleSheet.flush()
  styleSheet.inject()
}
