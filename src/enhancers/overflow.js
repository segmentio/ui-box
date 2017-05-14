import PropTypes from 'prop-types'

export const propTypes = {
  overflow: PropTypes.oneOf([
    'hidden',
    'visible',
    'scroll',
    'auto',
    'inherit',
    'initial'
  ]),
  overflowY: PropTypes.oneOf([
    'hidden',
    'visible',
    'scroll',
    'auto',
    'inherit',
    'initial'
  ]),
  overflowX: PropTypes.oneOf([
    'hidden',
    'visible',
    'scroll',
    'auto',
    'inherit',
    'initial'
  ])
}

export const parseProps = ({
  overflow,
  overflowX,
  overflowY,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    overflow !== undefined && css({ overflow }).toString(),
    overflowX !== undefined && css({ overflowX }).toString(),
    overflowY !== undefined && css({ overflowY }).toString()
  )
})
