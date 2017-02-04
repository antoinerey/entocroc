import React, { PropTypes } from 'react'
import { fonts } from 'theme'
import styled from 'utils/styled'

const Container = styled('a', {
  fontSize: '1.5rem',
  fontFamily: fonts.bazar,
  textDecoration: 'none',
  textTransform: 'uppercase',
})

const NavBarItem = ({ label, ...props }) => (
  <Container { ...props }>
    { label }
  </Container>
)

NavBarItem.propTypes = {
  label: PropTypes.string.isRequired,
}

export default NavBarItem
