import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`

    
    // display: flex;
    // wrap: wrap;
    // flex-direction: column;
    // border: 1px solid black; 
    // border-radius: 20px;

    margin-top: 36px;
    // color: #5b5656;
    border: 1px solid black;
    padding: 10px;
    width: 300px;
    background-color: #5b5656;
    border-radius: 10px;
    
    
    
`;

const StyledImg = styled.img`
  
//   max-width: 100%;
//   margin: 40px;
  
    border-radius: 20px;
    height: 250px;
  
  
  
  
`

const StyledP = styled.p`

    margin: 15%;


`;




function Card(props) {

    return (
        <div>
                <StyledDiv>
                    <h2>My User-Card</h2>
                    <div>
                        <StyledImg src={props.card.avatar_url}/>
                    </div>
                        <div>
                            <StyledP>Username: {props.card.name}</StyledP>
                            <StyledP>Profile: {props.card.html_url}</StyledP>
                            <StyledP>Bio: {props.card.bio}</StyledP>
                            <StyledP>Followers :{props.card.followers}</StyledP>
                            <StyledP>Following: {props.card.following}</StyledP>
                            <StyledP>Company: {props.card.company}</StyledP>
                            <StyledP>Location: {props.card.location}</StyledP>
                        </div>
                </StyledDiv>
        </div>
        
    )
}

export default Card;
