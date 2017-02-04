import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Five from './Five'

storiesOf('Five', module)
  .add('default', () => (
    <Five />
  ))
