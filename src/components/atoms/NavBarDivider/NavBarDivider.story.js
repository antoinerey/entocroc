import React from 'react'
import { storiesOf } from '@kadira/storybook'
import NavBarDivider from './NavBarDivider'

storiesOf('NavBarDivider', module)
  .add('default', () => (
    <NavBarDivider />
  ))
