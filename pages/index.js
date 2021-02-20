import styled from 'styled-components'

import Cards from '../src/components/Cards'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home({ pokemons }) {
  return (
   <>
    <Title>Pokedex</Title>
    <Cards {...pokemons}/>
   </>
  )
}

export async function getServerSideProps() {
try {
  const pokemons = await fetch("https://api.amrcloud.com.br/api/pokedex")
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha ao pegar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)

  return {
    props: {
      pokemons,
    },
  };
} catch(err) {
  throw new Error(err);
}
}
