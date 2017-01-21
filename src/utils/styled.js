import React from 'react'
import { css } from 'glamor'
import { propMerge } from 'glamor/react'

const styled = (Element, styles = {}, propsToPass = {}) => {
  class Component extends React.Component {
    render() {
      const { children, ...props } = this.props
      const generatedStyles = typeof styles === 'function' ? styles(props) : styles

      const mergedProps = propMerge(css(generatedStyles), props)
      const nextProps = Object.keys(mergedProps)
        .filter(propName => propsToPass[propName] !== false)
        .reduce((obj, propName) => ({ ...obj, [propName]: mergedProps[propName] }), {})

      return (
        <Element { ...nextProps }>
          { children }
        </Element>
      )
    }
  }

  return Component
}

export default styled
