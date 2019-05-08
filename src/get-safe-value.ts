import {unsafeClassNameCharacters} from './utils/regex'

const dashRegex = /[ .]/g
const percentRegex = /%/g

/**
 * Makes the value safe for use in a class name.
 */
export default function getSafeValue(value: string): string {
  return value
    .replace(dashRegex, '-')
    .replace(percentRegex, 'prcnt')
    .replace(unsafeClassNameCharacters, '')
}
