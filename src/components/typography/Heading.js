import React, { PropTypes } from 'react'
import { css, merge } from 'glamor'
import { fonts } from 'theme'

const styles = {
  shared: css({
    margin: 0,
    lineHeight: 1.3,
    fontFamily: fonts.bazar,
    textTransform: 'uppercase',
  }),
  h1: css({ fontSize: '5rem' }),
  h2: css({ fontSize: '2rem' }),
}

const Heading = ({ children, level: Element }) => (
  <Element { ...merge(styles.shared, styles[Element]) }>
    { children }
  </Element>
)

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([ 'h1', 'h2' ]).isRequired,
}

export default Heading
