import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  flex: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  alignContent: PropTypes.string,
  justifyContent: PropTypes.string,
  justifySelf: PropTypes.string,
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  flexGrow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexShrink: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export const parseProps = ({
  flex,
  alignItems,
  alignSelf,
  alignContent,
  justifyContent,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  flexBasis,
  order,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    flex !== undefined && css({ flex }).toString(),
    alignItems !== undefined && css({ alignItems }).toString(),
    alignSelf !== undefined && css({ alignSelf }).toString(),
    alignContent !== undefined && css({ alignContent }).toString(),
    justifyContent !== undefined && css({ justifyContent }).toString(),
    flexDirection !== undefined && css({ flexDirection }).toString(),
    flexWrap !== undefined && css({ flexWrap }).toString(),
    flexGrow !== undefined && css({ flexGrow }).toString(),
    flexShrink !== undefined && css({ flexShrink }).toString(),
    flexBasis !== undefined && css({ flexBasis }).toString(),
    order !== undefined && css({ order }).toString()
  ),
})
