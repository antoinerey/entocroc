import React from 'react'
import { storiesOf } from '@kadira/storybook'
import H2 from './H2'

storiesOf('H2', module)
  .add('default', () => (
    <H2>
      { 'This is a H2 component' }
    </H2>
  ))
