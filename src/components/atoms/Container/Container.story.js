import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Container from './Container'

storiesOf('Container', module)
  .add('default', () => (
    <Container>
      { 'This is a container component' }
    </Container>
  ))
