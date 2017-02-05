import React, { PropTypes } from 'react'
import Image from 'components/atoms/Image'
import styled from 'utils/styled'
import { colors, fonts } from 'theme'

const Container = styled('div', {
  display: 'inline-flex',
  height: '13.75rem',
  width: '18.75rem',
  marginRight: '1rem',
  marginBottom: '1rem',
  background: colors.white,
  border: `0.0625rem solid ${ colors.grey }`,
  borderRadius: '0.125rem',
  boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
})

const StyledImage = styled(Image, {
  flex: 1,
  height: '100%',
  border: 'none',
  boxShadow: 'none',
  borderRadius: 0,
})

const Inner = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
})

const Name = styled('div', {
  fontFamily: fonts.bazar,
  fontSize: '1.25rem',
  textTransform: 'uppercase',
})

const Member = ({ name, src }) => (
  <Container>
    <StyledImage src={ src } />
    <Inner>
      <Name>{ name }</Name>
    </Inner>
  </Container>
)

Member.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default Member
