import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Logo from './Logo'

storiesOf('Logo', module)
  .add('left', () => (
    <Logo position={ 'left' } />
  ))
  .add('right', () => (
    <Logo position={ 'right' } />
  ))
