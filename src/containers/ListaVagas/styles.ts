import styled from 'styled-components'

export const Secao = styled.section`
  max-width: var(--container);
  margin: 0 auto 40px;
  padding: 0 16px;
`

export const Grid = styled.ul`
  display: grid;
  gap: 16px;
  margin-top: 32px;

  @media (min-width: 1040px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
