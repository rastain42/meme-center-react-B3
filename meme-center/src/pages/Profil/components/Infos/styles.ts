import styled from 'styled-components'

import { TitleText } from '../../../../components/Typography'

export const Container = styled.section`
  width: 100%;
  height: 34rem;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  > div {
    flex: 1;
  }

  > div.imageContainer {
    flex: 1;

    img {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    gap: 1rem;
    margin-top: 20rem;
    flex-direction: column-reverse;
    > img {
      width: 100%;
    }
  }
`

export const Title = styled(TitleText)`
  margin-bottom: 1rem;
`
