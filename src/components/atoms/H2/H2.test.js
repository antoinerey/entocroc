import React from 'react'
import { shallow } from 'enzyme'
import H2 from './H2'

it('renders without crashing', () => {
  shallow(
    <H2>
      { 'Hello World' }
    </H2>
  )
})
