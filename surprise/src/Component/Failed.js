import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

function Failed() {
    return (
        <StyledDiv>
            <div className="animate__animated animate__fadeIn">
                <p>Oops! something went wrong. Please ensure you entered your "official first name in full" </p>
                <p className="tryAgain"><Link to="/"><i>Try Again</i></Link></p>
            </div>
        </StyledDiv>
    )
}

export default Failed;

const StyledDiv = styled.div`
@media only screen and (max-width: 500px){
    margin-left: 30%;
    padding-top: 37%;
    Color: black;
    font-size: 20px;
    font-weight: 800px;

    .animate__animated.animate__fadeIn {
        --animate-duration: 1.5s;
      }

    p{
        line-height: 1.5;
    }
    .tryAgain{
        text-align: right;
        margin-right: 50px;

        a{
            color: black;
            font-weight: 1000px;   
        }
    }
}
`;