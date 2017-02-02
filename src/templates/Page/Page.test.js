import React from 'react'
import { shallow } from 'enzyme'
import Screen from './Page'

it('renders without crashing', () => {
  shallow(<Screen />)
})
