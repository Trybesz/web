import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';
import Input from 'components/Input';
import { saveTokens } from 'utils/loginRedirect'

const LoginRoot = styled.div`
    z-index: 1;
    width: 100%;
`

const LoginButton = styled(Button)`
    @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
        width: 50%;
        margin-top: 10%;
    }
    width: 250px;
    margin-left: auto;
    margin-right: auto;
`

const RegisterButton = styled(Button)`
    @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
        width: 50%;
        margin-top: 5%;
    }
    width: 250px;
    margin-left: auto;
    margin-right: auto;
`;

const LoginForm = styled.form`

`

const H1 = styled.h1`
font-family: 'AvenirNextRoundedW01-Re', Arial, sans-serif;
font-size: 3.75em;
font-weight: 500;
padding: 0 10px;
position: relative;
z-index: 4;
-webkit-font-smoothing: antialiased;
text-align: center;

@media (max-width: 767px) {
    font-size: 2.01em;
}`

const LoginInput = styled(Input)`
    background-color: ${({ theme }) => theme.color.faintGrey};
`

const RegisterLinkDiv = styled.div`
    width: 100%;
    padding-top: 25%;
`
const Error = styled.div`
    display: ${({isError}) => isError ? 'flex' : 'none'};
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.danger};
    font-size: 1.4em;
    margin: 0 0 10px;
    padding: 10px;
    color: ${({theme})=> theme.color.white};
`;


const Login = (setRoute, history, updateToken) => {
    const [credentials, setCredentials] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false)
    const [error, setError] = useState('')
    const userRef = useRef({
        credentials: '',
        password: '',
    })

    const updateAuth = (event) => {
        setCredentials(event.target.value)
        updateUser({ credentials })
    }

    const updatePassword = (event) => {
        setPassword(event.target.value)
        updateUser({ password })
    }

    const updateUser = async (data) => {
        userRef.current = { ...userRef.current, ...data };
    }

    const validateForm = (e) => {

        e.preventDefault();


        if (!credentials) {
            setError('Please enter email, or username.');
        }

        if (!password) {
            setError('Please enter your password.');
        }


        if (error !== "") {
            setButtonDisabled(true)
            return;
        }

        loginUser();
    };

    const loginRedirect = (body) => {
        const { _id, token } = saveTokens(body, false);

        updateToken({ token, user: { _id, interests: [] } });
        setRoute('');

        history.go(0);
        history.push('/');
    };

    const loginUser = async () => {
        try {
            const user = userRef.current;

            const body = {
                credentials: user.credentials,
                password: user.password,
            };

            if (user.credentials) body.credentials = user.credentials;

            const response = await fetch("http://localhost:5000/api/users/login", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            setButtonDisabled(false)
            loginRedirect(data)
        } catch (error) {
            setError('Something went wrong. Please try again.')
        }

    }

    return (<LoginRoot>
        <LoginForm onSubmit={validateForm} noValidate>
            <Error isError={error.length > 0}>{error}</Error>
            <LoginInput label={'Username'} onChange={updateAuth} />
            <LoginInput label={'Password'} type={'password'} onChange={updatePassword} />
            <LoginButton disabled={isButtonDisabled} label={'Login'} type={'submit'} size={"large"} />
            <RegisterLinkDiv>
                <H1>Dont have an account sign up here</H1>
                <RegisterButton isRoute={true} label={'Register'} size={"large"} route={'/auth/register'} />
            </RegisterLinkDiv>
        </LoginForm>
    </LoginRoot>)
}

export default Login

