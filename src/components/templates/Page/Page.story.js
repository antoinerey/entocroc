import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Page from './Page'

storiesOf('Page', module)
  .add('default', () => (
    <Page title={ 'Decouvrez nos bouchees' }>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt possimus quasi suscipit. Aut blanditiis eos magni nulla quibusdam unde. Culpa debitis dolorem dolores hic incidunt necessitatibus perferendis quas velit.
    </Page>
  ))
