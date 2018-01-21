// https://stackoverflow.com/questions/7627000/javascript-convert-string-to-safe-class-name-for-css/7627603#7627603
const unsafeCharactersRegex = /[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]/g
const spaceRegex = / /g

export default function getSafeValue(value) {
  if (typeof value === 'string') {
    return value.replace(unsafeCharactersRegex, '').replace(spaceRegex, '-')
  }

  if (Number(value) === value) {
    return `${value}`
  }

  return 'initial'
}
