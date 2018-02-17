import decamelize from './utils/decamelize'

const properties = {}

properties.background = {
  key: 'bg',
  isPrefixed: true,
  complexValue: true,
}
properties.backgroundColor = {key: 'bg-clr'}
properties.backgroundImage = {
  key: 'bg-img',
  isPrefixed: true,
  complexValue: true,
}
properties.backgroundPosition = {key: 'bg-pos'}
properties.backgroundSize = {key: 'bg-siz'}
properties.backgroundOrigin = {key: 'bg-orgn'}
properties.backgroundRepeat = {key: 'bg-rpt'}
properties.backgroundClip = {key: 'bg-clp'}
properties.backgroundBlendMode = {key: 'bg-blnd-md'}

properties.borderRadius = {key: 'br'}
properties.borderTopLeftRadius = {key: 'btlr'}
properties.borderTopRightRadius = {key: 'btrr'}
properties.borderBottomLeftRadius = {key: 'bblr'}
properties.borderBottomRightRadius = {key: 'bbrr'}

properties.border = {key: 'b'}
properties.borderColor = {key: 'b-clr'}
properties.borderStyle = {key: 'b-stl', safeValue: true}
properties.borderWidth = {key: 'b-wdt'}
properties.borderLeft = {key: 'b-lft'}
properties.borderLeftColor = {key: 'b-lft-clr'}
properties.borderLeftStyle = {key: 'b-lft-stl', safeValue: true}
properties.borderLeftWidth = {key: 'b-lft-wdt'}
properties.borderRight = {key: 'b-rgt'}
properties.borderRightColor = {key: 'b-rgt-clr'}
properties.borderRightStyle = {key: 'b-rgt-stl', safeValue: true}
properties.borderRightWidth = {key: 'b-rgt-wdt'}
properties.borderTop = {key: 'b-top'}
properties.borderTopColor = {key: 'b-top-clr'}
properties.borderTopStyle = {key: 'b-top-stl', safeValue: true}
properties.borderTopWidth = {key: 'b-top-wdt'}
properties.borderBottom = {key: 'b-btm'}
properties.borderBottomColor = {key: 'b-btm-clr'}
properties.borderBottomStyle = {key: 'b-btm-stl', safeValue: true}
properties.borderBottomWidth = {key: 'b-btm-wdt'}

properties.boxShadow = {key: 'bs', complexValue: true}

properties.width = {key: 'w'}
properties.height = {key: 'h'}
properties.minWidth = {key: 'min-w'}
properties.minHeight = {key: 'min-h'}
properties.maxWidth = {key: 'max-w'}
properties.maxHeight = {key: 'max-h'}

properties.flex = {key: 'flx', isPrefixed: true, defaultUnit: ''}
properties.alignItems = {key: 'algn-itms', isPrefixed: true}
properties.alignSelf = {key: 'algn-slf', isPrefixed: true}
properties.alignContent = {key: 'algn-cnt', isPrefixed: true}
properties.justifyContent = {key: 'just-cnt', isPrefixed: true}
properties.justifySelf = {key: 'just-self', isPrefixed: true}
properties.flexDirection = {
  key: 'flx-drct',
  isPrefixed: true,
  safeValue: true,
}
properties.flexWrap = {
  key: 'flx-wrap',
  isPrefixed: true,
  safeValue: true,
}
properties.flexGrow = {
  key: 'flx-grow',
  isPrefixed: true,
  defaultUnit: '',
}
properties.flexShrink = {
  key: 'flx-srnk',
  isPrefixed: true,
  defaultUnit: '',
}
properties.flexBasis = {key: 'flx-basis', isPrefixed: true}
properties.order = {
  key: 'order',
  isPrefixed: true,
  defaultUnit: '',
  safeValue: true,
}

properties.overflow = {key: 'ovflw', safeValue: true}
properties.overflowY = {key: 'ovflw-y', safeValue: true}
properties.overflowX = {key: 'ovflw-x', safeValue: true}

properties.cursor = {key: 'crsr'}
properties.userSelect = {
  key: 'usr-slct',
  safeValue: true,
  isPrefixed: true,
}
properties.visibility = {key: 'vsblt', safeValue: true}
properties.pointerEvents = {key: 'ptr-evts', safeValue: true}

properties.display = {
  key: 'dspl',
  safeValue: true,
  isPrefixed: true,
}
properties.float = {key: 'flt', safeValue: true}
properties.clear = {key: 'clr', safeValue: true}
properties.zIndex = {key: 'z-idx', safeValue: true}
properties.boxSizing = {key: 'box-szg', safeValue: true}

properties.opacity = {key: 'opct', defaultUnit: ''}

properties.position = {
  key: 'pst',
  safeValue: true,
  isPrefixed: true,
}
properties.top = {key: 'top'}
properties.right = {key: 'rgt'}
properties.bottom = {key: 'btm'}
properties.left = {key: 'lft'}

properties.margin = {key: 'm'}
properties.padding = {key: 'p'}
properties.marginTop = {key: 'mt'}
properties.marginRight = {key: 'mr'}
properties.marginBottom = {key: 'mb'}
properties.marginLeft = {key: 'ml'}
properties.paddingTop = {key: 'pt'}
properties.paddingRight = {key: 'pr'}
properties.paddingBottom = {key: 'pb'}
properties.paddingLeft = {key: 'pl'}

properties.textAlign = {key: 'txt-algn', safeValue: true}
properties.textDecoration = {key: 'txt-deco'}
properties.textTransform = {key: 'txt-trns', safeValue: true}
properties.textShadow = {key: 'txt-shdw', complexValue: true}
properties.textOverflow = {key: 'txt-ovrf', safeValue: true}
properties.color = {key: 'color'}
properties.font = {key: 'fnt', complexValue: true}
properties.fontFamily = {key: 'fnt-fam', complexValue: true}
properties.fontSize = {key: 'fnt-sze'}
properties.fontStyle = {key: 'fnt-stl', safeValue: true}
properties.fontVariant = {key: 'f-vari'}
properties.fontWeight = {key: 'f-wght', safeValue: true}
// Use pixels for line-height by default
properties.lineHeight = {key: 'ln-ht', defaultUnit: ''}
properties.wordBreak = {key: 'wrd-brk', safeValue: true}
properties.wordWrap = {key: 'wrd-wrp', safeValue: true}
properties.whiteSpace = {key: 'wht-spc', safeValue: true}
properties.letterSpacing = {key: 'ltr-spc'}

properties.transform = {key: 'tfrm', complexValue: true}
properties.transformOrigin = {key: 'tfrm-orgn', complexValue: true}

properties.listStyle = {key: 'ls', complexValue: true}
properties.listStyleType = {key: 'ls-typ'}
properties.listStyleImage = {key: 'ls-img', complexValue: true}
properties.listStylePosition = {key: 'ls-pos', safeValue: true}

Object.keys(properties).forEach(key => {
  properties[key].name = decamelize(key)
})

export default properties
