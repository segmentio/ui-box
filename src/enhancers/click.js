import PropTypes from 'prop-types'

export const propTypes = {
  onClick: PropTypes.func
}

export const parseProps = ({
  onClick,
  ...props
}) => ({
  onClick,
  ...props
})
