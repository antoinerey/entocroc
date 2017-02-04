import React from 'react'
import styled from 'utils/styled'
import { colors } from 'theme'

const Img = styled('img', {
  display: 'block',
  maxWidth: '100%',
})

const Container = styled('div', {
  border: `0.0625rem solid ${ colors.grey }`,
  borderRadius: '0.125rem',
  boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
  overflow: 'hidden',
})

const Image = ({ src, ...props }) => (
  <Container { ...props }>
    <Img src={ src } />
  </Container>
)

export default Image
