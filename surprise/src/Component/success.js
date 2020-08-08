import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

function Success() {
    return (
        <StyledDiv>
            <div className="para">
                <p className="hiB animate__animated">Hi Pearl,</p>
                <p className="animate__animated animate__fadeInDown animate__delay-2s">Love of my life, the reason i keep fighting to be a better me.</p>
                <p className="animate__animated animate__fadeInLeft animate__delay-4s">There's no one else I'd rather do forever with. So, what say you?</p>
                <p className="animate__animated animate__fadeInUp animate__delay-5s">Let's get married, Yeah ?</p>
            </div>
            <footer><Link to="/">Home</Link></footer>
        </StyledDiv>
    )
}

export default Success;

const StyledDiv = styled.div`

    .para{
        margin-left: 30%;
        padding-top: 20%;
        Color: black;
        font-size: 20px;
        font-weight: 800px;
    }

    .hiB{
        animation: fadeInRight;
        animation-duration: 1.5s;
    }
    .animate__animated.animate__fadeInDown {
        --animate-duration: 1s;
      }
      .animate__animated.animate__fadeInLeft {
        --animate-duration: 1.8s;
      }
      .animate__animated.animate__fadeInUp {
        --animate-duration: 2.8s;
      }

      footer{
        margin: 10px 0px 5px 15px;
        position: fixed;
        bottom: 0;

        a{
            color: black;
            font-size: 18px;
        }
      }
`;