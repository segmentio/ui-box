// https://stackoverflow.com/questions/7627000/javascript-convert-string-to-safe-class-name-for-css/7627603#7627603
const unsafeCharactersRegex = /[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]/g
const dashRegex = /[ .]/g
const percentRegex = /%/g

export default function getSafeValue(value) {
  return value
    .replace(dashRegex, '-')
    .replace(percentRegex, 'prcnt')
    .replace(unsafeCharactersRegex, '')
}
