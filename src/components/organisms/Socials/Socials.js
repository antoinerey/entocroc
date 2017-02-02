import React from 'react'
import Social from '../../atoms/Social'
import styled from 'utils/styled'

const Container = styled('div', {
  position: 'relative',
  width: '37.5rem',
  height: '21.875rem',
})

const StyledSocial = styled(Social, {
  position: 'absolute',
  top: props => typeof props.top === 'undefined' ? 'auto' : props.top,
  left: props => typeof props.left === 'undefined' ? 'auto' : props.left,
  right: props => typeof props.right === 'undefined' ? 'auto' : props.right,
  bottom: props => typeof props.bottom === 'undefined' ? 'auto' : props.bottom,
}, {
  top: false,
  left: false,
})

const socials = [
  { network: 'facebook', top: 0, left: 0, href: 'https://facebook.com' },
  { network: 'twitter', bottom: 0, left: '9.375rem', href: 'https://twitter.com' },
  { network: 'instagram', top: 0, right: '9.375rem', href: 'https://instagram.com' },
  { network: 'email', bottom: 0, right: 0, href: 'mailto:contact@entocroc.com' },
]

const Component = () => (
  <Container>
    { socials.map(social => <StyledSocial { ...social } /> ) }
  </Container>
)

export default Component
