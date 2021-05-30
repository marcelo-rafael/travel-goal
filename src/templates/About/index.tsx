import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas
        tempore sequi? Facere, totam voluptate optio molestias nemo neque
        deleniti dignissimos minus itaque, nobis deserunt. Velit porro beatae
        nam ut!
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
