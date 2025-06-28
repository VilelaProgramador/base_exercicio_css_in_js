import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  gap: 16px;
`

export const Campo = styled.input`
  padding: 8px;
  width: 320px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
`

export const Botao = styled.button`
  padding: 8px 16px;
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`
