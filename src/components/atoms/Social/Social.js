import React, { PropTypes } from 'react'
import styled from 'utils/styled'
import { colors, fonts } from 'theme'

const focusStyle = {
  color: colors.white,
  background: props => colors[props.network],
}

const Wrapper = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '12.5rem',
  width: '12.5rem',
  fontSize: '1.25rem',
  fontFamily: fonts.bazar,
  color: props => colors[props.network],
  textTransform: 'uppercase',
  textDecoration: 'none',
  border: props => `0.25rem solid ${ colors[props.network] }`,
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1)',
  boxShadow: `0 3px 6px rgba(0, 0, 0, 0.12)`,
  borderRadius: '0.125rem',
  background: colors.white,
  cursor: 'pointer',
  outline: 'none',

  ':focus': focusStyle,
  ':hover': focusStyle,
}, {
  network: false,
})

const Social = (props) => (
  <Wrapper { ...props }>
    { props.network }
  </Wrapper>
)

Social.propTypes = {
  network: PropTypes.oneOf([
    'facebook',
    'twitter',
    'youtube',
    'email',
  ]).isRequired,
}

export default Social
