export interface URLInfo {
    url: string | undefined
    sameOrigin: boolean
}

let useSafeHref = false

export function setUseSafeHref(value: boolean) {
    useSafeHref = value
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
     * Create an anchor element to parse the protocol and origin of the url provided
     */
    const anchorElement = document.createElement('a')
    anchorElement.href = url
    const sameOrigin = typeof window !== undefined ? anchorElement.origin === window.location.origin : true

    /**
     * Verify passed url is using a safe protocol
     */
    const isSafeProtocol = safeProtocols.includes(anchorElement.protocol)
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

export default getURLInfo
