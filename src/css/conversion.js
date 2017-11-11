export const camelToDash = str =>
  str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`)

export function dashToCamel(str) {
  return str.replace(/([A-Z])/g, function(g) {
    return '-' + g[0].toLowerCase()
  })
}
