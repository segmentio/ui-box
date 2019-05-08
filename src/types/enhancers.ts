import PropTypes from 'prop-types'

export type PropEnhancerValueType = string | number

export interface PropTypesMapping {
  [key: string]: PropTypes.Validator<any>
}

export interface PropAliases {
  [key: string]: string[]
}

export interface PropEnhancers {
  [key: string]: (value: any) => EnhancedProp | null
}

export interface PropValidators {
  [key: string]: (value: string) => string | undefined
}

export interface EnhancedProp {
  className: string
  styles: string
}
