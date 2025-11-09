import styled from 'styled-components'
import type {
  FormHTMLAttributes,
  InputHTMLAttributes,
  ButtonHTMLAttributes,
  LabelHTMLAttributes
} from 'react'

export const Secao = styled.section`
  max-width: var(--container);
  margin: 0 auto 16px;
  pad
  `

export const Form = styled.form<FormHTMLAttributes<HTMLFormElement>>`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  background: #f3eadc;
  border: 1px solid var(--borda);
  border-radius: 12px;
  padding: 12px;
`

export const Label = styled.label<LabelHTMLAttributes<HTMLLabelElement>>`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

export const Campo = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  border: 1px solid var(--borda);
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: var(--cor-principal);
    box-shadow: 0 0 0 3px rgba(167, 114, 125, 0.15);
  }
`

export const Botao = styled.button.attrs({ type: 'submit' })<
  ButtonHTMLAttributes<HTMLButtonElement>
>`
  padding: 10px 16px;
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.95);
  }
  &:active {
    transform: translateY(1px);
  }
`
