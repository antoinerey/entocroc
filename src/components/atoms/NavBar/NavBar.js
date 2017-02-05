import React from 'react'
import Container from 'components/atoms/Container'
import styled from 'utils/styled'
import { colors } from 'theme'

const Bar = styled('div', {
  height: '8.5rem',
  width: '100%',
  borderBottom: `2px solid ${ colors.black }`,
})

const StyledContainer = styled(Container, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
})

const NavBar = ({ children, ...props }) => (
  <Bar { ...props }>
    <StyledContainer>
      { children }
    </StyledContainer>
  </Bar>
)

export default NavBar
