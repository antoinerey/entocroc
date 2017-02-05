import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Graph from './Graph'

storiesOf('Graph', module)
  .add('default', () => (
    <Graph />
  ))
