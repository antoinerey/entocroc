import React from 'react'
import Container from 'components/atoms/Container'
import Paragraph from 'components/atoms/Paragraph'
import Graph from 'components/atoms/Graph'
import styled from 'utils/styled'

const StyledContainer = styled(Container, {
  display: 'flex',
  alignItems: 'center',
})

const StyledParagraph = styled(Paragraph, {
  flex: 1,
  paddingRight: '2rem',
})

const Text = styled('p', {
  ':not(:last-of-type)': {
    paddingBottom: '0.5rem',
  },
})

const SecondTab = () => (
  <StyledContainer>
    <StyledParagraph>
      <Text>
        Saviez-vous que les insectes renfermaient une quantité phénoménale d’éléments nutritifs ?
      </Text>
      <Text>
        Ils sont très riches en <b>protéines</b>, en <b>vitamines</b>, en <b>acides gras essentiels</b> et ils contiennent l’ensemble des <b>acides aminés essentiels</b>.
      </Text>
      <Text>
        Ils contiennent également énormément de <b>minéraux</b> : il y a deux fois plus de fer dans le grillon que dans les épinards !
      </Text>
      <Text>
        <i>Source : FAO 2014</i>
      </Text>
    </StyledParagraph>
    <Graph />
  </StyledContainer>
)

export default SecondTab
