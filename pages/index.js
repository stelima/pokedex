import styled from 'styled-components'

import Cards from '../src/components/Cards'
import db from '../db.json'

const Title = styled.h1`
  font-size: 50px;
  width: fit-content;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home({ pokemons }) {
  return (
   <>
    <Title>Pokédex</Title>
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
      } else {
      console.log('Falha ao pegar os dados da api, retornando dados mockados');
      return db
      }
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
