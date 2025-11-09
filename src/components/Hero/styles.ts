import styled from 'styled-components'

export const HeroWrapper = styled.section`
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-bottom: 24px;
`

export const Banner = styled.div`
  position: relative;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--cor-secundaria);
  background: linear-gradient(
      rgba(167, 114, 125, 0.75),
      rgba(167, 114, 125, 0.75)
    ),
    url('/img/hero.avif') center/cover no-repeat;
`

export const Titulo = styled.h2`
  font-size: clamp(24px, 3.6vw, 40px);
  line-height: 1.3;
  font-weight: 800;
  max-width: 80%;
  margin: 0 auto;
  z-index: 1;
`
