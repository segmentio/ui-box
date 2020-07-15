// This file is based off glamor's StyleSheet
// https://github.com/threepointone/glamor/blob/v2.20.40/src/sheet.js
const isBrowser = typeof window !== 'undefined'

function last<T>(arr: T[]) {
  return arr[arr.length - 1]
}

function sheetForTag(tag: HTMLStyleElement): CSSStyleSheet | undefined {
  if (tag.sheet) {
    return tag.sheet as CSSStyleSheet
  }

  // This weirdness brought to you by firefox
  for (let i = 0; i < document.styleSheets.length; i += 1) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i] as CSSStyleSheet
    }
  }

  return
}

function makeStyleTag() {
  const tag = document.createElement('style')
  tag.type = 'text/css'
  tag.setAttribute('data-ui-box', '')
  tag.append(document.createTextNode(''))
  ;(document.head || document.querySelector('head')).append(tag)
  return tag
}

type Writeable<T> = {
  -readonly [P in keyof T]: T[P]
}

interface SSCSSRule {
  cssText: string
}

interface ServerSideStyleSheet {
  cssRules: SSCSSRule[]
  insertRule(rule: string): any
}

interface Options {
  speedy?: boolean
  maxLength?: number
}

export default class CustomStyleSheet {
  private isSpeedy: boolean
  private sheet?: Writeable<CSSStyleSheet> | ServerSideStyleSheet | null
  private tags: HTMLStyleElement[] = []
  private maxLength: number
  private ctr: number = 0
  private injected: boolean = false

  constructor(options: Options = {}) {
    // The big drawback here is that the css won't be editable in devtools
    this.isSpeedy =
      options.speedy === undefined
        ? process.env.NODE_ENV === 'production'
        : options.speedy

    this.maxLength = options.maxLength || 65000
  }

  getSheet() {
    return sheetForTag(last(this.tags))
  }

  inject() {
    if (this.injected) {
      throw new Error('StyleSheet has already been injected.')
    }

    if (isBrowser) {
      this.tags[0] = makeStyleTag()
    } else {
      // Server side 'polyfill'. just enough behavior to be useful.
      this.sheet = {
        cssRules: [] as SSCSSRule[],
        insertRule: (rule: string) => {
          // Enough 'spec compliance' to be able to extract the rules later
          // in other words, just the cssText field
          ;(this.sheet!.cssRules as SSCSSRule[]).push({ cssText: rule })
        },
      }
    }

    this.injected = true
  }

  speedy(bool: boolean) {
    if (this.ctr !== 0) {
      throw new Error(
        `StyleSheet cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})`
      )
    }

    this.isSpeedy = Boolean(bool)
  }

  _insert(sheet: CSSStyleSheet, rule: string) {
    // This weirdness for perf
    sheet.insertRule(rule, sheet.cssRules.length)
  }

  insert(rule: string) {
    if (isBrowser) {
      const sheet = this.getSheet()

      // This is the ultrafast version, works across browsers
      if (this.isSpeedy && sheet && sheet.insertRule) {
        this._insert(sheet, rule)
      } else {
        last(this.tags).append(document.createTextNode(rule))
      }
    } else if (this.sheet) {
      // Server side is pretty simple
      this.sheet.insertRule(rule, this.sheet.cssRules.length)
    }

    this.ctr += 1
    if (isBrowser && this.ctr % this.maxLength === 0) {
      this.tags.push(makeStyleTag())
    }

    return this.ctr - 1
  }

  flush() {
    if (isBrowser) {
      this.tags.forEach(tag => tag.parentNode!.removeChild(tag))
      this.tags = []
      this.sheet = null
      this.ctr = 0
    } else if (this.sheet) {
      // Simpler on server
      this.sheet.cssRules = [] as SSCSSRule[]
    }

    this.injected = false
  }

  rules() {
    if (!isBrowser) {
      return (this.sheet ? this.sheet.cssRules : []) as CSSRule[]
    }

    const arr: CSSRule[] = []
    this.tags.forEach(tag => {
      const sheet = sheetForTag(tag)
      if (sheet) {
        const rules = Array.from(sheet.cssRules)
        arr.splice(arr.length, 0, ...[...rules])
      }
    })

    return arr
  }
}
