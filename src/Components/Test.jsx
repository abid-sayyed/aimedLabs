import styled from "styled-components";
import {useState} from "react";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 50%;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

const LoginHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const LoginError = styled.p`
  color: red;
  margin-bottom: 1rem;
`;

const Test = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Login logic here
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleSubmit}>
                <LoginHeader>Login</LoginHeader>
                {error && <LoginError>{error}</LoginError>}
                <LoginInput
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <LoginInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <LoginButton type="submit">Login</LoginButton>
            </LoginForm>
        </LoginContainer>
    );
};

export default Test;
