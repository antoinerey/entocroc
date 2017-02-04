import React from 'react'
import { shallow } from 'enzyme'
import One from './One'

it('renders without crashing', () => {
  shallow(<One />)
})
