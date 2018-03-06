import {clearStyles} from '../../src'
import allPropertiesComponent from '../all-properties-component'

export default function benchmark() {
  clearStyles()
  return allPropertiesComponent()
}
