import StyleSheet from './utils/style-sheet'

const styleSheet = new StyleSheet()
styleSheet.inject()

export function addStyles(styles) {
  styleSheet.insert(styles)
}

export function getStyles() {
  return styleSheet
    .rules()
    .reduce((combineRules, rule) => combineRules + rule.cssText, '')
}

export function clearStyles() {
  styleSheet.flush()
}
