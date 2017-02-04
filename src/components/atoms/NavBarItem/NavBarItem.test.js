import React from 'react'
import { shallow } from 'enzyme'
import NavBarItem from './NavBarItem'

it('renders without crashing', () => {
  shallow(<NavBarItem />)
})
