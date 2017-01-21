import React, { PropTypes } from 'react'
import { css } from 'glamor'
import { colors } from 'theme'

const styles = {
  container: css({
    minHeight: '100vh',

    ':not(:last-of-type)': {
      borderBottom: `0.25rem solid ${ colors.black }`,
    },
  }),
}

const Screen = ({ children }) => (
  <div { ...styles.container }>
    { children }
  </div>
)

Screen.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Screen
