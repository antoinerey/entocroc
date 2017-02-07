import React from 'react'
import Logo from 'components/atoms/Logo'
import Template from 'components/templates/Page'
import Tabs from 'components/atoms/Tabs'
import styled from 'utils/styled'

const StyledLogo = styled(Logo, {
  position: 'absolute',
  left: '-5rem',
  top: '1rem',
})

const Three = () => (
  <Template title={ 'Avec nous, initiez-vous a la consommation d\'insectes' }  id={ 'nos-valeurs' }>
    <Tabs />
    <StyledLogo position={ 'left' } />
  </Template>
)

export default Three
