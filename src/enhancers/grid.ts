import * as PropTypes from 'prop-types'
import getCss from '../get-css'
import {PropEncharValueType as ValueType} from './types'

export const propTypes = {
  columnGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  grid: PropTypes.string,
  gridArea: PropTypes.string,
  gridAutoColumns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gridAutoFlow: PropTypes.string,
  gridAutoRows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gridColumn: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gridColumnEnd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gridColumnGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gridColumnStart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gridGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gridRow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gridRowEnd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gridRowGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gridRowStart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gridTemplate: PropTypes.string,
  gridTemplateAreas: PropTypes.string,
  gridTemplateColumns: PropTypes.string,
  gridTemplateRows: PropTypes.string,
  rowGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propAliases = {}

export const propValidators = {}

const columnGap = {
  className: 'col-gap',
  cssName: 'column-gap',
  jsName: 'columnGap'
}
const gap = {
  className: 'gap',
  cssName: 'gap',
  jsName: 'gap'
}
const grid = {
  className: 'grd',
  cssName: 'grid',
  jsName: 'grid',
  complexValue: true
}
const gridArea = {
  className: 'grd-ara',
  cssName: 'grid-area',
  jsName: 'gridArea',
  complexValue: true
}
const gridAutoColumns = {
  className: 'grd-ato-col',
  cssName: 'grid-auto-columns',
  jsName: 'gridAutoColumns',
  complexValue: true
}
const gridAutoFlow = {
  className: 'grd-ato-flw',
  cssName: 'grid-auto-flow',
  jsName: 'gridAutoFlow'
}
const gridAutoRows = {
  className: 'grd-ato-row',
  cssName: 'grid-auto-rows',
  jsName: 'gridAutoRows',
  complexValue: true
}
const gridColumn = {
  className: 'grd-col',
  cssName: 'grid-column',
  jsName: 'gridColumn',
  defaultUnit: '',
  complexValue: true
}
const gridColumnEnd = {
  className: 'grd-col-end',
  cssName: 'grid-column-end',
  jsName: 'gridColumnEnd',
  defaultUnit: ''
}
const gridColumnGap = {
  className: 'grd-col-gap',
  cssName: 'grid-column-gap',
  jsName: 'gridColumnGap'
}
const gridColumnStart = {
  className: 'grd-col-str',
  cssName: 'grid-column-start',
  jsName: 'gridColumnStart',
  defaultUnit: ''
}
const gridGap = {
  className: 'grd-gap',
  cssName: 'grid-gap',
  jsName: 'gridGap'
}
const gridRow = {
  className: 'grd-row',
  cssName: 'grid-row',
  jsName: 'gridRow',
  defaultUnit: '',
  complexValue: true
}
const gridRowEnd = {
  className: 'grd-row-end',
  cssName: 'grid-row-end',
  jsName: 'gridRowEnd',
  defaultUnit: ''
}
const gridRowGap = {
  className: 'grd-row-gap',
  cssName: 'grid-row-gap',
  jsName: 'gridRowGap'
}
const gridRowStart = {
  className: 'grd-row-str',
  cssName: 'grid-row-start',
  jsName: 'gridRowStart',
  defaultUnit: ''
}
const gridTemplate = {
  className: 'grd-tmp',
  cssName: 'grid-template',
  jsName: 'gridTemplate',
  complexValue: true
}
const gridTemplateAreas = {
  className: 'grd-tmp-ara',
  cssName: 'grid-template-areas',
  jsName: 'gridTemplateAreas',
  complexValue: true
}
const gridTemplateColumns = {
  className: 'grd-tmp-col',
  cssName: 'grid-template-columns',
  jsName: 'gridTemplateColumns',
  complexValue: true
}
const gridTemplateRows = {
  className: 'grd-tmp-row',
  cssName: 'grid-template-rows',
  jsName: 'gridTemplateRows',
  complexValue: true
}
const rowGap = {
  className: 'row-gap',
  cssName: 'row-gap',
  jsName: 'rowGap'
}

export const propEnhancers = {
  columnGap: (value: ValueType) => getCss(columnGap, value),
  gap: (value: ValueType) => getCss(gap, value),
  grid: (value: ValueType) => getCss(grid, value),
  gridArea: (value: ValueType) => getCss(gridArea, value),
  gridAutoColumns: (value: ValueType) => getCss(gridAutoColumns, value),
  gridAutoFlow: (value: ValueType) => getCss(gridAutoFlow, value),
  gridAutoRows: (value: ValueType) => getCss(gridAutoRows, value),
  gridColumn: (value: ValueType) => getCss(gridColumn, value),
  gridColumnEnd: (value: ValueType) => getCss(gridColumnEnd, value),
  gridColumnGap: (value: ValueType) => getCss(gridColumnGap, value),
  gridColumnStart: (value: ValueType) => getCss(gridColumnStart, value),
  gridGap: (value: ValueType) => getCss(gridGap, value),
  gridRow: (value: ValueType) => getCss(gridRow, value),
  gridRowEnd: (value: ValueType) => getCss(gridRowEnd, value),
  gridRowGap: (value: ValueType) => getCss(gridRowGap, value),
  gridRowStart: (value: ValueType) => getCss(gridRowStart, value),
  gridTemplate: (value: ValueType) => getCss(gridTemplate, value),
  gridTemplateAreas: (value: ValueType) => getCss(gridTemplateAreas, value),
  gridTemplateColumns: (value: ValueType) => getCss(gridTemplateColumns, value),
  gridTemplateRows: (value: ValueType) => getCss(gridTemplateRows, value),
  rowGap: (value: ValueType) => getCss(rowGap, value)
}
