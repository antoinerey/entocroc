import React from 'react'
import { action, storiesOf } from '@kadira/storybook'
import Button from './Button'

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={ action('Button clicked !') }>
      { 'This is a button' }
    </Button>
  ))
  .add('link', () => (
    <Button href={ '#about' } onClick={ action('Link clicked !') }>
      { 'This is a link' }
    </Button>
  ))
