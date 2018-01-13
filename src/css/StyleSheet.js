// This file is loosely based on glamor
import { getStyleTag } from './styleTag'

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

export default function StyleSheet({
  speedy = !isDev && !isTest,
  maxLength = 65000
} = {}) {
  // The big drawback here is that the css won't be editable in devtools
  this.isSpeedy = speedy
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
      throw new Error('StyleSheet is already injected.')
    }
    if (isBrowser) {
      this.tags[0] = getStyleTag()
    } else {
      // Server side 'polyfill'. just enough behavior to be useful.
      this.sheet = {
        cssRules: [],
        insertRule: rule => {
          // Enough 'spec compliance' to be able to extract the rules later
          // in other words, just the cssText field
          this.sheet.cssRules.push({ cssText: rule })
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
    // This weirdness for perf, and chrome's weird bug
    // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
    try {
      const sheet = this.getSheet()
      sheet.insertRule(rule, sheet.cssRules.length)
    } catch (err) {
      if (isDev) {
        // Might need beter dx for this
        console.warn('StyleSheet illegal rule inserted', rule)
      }
    }
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
      this.tags.push(getStyleTag())
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
      // Todo - look for remnants in document.styleSheets
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
      arr.splice(arr.length, 0, ...Array.from(sheetForTag(tag).cssRules))
    )
    return arr
  }
})
