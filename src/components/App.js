import React from 'react'
import Two from 'components/pages/Two'
import Three from 'components/pages/Three'
import Four from 'components/pages/Four'
import Five from 'components/pages/Five'
import styled from 'utils/styled'

const Container = styled('div')

const App = () => (
  <Container>
    <Two />
    <Three />
    <Four />
    <Five />
  </Container>
)

export default App
