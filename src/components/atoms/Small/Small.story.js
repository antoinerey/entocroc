import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Small from './Small'

storiesOf('Small', module)
  .add('default', () => (
    <Small>
      { 'This is a small component' }
    </Small>
  ))
