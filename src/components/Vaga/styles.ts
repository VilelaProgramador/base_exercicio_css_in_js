import styled from 'styled-components'
import type { AnchorHTMLAttributes } from 'react'
export const ItemVaga = styled.li`
  background-color: var(--bg-card, #fff7f7);
  border: 1px solid var(--borda, #e2e8f0);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  list-style: none;
`

export const TituloVaga = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #5a2d33;
`

type AProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const LinkVaga = styled.a.attrs({ href: '#' })<AProps>`
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 8px;
  display: inline-block;
  margin-top: 16px;
  font-weight: bold;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.95);
  }
  &:active {
    transform: translateY(1px);
  }
`
