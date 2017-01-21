import React, { PropTypes } from 'react'
import { css } from 'glamor'

const styles = {
  container: css({
    width: '60rem',
    maxWidth: '100%',
    margin: '0 auto',
  }),
}

const Container = ({ children }) => (
  <div { ...styles.container }>
    { children }
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
