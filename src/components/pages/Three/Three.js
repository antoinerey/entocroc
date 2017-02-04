import React from 'react'
import Logo from 'components/atoms/Logo'
import Template from 'components/templates/Page'
import styled from 'utils/styled'

const StyledLogo = styled(Logo, {
  position: 'absolute',
  left: '-2rem',
  top: '1rem',
})

// TODO: Ajouter les onglets
const Three = () => (
  <Template title={ 'Avec nous, initiez-vous a la consommation d\'insectes' }  id={ 'nos-valeurs' }>
    <StyledLogo position={ 'left' } />
  </Template>
)

export default Three
