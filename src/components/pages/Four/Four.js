import React from 'react'
import Logo from 'components/atoms/Logo'
import Member from 'components/atoms/Member'
import Template from 'components/templates/Page'
import styled from 'utils/styled'

import camille from './Camille.jpg'
import eleonore from './Eleonore.jpg'
import eloise from './Eloise.jpg'
import jessica from './Jessica.jpg'
import xuqiang from './Xuqiang.jpg'

const members = [
  { name: 'Camille', src: camille },
  { name: 'Eleonore', src: eleonore },
  { name: 'Eloise', src: eloise },
  { name: 'Jessica', src: jessica },
  { name: 'Xuqiang', src: xuqiang },
]

const StyledLogo = styled(Logo, {
  position: 'absolute',
  right: '-2rem',
  bottom: '-3rem',
})

const Inner = styled('div', {
  textAlign: 'center',
})

const Four = () => (
  <Template title={ 'Qui se cache derriere tout ça ?' }  id={ 'notre-equipe' }>
    <Inner>
      { members.map(member => <Member { ...member } /> ) }
    </Inner>
    <StyledLogo position={ 'right' } />
  </Template>
)

export default Four
