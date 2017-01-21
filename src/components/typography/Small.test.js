import React from 'react'
import { shallow } from 'enzyme'
import Small from './Small'

it('renders without crashing', () => {
  shallow(
    <Small>
      { 'Hello World' }
    </Small>
  )
})
