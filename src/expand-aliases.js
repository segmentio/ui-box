import {propAliases} from './enhancers'

export default function expandAliases(props) {
  const propNames = Object.keys(props)
  const newProps = new Map()

  // Loop in reverse order so that the last props override the previous props
  for (let i = propNames.length - 1; i >= 0; i--) {
    const propName = propNames[i]
    const propValue = props[propName]
    const aliases = propAliases[propName] || [propName]

    // Expand aliases
    for (let i = 0; i < aliases.length; i++) {
      const enhancerName = aliases[i]
      // Don't return duplicate props
      if (!newProps.has(enhancerName)) {
        newProps.set(enhancerName, propValue)
      }
    }
  }

  // Return props in the order they defined so that the css gets injected in a
  // predictable order
  return Array.from(newProps).reverse()
}
