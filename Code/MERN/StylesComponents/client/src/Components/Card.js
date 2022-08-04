import React from 'react';
import { StyledCard } from './styles/Card.styled';

//We are going to received these values and have access. 
export default function Card({item: {id, tittle, body, image}}) {
  return (
    <StyledCard layout={id % 2 ===0 && 'row-reverse'}>

        <div>
            <h2>{tittle}</h2>
            <p>{body}</p>
        </div>

        <div>
            <img src={`./${image}`} alt=''/>
        </div>

    </StyledCard>
  )
}
