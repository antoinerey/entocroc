import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Heading from './Heading'

storiesOf('Heading', module)
  .add('H1', () => (
    <Heading level={ 'h1' }>
      { 'This is a H1 heading component' }
    </Heading>
  ))
  .add('H2', () => (
    <Heading level={ 'h2' }>
      { 'This is a H2 heading component' }
    </Heading>
  ))
