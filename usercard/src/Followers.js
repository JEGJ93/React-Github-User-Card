import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`

    // display: flex;
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


const StyledP = styled.p`

    margin: auto;

`;

const StyledImg = styled.img`

    // max-width: 100%;
    // margin: 40px;
    // border-radius: 20px;

    border-radius: 20px;
    height: 250px;
  
  
`

function Followers(props) {

    return (
        <div>
            {props.followers.map(followers => (
                <StyledDiv>
                    <h2>Follower</h2>
                    <div>
                        <StyledImg src={followers.avatar_url}/>
                    </div>
                    <div>
                        <StyledP>Username: {followers.login}</StyledP>
                    </div>     
                </StyledDiv>
            ))}
        </div>
    );
};

export default Followers;