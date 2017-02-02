import React from 'react'
import { css } from 'glamor'
import { propMerge } from 'glamor/react'

const getDisplayName = (Component) => {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Component'
}

const computeStyles = (styles, props) => {
  return Object.entries(styles)
    .reduce((finalStyles, [ key, value ]) => {
      if (typeof value === 'object') value = computeStyles(value, props)
      if (typeof value === 'function') value = value(props)

      return { ...finalStyles, [key]: value }
    }, {})
}

const filterProps = (props, rules) => {
  return Object.keys(props)
    .filter(propName => rules[propName] !== false && propName !== 'vars')
    .reduce((obj, propName) => ({ ...obj, [propName]: props[propName] }), {})
}

const styled = (Element, styles, propsToPass = {}) => {
  class Component extends React.Component {
    render() {
      const { props } = this
      const generatedStyles = computeStyles(styles, props)
      const mergedProps = propMerge(css(generatedStyles), props)
      const nextProps = filterProps(mergedProps, propsToPass)

      return <Element { ...nextProps } />
    }
  }

  Component.displayName = getDisplayName(Element)

  return Component
}

export default styled
