import React from 'react'
import Container from 'components/atoms/Container'
import Image from 'components/atoms/Image'
import Paragraph from 'components/atoms/Paragraph'
import image from './image.jpg'
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

const FirstTab = () => (
  <StyledContainer>
    <StyledParagraph>
      <Text>
        Nos bouchées vous permettent d’allier <b>plaisir</b> et <b>découverte</b> en vous initiant petit à petit à la consommation d’insectes, tout en retrouvant des saveurs connues et appréciées.
      </Text>
      <Text>Faire entrer petit à petit les insectes dans notre alimentation, en surprenant les plus réfractaires d’entre vous : voilà la mission des bouchées ENTOCROC. Susciter l’envie, avec plaisir et ouverture d’esprit. Ces gâteaux à base de farine d’insectes sont parfaits pour débuter !</Text>
    </StyledParagraph>
    <Image src={ image } />
  </StyledContainer>
)

export default FirstTab
