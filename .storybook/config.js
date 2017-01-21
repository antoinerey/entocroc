import { configure } from '@kadira/storybook';
import * as theme from 'theme'
import 'glamor/reset'

function loadStories() {
  const contextRequire = require.context('..', true, /\.story\.js$/)
  contextRequire.keys().map(contextRequire)
}

theme.setup()
configure(loadStories, module);

