import React from 'react'
import styled from 'utils/styled'
import { colors } from 'theme'

const Container = styled('div', {
  height: '20rem',
  width: '20rem',
  backgroundImage: props => `url(${ props.src })`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  border: `0.0625rem solid ${ colors.grey }`,
  borderRadius: '0.125rem',
  boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
}, {
  src: false,
})

const Image = (props) => (
  <Container { ...props } />
)

export default Image
