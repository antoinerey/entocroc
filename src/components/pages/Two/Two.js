import React from 'react'
import Button from 'components/atoms/Button'
import H3 from 'components/atoms/H3'
import Image from 'components/atoms/Image'
import Logo from 'components/atoms/Logo'
import Paragraph from 'components/atoms/Paragraph'
import Template from 'components/templates/Page'
import image from './image.jpg'
import styled from 'utils/styled'

const Inner = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
})

const StyledH3 = styled(H3, {
  paddingBottom: '1rem',
})

const StyledImage = styled(Image, {
  maxWidth: '25rem',
})

const StyledInner = styled(Inner, {
  flexDirection: 'column',
})

const StyledLogo = styled(Logo, {
  position: 'absolute',
  right: '-2rem',
  bottom: '-3rem',
})

const Text = styled('div', {
  width: '35rem',
  paddingBottom: '2rem',
})

const texts = [
  {
    title: 'Un gateau croquant a base de farine d\'insectes',
    body: 'Consommez des insectes sans vous en appercevoir avec notre délicieuse préparation à base de vers de farine français !',
  },
  {
    title: 'Un praline gourmand',
    body: 'Fondez pour cet onctueux mélange de sucre, d’amandes et de noisettes.',
  },
  {
    title: 'Un enrobage tout chocolat',
    body: 'Retrouvez vos douceurs préférées avec notre enrobage chocolat noir.',
  },
]

const Two = () => (
  <Template title={ 'Decouvez-nos bouchees' } id={ 'notre-produit' }>
    <Inner>
      <div>
        <StyledImage src={ image } />
      </div>
      <StyledInner>
        { texts.map(({ body, title }) => (
          <Text>
            <StyledH3>{ title }</StyledH3>
            <Paragraph>{ body }</Paragraph>
          </Text>
        )) }
        <Button href={ 'https://amazon.com' }>
          Par ici !
        </Button>
      </StyledInner>
    </Inner>
    <StyledLogo position={ 'right' } />
  </Template>
)

export default Two
