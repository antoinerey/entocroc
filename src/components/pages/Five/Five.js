import React from 'react'
import Footer from 'components/organisms/Footer'
import Logo from 'components/atoms/Logo'
import Template from 'components/templates/Page'
import Socials from 'components/organisms/Socials'
import styled from 'utils/styled'

const StyledFooter = styled(Footer, {
  position: 'absolute',
  left: 0,
  bottom: 0,
})

const StyledLogo = styled(Logo, {
  position: 'absolute',
  left: '-2rem',
  bottom: '-3rem',
})

const StyledSocials = styled(Socials, {
  transform: 'translateX(15rem)',
})

const Five = () => (
  <Template title={ 'Retrouvez-nous, nous sommes partout !' }>
    <StyledLogo position={ 'left' } />
    <StyledSocials />
    <StyledFooter />
  </Template>
)

export default Five
