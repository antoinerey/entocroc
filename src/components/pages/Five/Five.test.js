import React from 'react'
import { shallow } from 'enzyme'
import Five from './Five'

it('renders without crashing', () => {
  shallow(<Five />)
})
