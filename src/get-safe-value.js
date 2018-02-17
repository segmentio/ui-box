import {unsafeClassNameCharacters} from './utils/regex'

const dashRegex = /[ .]/g
const percentRegex = /%/g

export default function getSafeValue(value) {
  return value
    .replace(dashRegex, '-')
    .replace(percentRegex, 'prcnt')
    .replace(unsafeClassNameCharacters, '')
}
