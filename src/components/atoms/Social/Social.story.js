import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Social from './Social'

storiesOf('Social', module)
  .add('facebook', () => (
    <Social network={ 'facebook' } href={ 'https://facebook.com' } />
  ))
  .add('twitter', () => (
    <Social network={ 'twitter' } href={ 'https://twitter.com' } />
  ))
  .add('instagram', () => (
    <Social network={ 'instagram' } href={ 'https://instagram.com' } />
  ))
  .add('email', () => (
    <Social network={ 'email' } href={ 'mailto:hello@world.com' } />
  ))
