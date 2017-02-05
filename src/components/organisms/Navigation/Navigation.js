import React from 'react'
import Bar from 'components/atoms/NavBar'
import Divider from 'components/atoms/NavBarDivider'
import Item from 'components/atoms/NavBarItem'
import styled from 'utils/styled'
import cake from './cake.svg'

const Group = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

const ImageContainer = styled('div', {
  width: '8rem',
  height: '8rem',
})

const Image = styled('img', {
  width: '100%',
})

const Navigation = () => (
  <Bar>
    <Group>
      <Item label={ 'Notre produit' } href={ '#notre-produit' } />
      <Divider />
      <Item label={ 'Nos valeurs' } href={ '#nos-valeurs' } />
    </Group>

    <ImageContainer>
      <Image src={ cake } />
    </ImageContainer>

    <Group>
      <Item label={ 'Notre equipe' } href={ '#notre-equipe' } />
      <Divider />
      <Item label={ 'Contact' } href={ '#contact' } />
    </Group>
  </Bar>
)

export default Navigation
