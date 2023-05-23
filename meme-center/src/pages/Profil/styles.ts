import styled from 'styled-components'
import { TitleText } from '../../components/Typography'

export const ProfilContainer = styled.div`
  margin-bottom: 9.8rem;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align:center;
  flex-direction: column;
  margin-top: 5em;
`

export const FormsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3.5rem;

  > div {
    flex: 1;
  }

`

export const Title = styled(TitleText)`
  margin-bottom: 1rem;
`
