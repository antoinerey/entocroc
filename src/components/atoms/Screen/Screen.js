import styled from 'utils/styled'
import { colors } from 'theme'

const Screen = styled('div', {
  height: '100vh',
  overflow: 'hidden',

  ':not(:last-of-type)': {
    borderBottom: `0.25rem solid ${ colors.black }`,
  },
})

export default Screen
