export interface URLInfo {
    url: string | undefined
    sameOrigin: boolean
}

export interface HrefData {
    href: string
    rel: string
    allowProtocols?: string[]
}

export interface SafeHrefConfigObj {
    enabled?: boolean
    origin?: string
    additionalProtocols?: string[]
}

const PROTOCOL_REGEX = /^[a-z]+:/
const ORIGIN_REGEX = /^(?:[a-z]+:?:)?(?:\/\/)?([^\/\?]+)/
const safeProtocols: string[] = ['http:', 'https:', 'mailto:', 'tel:']
let customProtocols:Array<string> = []
let useSafeHref = false
let globalOrigin = typeof window !== 'undefined' ? window.location.origin : false

export function configureSafeHref(configObject: SafeHrefConfigObj) {
    if (typeof configObject.enabled !== 'undefined') {
        useSafeHref = configObject.enabled
    }

    if (configObject.origin) {
        globalOrigin = configObject.origin
    }

    if (configObject.additionalProtocols && configObject.additionalProtocols.length) {
        customProtocols.push(...configObject.additionalProtocols)
    }
}

export function getUseSafeHref(): boolean {
    return useSafeHref
}

export function resetCustomProtocols() {
    customProtocols = []
}

export function getURLInfo(url: string, allowProtocols: Array<string>): URLInfo {
    /**
     * - Find protocol of URL or set to 'relative'
     * - Find origin of URL
     * - Determine if sameOrigin
     * - Determine if protocol of URL is safe
     */
    const cleanedUrl = url.trim()
    const protocolResult = cleanedUrl.match(PROTOCOL_REGEX)
    const originResult = cleanedUrl.match(ORIGIN_REGEX)
    const urlProtocol = protocolResult ? protocolResult[0] : 'relative'
    let sameOrigin = urlProtocol === 'relative'
    if (!sameOrigin && globalOrigin) {
        sameOrigin = globalOrigin === (originResult && originResult[0])
    }

    const allowedProtocols = [...safeProtocols, ...customProtocols, ...allowProtocols]
    const isSafeProtocol = sameOrigin ? true : allowedProtocols.includes(urlProtocol)
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
        url: cleanedUrl,
        sameOrigin
    }
}

export function extractAnchorProps(hrefData: HrefData) {
    const {href, rel} = hrefData
    const allowProtocols = hrefData.allowProtocols && hrefData.allowProtocols.length ? hrefData.allowProtocols : []

     /**
     * Get url info and update href
     */
    const urlInfo = getURLInfo(href, allowProtocols)
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
