import styled from 'utils/styled'
import { colors } from 'theme'

const Screen = styled('div', {
  minHeight: '100vh',

  ':not(:last-of-type)': {
    borderBottom: `0.25rem solid ${ colors.black }`,
  },
})

export default Screen
