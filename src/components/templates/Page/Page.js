import React, { PropTypes } from 'react'
import Container from 'components/atoms/Container'
import H2 from 'components/atoms/H2'
import Screen from 'components/atoms/Screen'
import styled from 'utils/styled'

const StyledContainer = styled(Container, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  flex: 1,
})

const StyledScreen = styled(Screen, {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '4rem 2rem',
})

const Title = styled(H2, {
  paddingBottom: '4rem',
  textAlign: 'center',
})

const Page = ({ children, title, ...props }) => (
  <StyledScreen { ...props }>
    { title && <Title>{ title }</Title> }
    <StyledContainer>
      { children }
    </StyledContainer>
  </StyledScreen>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Page
