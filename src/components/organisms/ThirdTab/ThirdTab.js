import React from 'react'
import Container from 'components/atoms/Container'
import Paragraph from 'components/atoms/Paragraph'
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

const ThirdTab = () => (
  <StyledContainer>
    <StyledParagraph>
      <Text>
        La production d’insectes représentent une <b>alternative durable</b> aux protéines animales classiques face à la raréfaction des ressources naturelles, aux pressions environnementales, à l’augmentation de la population mondiale et à la demande croissante en protéines.
      </Text>
      <Text>
        De plus, elle s’avère être <b>plus respectueuse de l’environnement</b> que les élevages existants. En effet, les insectes ont besoin de <b>moins d’espace et d’eau</b>, mais également de <b>moins de nourriture</b>. Ainsi, les insectes produisent 99% d’émissions de gaz à effet de serre en moins que le boeuf.
      </Text>
      <Text>
        Par ailleurs, <b>80% de l’insecte est comestible</b>, contre 55% du poulet ou encore 40% du porc et du boeuf.
      </Text>
      <Text>
        <i>Source : FAO 2014</i>
      </Text>
    </StyledParagraph>
  </StyledContainer>
)

export default ThirdTab
