// https://stackoverflow.com/questions/7627000/javascript-convert-string-to-safe-class-name-for-css/7627603#7627603
export default function getSafeValue(value) {
  if (typeof value === 'string') {
    return value
      .replace(/[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/ /g, '-')
  }

  if (Number(value) === value) {
    return `${value}`
  }

  return 'initial'
}
