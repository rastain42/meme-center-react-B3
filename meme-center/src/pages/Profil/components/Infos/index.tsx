import {
  Container,
  Content,
  Title,
} from './styles'

import { RegularText } from '../../../../components/Typography'

export function InfosComponent() {
  return (
    <Container>
      <Content className="container">
        <div>
          <section>
            <Title size="xl">
              Connexion
            </Title>
            <RegularText size="l" color="subtitle" as="h3">
              Ici c'est gratuit et c'est un projet étudiant en react ;)
            </RegularText>
          </section>
        </div>


      </Content>
    </Container>
  )
}
