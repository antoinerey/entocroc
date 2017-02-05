import React from 'react'
import Container from 'components/atoms/Container'
import FirstTab from 'components/organisms/FirstTab'
import SecondTab from 'components/organisms/SecondTab'
import ThirdTab from 'components/organisms/ThirdTab'
import styled from 'utils/styled'
import { colors, fonts } from 'theme'

const Content = styled(Container, {
  paddingTop: '9rem',
})

const Outer = styled(Container, {
  position: 'relative',
  height: '100%',
  width: '100%',
})

const TabsContainer = styled(Container, {
  position: 'absolute',
  top: '3rem',
  left: 0,
  width: '100%',
})

const Tab = styled('div', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '3.5rem',
  width: 'calc(100% / 3)',
  fontSize: '1.25rem',
  fontFamily: fonts.bazar,
  textTransform: 'uppercase',
  borderBottom: props => props.selected && `3px solid ${ colors.black }`,
  cursor: 'pointer',
}, {
  selected: false,
})

class Tabs extends React.Component {
  state = { selected: 1 }

  handleSelectFirst = () => this.setState({ selected: 1 })
  handleSelectSecond = () => this.setState({ selected: 2 })
  handleSelectThird = () => this.setState({ selected: 3 })

  isFirstSelected = () => this.state.selected === 1
  isSecondSelected = () => this.state.selected === 2
  isThirdSelected = () => this.state.selected === 3

  render() {
    return (
      <Outer>
        <TabsContainer>
          <Tab selected={ this.isFirstSelected() } onClick={ this.handleSelectFirst }>
            Plaisir et decouverte
          </Tab>
          <Tab selected={ this.isSecondSelected() } onClick={ this.handleSelectSecond }>
            Apports nutritifs
          </Tab>
          <Tab selected={ this.isThirdSelected() } onClick={ this.handleSelectThird }>
            Protection de l'environnement
          </Tab>
        </TabsContainer>
        <Content>
          { this.isFirstSelected() && <FirstTab /> }
          { this.isSecondSelected() && <SecondTab /> }
          { this.isThirdSelected() && <ThirdTab /> }
        </Content>
      </Outer>
    )
  }
}

export default Tabs
