import React from 'react';
import styled from 'styled-components';
  const StyledDiv = styled.div`
    background: lightgrey;
  `;
  const StyledH3 = styled.h3`
  color: darkslategrey;
  border-bottom: dotted black 3px;
  `;
  const StyledP = styled.p`
  border: solid black 2px;
  border-radius: 20px;
  margin: 5px 10px;
  padding: 5px 10px;
  background: darkslategrey;
  color: white;
  `;
  const StyledImg = styled.img`
  border: solid black 3px;
  border-radius: 10px;
  
  
  &:hover {
    transform: scale(1.3);
  }
  `;

  const NasaPhoto = (props) => {
    return (
        <StyledDiv className='nasa-photo-wrapper'>
            <StyledH3>{props.photo.title}</StyledH3>
            <StyledP>{props.photo.date}</StyledP>
            <StyledImg src={props.photo.hdurl} alt={props.photo.title} />
            <StyledP className='explanation'>{props.photo.explanation}</StyledP>
        </StyledDiv>
    )
  }

  export default NasaPhoto;