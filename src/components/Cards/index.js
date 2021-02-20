import React from 'react';
import styled from 'styled-components';

export default function Cards({ pokemon }) {
  return (
    <Wrapper>
      {pokemon.map((pokemon, index) => (
        <Card key={index}>
            <span>{pokemon.num}</span>
            <p>{pokemon.name}</p>
            {pokemon.type.map((type, i) =>
              <p className='type' key={i}>{type} </p>
            )}
            <img src={pokemon.img} />
        </Card>
      ))}
  </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 360px;
  padding: 20px;
`;
const Card = styled.div`
 background: #55d3b2;
 width: 300px;
 border-radius: 17px;
 color: white;
 height: auto;
 margin-bottom: 20px;
 padding: 15px;
 img {
   width: 80px;
 }
 .type {
   background: #72D2C6;
   padding: 4px 10px;
    text-transform: uppercase;
    border-radius: 20px;
    width: auto;
 }
`;