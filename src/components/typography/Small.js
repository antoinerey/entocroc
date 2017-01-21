import React, { PropTypes } from 'react'
import { css } from 'glamor'
import { colors } from 'theme'

const styles = {
  container: css({
    fontSize: '0.875rem',
    lineHeight: 1.35,
    color: colors.grey,
  }),
}

const Small = ({ children }) => (
  <small { ...styles.container }>
    { children }
  </small>
)

Small.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Small
