import React, { useState } from "react";
import styled from "styled-components";


function Home() {
    const Name = {
        name: '',
    }

    const [message, setMessage] = useState(Name)

    const handleChange = (event) => {
        event.persist();
        setMessage({
            ...message,
            [event.target.name]: event.target.value
        })

    }
    return (
        <StyledDiv>
            <div className="welcome">
                <p><span>Welcome</span> to the home of surprises</p>
                <p>To experience today's surprise, please enter your first name below</p>
                <form>
                    <input name="name" placeholder="Your Name" onChange={handleChange} value={message.name} required />
                    <button type="submit" />
                </form>
            </div>
        </StyledDiv>
    )
}

export default Home;

const StyledDiv = styled.div`
    Color: black;
    font-size: 20px;
    font-weight: 800px;

    .welcome{
        margin-left: 30%;
        padding-top: 40%;

        span{
            font-size: 30px;
            font-weight: 100px;
        }
    }

`;