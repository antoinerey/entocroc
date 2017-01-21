import React from 'react'
import { shallow } from 'enzyme'
import Image from './Image'

const src = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?dpr=2&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop='

it('renders without crashing', () => {
  shallow(
    <Image src={ src } />
  )
})
