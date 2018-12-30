import {propAliases, propValidators} from './enhancers/index'

/**
 * Expands aliases like `margin` to `marginTop`, `marginBottom`, `marginLeft` and `marginRight`.
 *
 * This prevents edge cases where longhand properties can't override shorthand
 * properties due to the style insertion order.
 */
export default function expandAliases(props: object) {
  const propNames = Object.keys(props)
  // Use a Map because it's faster for setting values and looping over than an Object
  const newProps = new Map()

  for (let i = 0; i < propNames.length; i++) {
    const propName = propNames[i]
    const propValue = props[propName]
    const aliases = propAliases[propName] || [propName]

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
    for (let i = 0; i < aliases.length; i++) {
      newProps.set(aliases[i], propValue)
    }
  }

  return newProps
}
