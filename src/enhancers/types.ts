import * as PropTypes from 'prop-types'

interface PropTypesMapping {
  [key: string]: PropTypes.Validator<any>
}

interface PropAliases {
  [key: string]: string[]
}

interface PropValidators {
  [key: string]: (value: any) => string | undefined
}

interface PropEnchancers {
  [key: string]: (value: any) => null | EnhancedProp
}

interface EnhancedProp {
  className: string
  styles: string
}

export interface Enhancer {
  propTypes: PropTypesMapping
  propAliases: PropAliases
  propValidators: PropValidators
  propEnhancers: PropEnchancers
}
