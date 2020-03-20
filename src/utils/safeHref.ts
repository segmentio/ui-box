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
    const safeProtocols = ['http:', 'https:', 'mailto:', 'tel:']

    /**
     * Create an anchor element to parse the protocol and origin of the url provided
     */
    const anchorElement = document.createElement('a')
    anchorElement.href = url
    const sameOrigin = anchorElement.origin === window.location.origin

    /**
     * Verify passed url is using a safe protocol
     */
    const isSafeProtocol = safeProtocols.includes(anchorElement.protocol)
    if (!isSafeProtocol && useSafeHref) {
        /**
         * If the url is unsafe, put a warning in the console, and retunr `undefined` and origin
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

export default getURLInfo
