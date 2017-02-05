import React from 'react'
import Paragraph from 'components/atoms/Paragraph'
import styled from 'utils/styled'
import { colors, fonts } from 'theme'

const Bar = styled('div', {
  height: props => props.height,
  width: '2.5rem',
  background: props => props.color,
  borderRadius: '0.125rem',
  boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
}, {
  color: false,
  height: false,
})

const BarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  ':not(:last-of-type)': {
    paddingRight: '1rem',
  },
})

const BarTitle = styled('div', {
  paddingBottom: '0.5rem',
  fontWeight: 700,
  fontSize: '0.875rem',
  textAlign: 'center',
})

const BarLegend = styled('div', {
  paddingTop: '0.5rem',
  fontSize: '0.875rem',
})

const Container = styled('div', {
  height: '26rem',
  width: '27rem',
  padding: '1.5rem',
  border: `0.0625rem solid ${ colors.grey }`,
  borderRadius: '0.125rem',
  boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
})

const Inner = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
})

const Group = styled('div', {
  paddingBottom: '1.5rem',
})

const Heading = styled('div', {
  fontFamily: fonts.bazar,
  textTransform: 'uppercase',
})

const Legend = styled('div', {
  paddingTop: '1rem',
  fontSize: '0.85rem',
  fontStyle: 'italic',
})

const Graph = () => (
  <Container>
    <Group>
      <Heading>Proteines</Heading>
      <Inner>
        <BarContainer>
          <BarTitle>25</BarTitle>
          <Bar color={ colors.yellow } height={ 57 } />
          <BarLegend>poulet</BarLegend>
        </BarContainer>
        <BarContainer>
          <BarTitle>55</BarTitle>
          <Bar color={ colors.orange } height={ 107 } />
          <BarLegend>boeuf</BarLegend>
        </BarContainer>
        <BarContainer>
          <BarTitle>63</BarTitle>
          <Bar color={ colors.red } height={ 137 } />
          <BarLegend>grillon</BarLegend>
        </BarContainer>
      </Inner>
      <Legend>grammes de protéines pour 100 grammes de matière sèche</Legend>
    </Group>
    <Group>
      <Heading>Vitamines B1, B2, B12</Heading>
      <Paragraph>en quantités comparables avec le boeuf</Paragraph>
    </Group>
    <Group>
      <Heading>Omegas 3, 6</Heading>
      <Paragraph>en quantités comparables avec le poisson</Paragraph>
    </Group>
  </Container>
)

export default Graph
