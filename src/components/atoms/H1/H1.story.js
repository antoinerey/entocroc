import React from 'react'
import { storiesOf } from '@kadira/storybook'
import H1 from './H1'

storiesOf('H1', module)
  .add('default', () => (
    <H1>
      { 'This is a H1 component' }
    </H1>
  ))
