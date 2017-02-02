import React, { PropTypes } from 'react'
import styled from 'utils/styled'
import logo from './logo.svg'

const Container = styled('div', {
  opacity: 0.15,
  transform: props => props.position === 'left'
    ? 'rotate(-15deg)'
    : 'rotate(15deg)'
}, {
  position: false
})

const Image = styled('img', {
  display: 'block',
  maxWidth: '100%',
})

const Logo = (props) => (
  <Container { ...props }>
    <Image src={ logo } />
  </Container>
)

Logo.propTypes = {
  position: PropTypes.oneOf([ 'left', 'right' ]).isRequired,
}

export default Logo
