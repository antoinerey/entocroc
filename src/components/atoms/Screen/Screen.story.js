import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Screen from './Screen'

storiesOf('Screen', module)
  .add('default', () => (
    <Screen>
      { 'This is a screen component' }
    </Screen>
  ))
