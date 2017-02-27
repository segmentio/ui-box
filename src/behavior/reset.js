import { css } from 'glamor'

export default function reset () {
  const n = 'ui-lib-box'

  css.global(`.${n}`, {
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline'
  })

  css.global(`article.${n}, aside.${n}, details.${n}, figcaption.${n}, figure.${n}, footer.${n}, header.${n}, hgroup.${n}, menu.${n}, nav.${n}, section.${n}`, {
    display: 'block'
  })

  css.global(`ol.${n}, ul.${n}`, {
    listStyle: 'none'
  })

  css.global(`bloquote.${n}, q.${n}`, {
    quotes: 'none'
  })

  css.global(`table.${n}`, {
    borderCollapse: 'collapse',
    borderSpacing: '0'
  })

  css.global(`input.${n}, textarea.${n}`, {
    border: 'none',
    outline: 'none'
  })

  css.global(`strong.${n}`, {
    fontWeight: '500'
  })

  css.global(`em.${n}`, {
    fontStyle: 'italic'
  })

  css.global(`*.${n}, *.${n}:before, *.${n}:after`, {
    boxSizing: 'border-box'
  })
}
