import React from 'react'
import Button from 'components/atoms/Button'
import H1 from 'components/atoms/H1'
import H2 from 'components/atoms/H2'
import Logo from 'components/atoms/Logo'
import Navigation from 'components/organisms/Navigation'
import Screen from 'components/atoms/Screen'
import styled from 'utils/styled'

const ButtonContainer = styled('div')

const Inner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100% - 8rem)',
  flex: 1,
})

const StyledH2 = styled(H2, {
  padding: '2rem 0',
})

const StyledLogo = styled(Logo, {
  position: 'absolute',
  left: '-2rem',
  bottom: '-3rem',
})

const StyledScreen = styled(Screen, {
  display: 'flex',
  flexDirection: 'column',
})

const One = () => (
  <StyledScreen>
    <Navigation />
    <Inner>
      <H1>ENTOCROC</H1>
      <StyledH2>Croquez la vie autrement</StyledH2>
      <ButtonContainer>
        <Button href={ 'https://amazon.com' }>
          Osez !
        </Button>
      </ButtonContainer>
    </Inner>
    <StyledLogo position={ 'left' } />
  </StyledScreen>
)

export default One
