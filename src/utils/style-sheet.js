// This file is based off glamor's StyleSheet
// https://github.com/threepointone/glamor/blob/v2.20.40/src/sheet.js
const isBrowser = typeof window !== 'undefined'
const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV
const isTest = process.env.NODE_ENV === 'test'

function last(arr) {
  return arr[arr.length - 1]
}

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet
  }

  // This weirdness brought to you by firefox
  for (let i = 0; i < document.styleSheets.length; i += 1) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i]
    }
  }
}

function makeStyleTag() {
  const tag = document.createElement('style')
  tag.type = 'text/css'
  tag.setAttribute('data-ui-box', '')
  tag.appendChild(document.createTextNode(''))
  ;(document.head || document.getElementsByTagName('head')[0]).appendChild(tag)
  return tag
}

export default function StyleSheet({
  speedy = !isDev && !isTest,
  maxLength = 65000
} = {}) {
  this.isSpeedy = speedy // The big drawback here is that the css won't be editable in devtools
  this.sheet = undefined
  this.tags = []
  this.maxLength = maxLength
  this.ctr = 0
}

Object.assign(StyleSheet.prototype, {
  getSheet() {
    return sheetForTag(last(this.tags))
  },
  inject() {
    if (this.injected) {
      throw new Error('StyleSheet has already been injected.')
    }
    if (isBrowser) {
      this.tags[0] = makeStyleTag()
    } else {
      // Server side 'polyfill'. just enough behavior to be useful.
      this.sheet = {
        cssRules: [],
        insertRule: rule => {
          // Enough 'spec compliance' to be able to extract the rules later
          // in other words, just the cssText field
          this.sheet.cssRules.push({cssText: rule})
        }
      }
    }
    this.injected = true
  },
  speedy(bool) {
    if (this.ctr !== 0) {
      throw new Error(
        `StyleSheet cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})`
      )
    }
    this.isSpeedy = Boolean(bool)
  },
  _insert(rule) {
    // This weirdness for perf
    const sheet = this.getSheet()
    sheet.insertRule(rule, sheet.cssRules.length)
  },
  insert(rule) {
    if (isBrowser) {
      // This is the ultrafast version, works across browsers
      if (this.isSpeedy && this.getSheet().insertRule) {
        this._insert(rule)
      } else {
        last(this.tags).appendChild(document.createTextNode(rule))
      }
    } else {
      // Server side is pretty simple
      this.sheet.insertRule(rule, this.sheet.cssRules.length)
    }

    this.ctr += 1
    if (isBrowser && this.ctr % this.maxLength === 0) {
      this.tags.push(makeStyleTag())
    }
    return this.ctr - 1
  },
  delete(index) {
    // We insert a blank rule when 'deleting' so previously returned indexes remain stable
    return this.replace(index, '')
  },
  flush() {
    if (isBrowser) {
      this.tags.forEach(tag => tag.parentNode.removeChild(tag))
      this.tags = []
      this.sheet = null
      this.ctr = 0
    } else {
      // Simpler on server
      this.sheet.cssRules = []
    }
    this.injected = false
  },
  rules() {
    if (!isBrowser) {
      return this.sheet.cssRules
    }
    const arr = []
    this.tags.forEach(tag =>
      arr.splice(arr.length, 0, ...[...sheetForTag(tag).cssRules])
    )
    return arr
  }
})
