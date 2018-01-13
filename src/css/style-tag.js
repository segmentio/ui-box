const ATTRIBUTE = 'data-css-single-prop'
const SELECTOR = `style[${ATTRIBUTE}]`

export function makeStyleTag(attribute = ATTRIBUTE) {
  // Create a stylesheet on the fly
  const tag = document.createElement('style')
  tag.type = 'text/css'
  tag.setAttribute(attribute, '')
  tag.appendChild(document.createTextNode(''))
  return tag
}

export function getStyleTag(selector = SELECTOR, attribute = ATTRIBUTE) {
  const head = document.head || document.getElementsByTagName('head')[0]
  let tag = head.querySelector(selector)

  if (!tag) {
    tag = makeStyleTag(attribute)
    head.appendChild(tag)
  }

  return tag
}
