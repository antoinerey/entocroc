import React from 'react'
import { storiesOf } from '@kadira/storybook'
import One from './One'

storiesOf('One', module)
  .add('default', () => (
    <One />
  ))
