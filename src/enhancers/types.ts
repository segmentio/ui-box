import * as PropTypes from 'prop-types'

export type PropEncharValueType = string | number
export interface PropTypesMapping {
  [key: string]: PropTypes.Validator<any>
}

export interface PropAliases {
  [key: string]: string[]
}

export interface PropValidators {
  [key: string]: (value: any) => string | undefined
}

export interface PropEnchancers {
  [key: string]: (value: any) => null | EnhancedProp
}

export interface EnhancedProp {
  className: string
  styles: string
}

export interface Enhancer {
  propTypes: PropTypesMapping
  propAliases: PropAliases
  propValidators: PropValidators
  propEnhancers: PropEnchancers
}
