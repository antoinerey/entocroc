import React from 'react'
import { storiesOf } from '@kadira/storybook'
import NavBarItem from './NavBarItem'

storiesOf('NavBarItem', module)
  .add('default', () => (
    <NavBarItem label={ 'Notre produit' } href={ '#notre-produit' } />
  ))
