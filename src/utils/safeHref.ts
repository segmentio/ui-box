export interface URLInfo {
  url: string | undefined
  sameOrigin: boolean
}

export interface SafeHrefConfigObj {
  enabled?: boolean
  origin?: string
}

const PROTOCOL_REGEX = /^[a-z]+:/
const ORIGIN_REGEX = /^(?:[a-z]+:?:)?(?:\/\/)?([^\/\?]+)/
let useSafeHref = true
let globalOrigin =
  typeof window !== 'undefined' ? window.location.origin : false

export function configureSafeHref(configObject: SafeHrefConfigObj) {
  if (typeof configObject.enabled === 'boolean') {
    useSafeHref = configObject.enabled
  }

  if (configObject.origin) {
    globalOrigin = configObject.origin
  }
}

export function getUseSafeHref(): boolean {
  return useSafeHref
}

export function getURLInfo(url: string): URLInfo {
  /**
   * An array of the safely allowed url protocols
   */
  const safeProtocols = ['http:', 'https:', 'mailto:', 'tel:', 'data:']

  /**
   * - Find protocol of URL or set to 'relative'
   * - Find origin of URL
   * - Determine if sameOrigin
   * - Determine if protocol of URL is safe
   */
  const protocolResult = url.match(PROTOCOL_REGEX)
  const originResult = url.match(ORIGIN_REGEX)
  const urlProtocol = protocolResult ? protocolResult[0] : 'relative'
  let sameOrigin = urlProtocol === 'relative'
  if (!sameOrigin && globalOrigin) {
    sameOrigin = globalOrigin === (originResult && originResult[0])
  }

  const isSafeProtocol = sameOrigin ? true : safeProtocols.includes(urlProtocol)
  if (!isSafeProtocol) {
    /**
     * If the url is unsafe, put a error in the console, and return the URLInfo object
     * with the value of url being `undefined`
     */
    console.error(
      '📦 `href` passed to anchor tag is unsafe. Because of this, the `href` on the element was not set. Please review the safe href documentation if you have questions.',
      'https://www.github.com/segmentio/ui-box'
    )
    return {
      url: undefined,
      sameOrigin
    }
  }

  /**
   * If the url is safe, return the url and origin
   */
  return {
    url,
    sameOrigin
  }
}

export function extractAnchorProps(href: string, rel: string) {
  /**
   * Get url info and update href
   */
  const urlInfo = getURLInfo(href)
  const safeHref = urlInfo.url

  /**
   * If the url passed is safe, we want to also update the attributes of the element
   * to be safe
   */

  let safeRel = rel ? rel : ''
  if (urlInfo.url) {
    if (!safeRel.includes('noopener')) {
      safeRel += `${safeRel.length > 0 ? ' ' : ''}noopener`
    }

    if (!safeRel.includes('noreferrer') && !urlInfo.sameOrigin) {
      safeRel += `${safeRel.length > 0 ? ' ' : ''}noreferrer`
    }
  }

  return {
    safeHref,
    safeRel
  }
}
