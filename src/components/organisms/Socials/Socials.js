import React from 'react'
import Social from '../../atoms/Social'
import styled from 'utils/styled'

const Container = styled('div', {
  position: 'relative',
  width: '43.625rem',
  height: '21.875rem',
  marginBottom: '4rem',
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
  { network: 'facebook', top: 0, left: 0, href: 'https://www.facebook.com/entocroc' },
  { network: 'twitter', bottom: 0, left: '9.375rem', href: 'https://twitter.com' },
  { network: 'youtube', top: 0, right: '15.5625rem', href: 'https://www.youtube.com/channel/UC_lUklAfl3K4PIeCt-0ZBTg' },
  { network: 'email', bottom: 0, right: '6.25rem', href: 'mailto:entocroc@gmail.com' },
  { network: 'pinterest', top: 0, right: 0, href: 'https://pinterest.com' },
]

const Component = (props) => (
  <Container { ...props }>
    { socials.map(social => <StyledSocial { ...social } /> ) }
  </Container>
)

export default Component
