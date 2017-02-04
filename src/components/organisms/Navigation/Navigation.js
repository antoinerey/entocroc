import React from 'react'
import Bar from 'components/atoms/NavBar'
import Divider from 'components/atoms/NavBarDivider'
import Item from 'components/atoms/NavBarItem'
import Image from 'components/atoms/Image'
import styled from 'utils/styled'
import cake from './cake.svg'
import { colors } from 'theme'

const Group = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

const StyledImage = styled(Image, {
  width: '8rem',
  height: '8rem',
  border: 'none',
  boxShadow: 'none',
  background: colors.white,
})

const Navigation = () => (
  <Bar>
    <Group>
      <Item label={ 'Notre produit' } href={ '#notre-produit' } />
      <Divider />
      <Item label={ 'Nos valeurs' } href={ '#nos-valeurs' } />
    </Group>

    <Group>
      <StyledImage src={ cake } />
    </Group>

    <Group>
      <Item label={ 'Notre equipe' } href={ '#notre-equipe' } />
      <Divider />
      <Item label={ 'Contact' } href={ '#contact' } />
    </Group>
  </Bar>
)

export default Navigation
