import React from 'react'
import Logo from 'components/atoms/Logo'
import Template from 'components/templates/Page'
import styled from 'utils/styled'

const StyledLogo = styled(Logo, {
  position: 'absolute',
  right: '-2rem',
  bottom: '-3rem',
})

// TODO: Ajouter les membres de l'équipe
const Four = () => (
  <Template title={ 'Qui se cache derriere tout ça ?' }  id={ 'notre-equipe' }>
    <StyledLogo position={ 'right' } />
  </Template>
)

export default Four
