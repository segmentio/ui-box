import { camelToDash } from './conversion'

const properties = {}

properties.background = {
  key: 'bg',
  isUnitParsed: false,
  isPrefixed: true,
  cacheType: 'array'
}
properties.backgroundColor = {
  key: 'bg-clr',
  isUnitParsed: false,
  isPrefixed: true
}
properties.backgroundImage = {
  key: 'bg-img',
  isPrefixed: true,
  cacheType: 'array'
}
properties.backgroundPosition = {
  key: 'bg-pos',
  isUnitParsed: false,
  isPrefixed: true
}
properties.backgroundSize = {
  key: 'bg-siz',
  isUnitParsed: false,
  isPrefixed: true
}
properties.backgroundOrigin = {
  key: 'bg-orgn',
  isUnitParsed: false,
  isPrefixed: true
}
properties.backgroundRepeat = {
  key: 'bg-rpt',
  isUnitParsed: false,
  isPrefixed: true
}
properties.backgroundClip = {
  key: 'bg-clp',
  isUnitParsed: false,
  isPrefixed: true
}
properties.backgroundBlendMode = {
  key: 'bg-blnd-md',
  isUnitParsed: false,
  isPrefixed: true
}

properties.borderRadius = { key: 'br', isValueEscaped: false }
properties.borderTopLeftRadius = { key: 'btlr', isValueEscaped: false }
properties.borderTopRightRadius = { key: 'btrr', isValueEscaped: false }
properties.borderBottomLeftRadius = { key: 'bblr', isValueEscaped: false }
properties.borderBottomRightRadius = { key: 'bbrr', isValueEscaped: false }

properties.border = { key: 'b', isUnitParsed: false }
properties.borderColor = { key: 'b-clr' }
properties.borderStyle = { key: 'b-stl', isValueEscaped: false }
properties.borderWidth = { key: 'b-wdt', isValueEscaped: false }
properties.borderLeft = { key: 'b-lft', isUnitParsed: false }
properties.borderLeftColor = { key: 'b-lft-clr' }
properties.borderLeftStyle = { key: 'b-lft-stl', isValueEscaped: false }
properties.borderLeftWidth = { key: 'b-lft-wdt', isValueEscaped: false }
properties.borderRight = { key: 'b-rgt' }
properties.borderRightColor = { key: 'b-rgt-clr' }
properties.borderRightStyle = { key: 'b-rgt-stl', isValueEscaped: false }
properties.borderRightWidth = { key: 'b-rgt-wdt', isValueEscaped: false }
properties.borderTop = { key: 'b-top', isUnitParsed: false }
properties.borderTopColor = { key: 'b-top-clr' }
properties.borderTopStyle = { key: 'b-top-stl', isValueEscaped: false }
properties.borderTopWidth = { key: 'b-top-wdt', isValueEscaped: false }
properties.borderBottom = { key: 'b-btm', isUnitParsed: false }
properties.borderBottomColor = { key: 'b-btm-clr' }
properties.borderBottomStyle = { key: 'b-btm-stl', isValueEscaped: false }
properties.borderBottomWidth = { key: 'b-btm-wdt', isValueEscaped: false }

properties.boxShadow = {
  key: 'bs',
  isUnitParsed: false,
  isPrefixed: true,
  cacheType: 'array'
}

properties.width = { key: 'w', isValueEscaped: false }
properties.height = { key: 'h', isValueEscaped: false }
properties.minWidth = { key: 'min-w', isValueEscaped: false }
properties.minHeight = { key: 'min-h', isValueEscaped: false }
properties.maxWidth = { key: 'max-w', isValueEscaped: false }
properties.maxHeight = { key: 'max-h', isValueEscaped: false }

properties.flex = { key: 'flx', isUnitParsed: false, isPrefixed: true }
properties.alignItems = { key: 'algn-itms', isUnitParsed: false }
properties.alignSelf = { key: 'algn-slf', isUnitParsed: false }
properties.alignContent = { key: 'algn-cnt', isUnitParsed: false }
properties.justifyContent = { key: 'just-cnt', isUnitParsed: false }
properties.flexDirection = { key: 'flx-drct', isUnitParsed: false }
properties.flexWrap = { key: 'flx-wrap', isUnitParsed: false }
properties.flexGrow = { key: 'flx-grow', isUnitParsed: false }
properties.flexShrink = { key: 'flx-srnk', isUnitParsed: false }
properties.flexBasis = { key: 'flx-basis', isUnitParsed: false }
properties.order = { key: 'order', isUnitParsed: false }

