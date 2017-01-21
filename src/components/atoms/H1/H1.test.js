import React from 'react'
import { shallow } from 'enzyme'
import H1 from './H1'

it('renders without crashing', () => {
  shallow(
    <H1>
      { 'Hello World' }
    </H1>
  )
})
