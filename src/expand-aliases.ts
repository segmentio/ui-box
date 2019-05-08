import {propAliases, propValidators} from './enhancers/index'
import { BoxPropValue } from './types/enhancers'

/**
 * Expands aliases like `margin` to `marginTop`, `marginBottom`, `marginLeft` and `marginRight`.
 *
 * This prevents edge cases where longhand properties can't override shorthand
 * properties due to the style insertion order.
 */
export default function expandAliases(props: { [key: string]: BoxPropValue }) {
  const propNames = Object.keys(props)
  // Use a Map because it's faster for setting values and looping over than an Object
  const newProps = new Map<string, BoxPropValue>()

  propNames.forEach(propName => {
    const propValue: BoxPropValue = props[propName]
    const aliases: string[] = propAliases[propName] || [propName]

    // Check that the alias has a valid value in development
    if (process.env.NODE_ENV !== 'production') {
      const validator = propValidators[propName]
      if (validator) {
        const result = validator(propValue)
        if (result) {
          throw new Error(`📦 ui-box: ${result}`)
        }
      }
    }

    // Expand aliases
    aliases.forEach(alias => {
      newProps.set(alias, propValue)
    })
  })

  return newProps
}