properties.overflow = { key: 'ovflw', isUnitParsed: false }
properties.overflowY = { key: 'ovflw-Y', isUnitParsed: false }
properties.overflowX = { key: 'ovflw-X', isUnitParsed: false }

properties.cursor = { key: 'crsr', isUnitParsed: false, isValueEscaped: false }
properties.userSelect = {
  key: 'usr-slct',
  isPrefixed: true,
  isValueEscaped: false
}
properties.visibility = {
  key: 'vsblt',
  isUnitParsed: false,
  isValueEscaped: false
}
properties.pointerEvents = {
  key: 'ptr-evts',
  isUnitParsed: false,
  isValueEscaped: false
}

properties.display = { key: 'dspl', isUnitParsed: false, isValueEscaped: false }
properties.float = { key: 'flt', isUnitParsed: false, isValueEscaped: false }
properties.clear = { key: 'clr', isUnitParsed: false, isValueEscaped: false }
properties.zIndex = { key: 'z-idx', isUnitParsed: false, isValueEscaped: false }
properties.boxSizing = {
  key: 'box-szg',
  isUnitParsed: false,
  isValueEscaped: false
}

properties.opacity = { key: 'opct', isUnitParsed: false }

properties.position = { key: 'pst', isUnitParsed: false, isValueEscaped: false }
properties.top = { key: 'top', isValueEscaped: false }
properties.right = { key: 'rgt', isValueEscaped: false }
properties.bottom = { key: 'btm', isValueEscaped: false }
properties.left = { key: 'lft', isValueEscaped: false }

properties.margin = { key: 'm', isValueEscaped: false }
properties.padding = { key: 'p', isValueEscaped: false }
properties.marginTop = { key: 'mt', isValueEscaped: false }
properties.marginRight = { key: 'mr', isValueEscaped: false }
properties.marginBottom = { key: 'mb', isValueEscaped: false }
properties.marginLeft = { key: 'ml', isValueEscaped: false }
properties.paddingTop = { key: 'pt', isValueEscaped: false }
properties.paddingRight = { key: 'pr', isValueEscaped: false }
properties.paddingBottom = { key: 'pb', isValueEscaped: false }
properties.paddingLeft = { key: 'pl', isValueEscaped: false }

properties.textAlign = { key: 'txt-algn', isUnitParsed: false }
properties.textDecoration = {
  key: 'txt-deco',
  isUnitParsed: false
}
properties.textTransform = { key: 'txt-trns', isUnitParsed: false }
properties.textShadow = { key: 'txt-shdw', isUnitParsed: false }
properties.textOverflow = {
  key: 'txt-ovrf',
  isUnitParsed: false,
  isValueEscaped: false
}
properties.color = { key: 'color', isUnitParsed: false }
properties.font = { key: 'fnt', cacheType: 'array' }
properties.fontFamily = { key: 'fnt-fam', cacheType: 'array' }
properties.fontSize = { key: 'fnt-sze', isValueEscaped: false }
properties.fontStyle = {
  key: 'fnt-stl',
  isUnitParsed: false,
  isValueEscaped: false
}
properties.fontVariant = {
  key: 'f-vari',
  isUnitParsed: false,
  isValueEscaped: false
}
properties.fontWeight = {
  key: 'f-wght',
  isUnitParsed: false,
  isValueEscaped: false
}
// Use pixels for line-height by default
properties.lineHeight = { key: 'ln-ht', isValueEscaped: false }
properties.wordBreak = {
  key: 'wrd-brk',
  isUnitParsed: false,
  isValueEscaped: false
}
properties.wordWrap = {
  key: 'wrd-wrp',
  isUnitParsed: false,
  isValueEscaped: false
}
properties.whiteSpace = {
  key: 'wht-spc',
  isUnitParsed: false,
  isValueEscaped: false
}
properties.letterSpacing = { key: 'ltr-spc', isValueEscaped: false }

properties.transform = { key: 'tfrm', isUnitParsed: false, cacheType: 'array' }
properties.transformOrgin = {
  key: 'tfrm-orgn',
  isUnitParsed: false,
  cacheType: 'array'
}

Object.keys(properties).forEach(key => {
  properties[key].name = camelToDash(key)
  properties[key].cacheType = properties[key].cacheType || 'hash'
})

export default properties
