import React from 'react'
import { storiesOf } from '@kadira/storybook'
import FirstTab from './FirstTab'

storiesOf('FirstTab', module)
  .add('default', () => (
    <FirstTab />
  ))
