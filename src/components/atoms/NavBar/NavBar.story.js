import React from 'react'
import { storiesOf } from '@kadira/storybook'
import NavBar from './NavBar'

storiesOf('NavBar', module)
  .add('default', () => (
    <NavBar />
  ))
