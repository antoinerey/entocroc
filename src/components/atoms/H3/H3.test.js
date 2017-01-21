import React from 'react'
import { shallow } from 'enzyme'
import H3 from './H3'

it('renders without crashing', () => {
  shallow(
    <H3>
      { 'Hello World' }
    </H3>
  )
})
