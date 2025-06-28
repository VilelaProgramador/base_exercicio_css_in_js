import styled from 'styled-components'

export const ItemVaga = styled.li`
  background-color: #eee;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`

export const TituloVaga = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const LinkVaga = styled.a`
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  text-decoration: none;
  padding: 8px;
  border-radius: 8px;
  display: inline-block;
  margin-top: 16px;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`
