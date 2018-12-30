// Fork of https://github.com/sindresorhus/decamelize because it contains ES6 code
// And css properties don't contain unicode

const separator = '-'
const regex1 = /([a-z\d])([A-Z])/g
const regex2 = /([a-z]+)([A-Z][a-z\d]+)/g

export default function decamelize(text: string): string {
  return text
    .replace(regex1, `$1${separator}$2`)
    .replace(regex2, `$1${separator}$2`)
    .toLowerCase()
}
