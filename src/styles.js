import StyleSheet from './utils/style-sheet'

let batch = ''

const styleSheet = new StyleSheet()
styleSheet.inject()

export function add(styles) {
  batch += styles
}

export function getBatch() {
  return batch
}

export function getStyleSheet() {
  return styleSheet
    .rules()
    .reduce((combinedRules, rule) => combinedRules + rule.cssText, '')
}

export function getAll() {
  return getStyleSheet() + batch
}

export function clear() {
  batch = ''
  styleSheet.flush()
  styleSheet.inject()
}

export function flush() {
  if (batch !== '') {
    styleSheet.insert(batch)
    batch = ''
  }
}
