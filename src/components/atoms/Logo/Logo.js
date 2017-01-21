import React, { PropTypes } from 'react'
import styled from 'utils/styled'
import logo from './logo.svg'

const Container = styled('div', ({ position }) => {
  const angle = position === 'left' ? '-15deg' : '15deg'

  return {
    opacity: 0.15,
    transform: `rotate(${ angle })`,
  }
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
