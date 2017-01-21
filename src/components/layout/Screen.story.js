import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Screen from './Screen'

storiesOf('Screen', module)
  .add('Screen', () => (
    <div>
      <Screen>
        { 'This is a screen component' }
      </Screen>
      <Screen>
        { 'This is a screen component' }
      </Screen>
      <Screen>
        { 'This is a screen component' }
      </Screen>
      <Screen>
        { 'This is a screen component' }
      </Screen>
    </div>
  ))
