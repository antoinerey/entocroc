import React from 'react'
import Small from '../../atoms/Small'
import styled from 'utils/styled'

const Container = styled('footer', {
  padding: '1rem',
  textAlign: 'center',
})

const Component = () => (
  <Container>
    <Small>{ 'Copyright © Entocroc 2017 • 01 23 45 67 89' }</Small>
    <Small>{ 'Avenue de l’Agrobiopole. 31326 Auzeville-Tolosane' }</Small>
  </Container>
)

export default Component
