import { FormEvent, useState } from 'react'
import * as S from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  return (
    <S.Secao>
      <S.Form
        onSubmit={aoEnviarForm}
        role="search"
        aria-label="Pesquisar vagas"
      >
        <S.Label htmlFor="pesquisa">Pesquisar vagas</S.Label>
        <S.Campo
          id="pesquisa"
          name="q"
          placeholder="Front-end, fullstack, node, design"
          type="search"
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
        />
        <S.Botao type="submit">Pesquisar</S.Botao>
      </S.Form>
    </S.Secao>
  )
}

export default FormVagas
