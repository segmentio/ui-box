import test from 'ava'
import {extractAnchorProps, configureSafeHref, resetCustomProtocols} from '../../src/utils/safeHref'

test('Allows safe protocols', t => {
    configureSafeHref({
        enabled: true
    })

    const {safeHref} = extractAnchorProps({
        href: 'https://www.apple.com',
        rel: ''
    })

    t.assert(safeHref === 'https://www.apple.com')
})

test('Rejects unsafe protocols', t => {
    const {safeHref} = extractAnchorProps({
        href: 'javascript://www.apple.com',
        rel: ''
    })

    t.assert(safeHref === undefined)
})

test('Rejects unsafe protocols with whitespace', t => {
    const {safeHref} = extractAnchorProps({
        href: '     javascript://www.apple.com',
        rel: ''
    })

    t.assert(safeHref === undefined)
})

test('Allows custom protocol', t => {
    configureSafeHref({
        additionalProtocols: ['data:']
    })

    const {safeHref} = extractAnchorProps({
        href: 'data:text/html,<html><h1>Hi</h1></html>',
        rel: ''
    })

    resetCustomProtocols()

    t.assert(safeHref === 'data:text/html,<html><h1>Hi</h1></html>')
})

test('Allows individual level custom protocol', t => {
    const {safeHref} = extractAnchorProps({
        href: 'data:text/html,<html><h1>Hi</h1></html>',
        rel: '',
        allowProtocols: ['data:']
    })

    t.assert(safeHref === 'data:text/html,<html><h1>Hi</h1></html>')
})
