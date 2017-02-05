import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Member from './Member'
import image from './Camille.jpg'

storiesOf('Member', module)
  .add('default', () => (
    <Member src={ image } name={ 'Camille' } />
  ))
