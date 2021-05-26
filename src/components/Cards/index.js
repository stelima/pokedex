import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

export default function Cards({ pokemon }) {
  // const router = useRouter();
  // router.push(`/quiz?name=${name}`);
  return (
    <Wrapper>
      {pokemon.map((pokemon, index) => (
        <Link key={index} href={`/detail/?id=${pokemon.num}`} as={`/detail/${pokemon.num}`}>
        <Card bg={backgrounds[pokemon.type[0]]}>
          <div>
            <Name>{pokemon.name}</Name>
            {pokemon.type.map((type, i) =>
              <Type key={i} color={colors[pokemon.type[0]]}>{type}</Type>
            )}
            </div>
            <div>
             <Id color={colors[pokemon.type[0]]}>{pokemon.num}</Id>
            <img src={pokemon.img} />
            </div>
        </Card>
        </Link>
      ))}
  </Wrapper>
  );
}

const backgrounds = {
    Grass: '#55d3b2',
    Fire: '#F88787',
    Water: '#78B7F8',
    Bug: '#76B261'
}

const colors = {
  Grass: '#7ED7C1',
  Fire: '#F9979C',
  Water: '#91C8F8',
  Bug: '#A0CA65'
}

const Wrapper = styled.div`
  width: 360px;
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  @media (min-width: 600px) {
  width: 600px;
  justify-content: space-around;
}
`;
const Card = styled.div`
 width: 200px;
 border-radius: 17px;
 color: white;
 height: 130px;
 margin-bottom: 25px;
 padding: 15px;
 display: flex;
 justify-content: space-between;
 background: ${({ bg }) => bg};
 cursor: pointer;
 img {
   width: 100px;
 }
 @media (min-width: 600px) {

}
`;
const Id = styled.div`
  font-size: 30px;
  color: ${({ color }) => color};
  font-weight: 700;
  text-align: right;
`;
const Name = styled.p`
  font-weight: 700;
  font-size: 16px;
  margin-top: 12px;
`;
const Type = styled.p`
  padding: 5px 15px;
  border-radius: 20px;
  text-align: center;
  width: 50px;
  background: ${({ color }) => color};
`;