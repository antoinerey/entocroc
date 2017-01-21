import React from 'react'
import { storiesOf } from '@kadira/storybook'
import H3 from './H3'

storiesOf('H3', module)
  .add('default', () => (
    <H3>
      { 'This is a H3 component' }
    </H3>
  ))
