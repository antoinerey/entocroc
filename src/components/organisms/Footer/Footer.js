import React from 'react'
import Small from '../../atoms/Small'
import styled from 'utils/styled'

const Container = styled('footer', {
  width: '100%',
  padding: '1rem',
  textAlign: 'center',
})

const Component = (props) => (
  <Container { ...props }>
    <Small>{ 'Copyright © Entocroc 2017 • 01 23 45 67 89' }</Small>
    <Small>{ 'Avenue de l’Agrobiopole. 31326 Auzeville-Tolosane' }</Small>
  </Container>
)

export default Component