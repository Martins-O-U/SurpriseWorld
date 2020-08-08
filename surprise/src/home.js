import React, { useState } from "react";
import styled from "styled-components";


function Home(props) {
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
        console.log(message)

    }

    const submitInput = (event) => {
        event.preventDefault()
        if (message.name.toLowerCase() === "chidinma" || "chimma" || "chidimma" || "mma") {
            props.history.push('/success')
        }
        props.history.push('/failed')
    }
    return (
        <StyledDiv>
            <div className="welcome">
                <p><span>Welcome</span> to the home of surprises!</p>
                <p>To experience today's surprise, please enter your first name below</p>
                <form onSubmit={submitInput}>
                    <input name="name" placeholder="Enter Your Name" onChange={handleChange} value={message.name} required />
                    <button type="submit"> Submit</button>
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
        padding-top: 35%;

        span{
            font-size: 30px;
            font-weight: 100px;
        }

        form {
            display: flex;
            flex-direction: column;
            width: 70%;
            input{
                height: 20px;
            }
            button{
                margin-top: 3px;
                align-self: flex-end;
                border-radius: 10px;
                padding: 2px 5px;
                width: 80px;
            }
        }
    }

`;