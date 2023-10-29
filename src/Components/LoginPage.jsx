import styled from "styled-components";
import { useState } from "react";
import image from "../assets/img/image.png";
import eyeIcon from "../assets/img/eye.png";
import eyeSlashIcon from "../assets/img/eye.png";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const LoginFormContainer = styled.div`
  width: 50%;
  padding: 5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const LoginForm = styled.form`
  width: 100%;
`;

const LoginHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const LoginInputLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #555;
  display: block;
`;

const LoginInputContainer = styled.div`
  position: relative;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 1rem;
  padding-right: 2rem; /* Space for the eye icon */
`;

const EyeIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  border: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const LoginError = styled.p`
  color: red;
  margin-bottom: 1rem;
  text-align: center;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const CheckboxLabel = styled.label`
  font-size: 1rem;
  color: #555;
`;

const Link = styled.a`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
  display: block;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <LoginContainer>
            <ImageContainer>
                <Image src={image} alt="Image" />
            </ImageContainer>
            <LoginFormContainer>
                <LoginForm>
                    <LoginHeader>Login</LoginHeader>
                    {error && <LoginError>{error}</LoginError>}

                    <LoginInputLabel>Login ID</LoginInputLabel>
                    <LoginInput
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />

                    <LoginInputLabel>Password</LoginInputLabel>
                    <LoginInputContainer>
                        <LoginInput
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <EyeIcon
                            src={showPassword ? eyeSlashIcon : eyeIcon}
                            alt="Eye Symbol"
                            onClick={handleShowPassword}
                        />
                    </LoginInputContainer>

                    <CheckboxContainer>
                        <Checkbox type="checkbox" />
                        <CheckboxLabel>Remember Me</CheckboxLabel>
                    </CheckboxContainer>

                    <CheckboxContainer>
                        <Checkbox type="checkbox" />
                        <CheckboxLabel>Agree to Terms and Conditions</CheckboxLabel>
                    </CheckboxContainer>

                    <Link href="#">Change Password</Link>
                    <Link href="#">Don't Have an Account? Register Here</Link>

                    <LoginButton type="submit">Login</LoginButton>
                </LoginForm>
            </LoginFormContainer>
        </LoginContainer>
    );
};

export default LoginPage;
