import React, { PropTypes } from 'react'
import styled from 'utils/styled'
import { colors } from 'theme'

const focusStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
}

const styles = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2rem',
  padding: '0 2rem',
  background: colors.black,
  color: colors.white,
  fontSize: '0.875rem',
  fontWeight: 600,
  fontFamily: 'Open Sans, Roboto, Arial, sans-serif',
  textTransform: 'uppercase',
  textDecoration: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  borderRadius: '1rem',
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1)',

  ':hover': focusStyle,
  ':focus': focusStyle,
}

const StyledButton = styled('button', styles)
const StyledLink = styled('a', styles)

const Button = ({ href, ...props }) => {
  return href
    ? <StyledLink { ...props } href={ href } />
    : <StyledButton { ...props } />
}

Button.propTypes = {
  href: PropTypes.string,
}

export default Button
