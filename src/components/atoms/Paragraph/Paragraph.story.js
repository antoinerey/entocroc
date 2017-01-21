import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Paragraph from './Paragraph'

storiesOf('Paragraph', module)
  .add('default', () => (
    <Paragraph>
      { 'This is a Paragraph component' }
    </Paragraph>
  ))
