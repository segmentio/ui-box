import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
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

export const propAliases: PropAliases = {}

export const propValidators: PropValidators = {}

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

export const propEnhancers: PropEnhancers = {
  columnGap: (value: PropEnhancerValueType) => getCss(columnGap, value),
  gap: (value: PropEnhancerValueType) => getCss(gap, value),
  grid: (value: PropEnhancerValueType) => getCss(grid, value),
  gridArea: (value: PropEnhancerValueType) => getCss(gridArea, value),
  gridAutoColumns: (value: PropEnhancerValueType) => getCss(gridAutoColumns, value),
  gridAutoFlow: (value: PropEnhancerValueType) => getCss(gridAutoFlow, value),
  gridAutoRows: (value: PropEnhancerValueType) => getCss(gridAutoRows, value),
  gridColumn: (value: PropEnhancerValueType) => getCss(gridColumn, value),
  gridColumnEnd: (value: PropEnhancerValueType) => getCss(gridColumnEnd, value),
  gridColumnGap: (value: PropEnhancerValueType) => getCss(gridColumnGap, value),
  gridColumnStart: (value: PropEnhancerValueType) => getCss(gridColumnStart, value),
  gridGap: (value: PropEnhancerValueType) => getCss(gridGap, value),
  gridRow: (value: PropEnhancerValueType) => getCss(gridRow, value),
  gridRowEnd: (value: PropEnhancerValueType) => getCss(gridRowEnd, value),
  gridRowGap: (value: PropEnhancerValueType) => getCss(gridRowGap, value),
  gridRowStart: (value: PropEnhancerValueType) => getCss(gridRowStart, value),
  gridTemplate: (value: PropEnhancerValueType) => getCss(gridTemplate, value),
  gridTemplateAreas: (value: PropEnhancerValueType) => getCss(gridTemplateAreas, value),
  gridTemplateColumns: (value: PropEnhancerValueType) => getCss(gridTemplateColumns, value),
  gridTemplateRows: (value: PropEnhancerValueType) => getCss(gridTemplateRows, value),
  rowGap: (value: PropEnhancerValueType) => getCss(rowGap, value)
}
