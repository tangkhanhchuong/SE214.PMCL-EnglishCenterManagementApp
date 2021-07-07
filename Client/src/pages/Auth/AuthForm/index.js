import logo200Image from 'assets/img/logo/logo_200.png'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { useHistory } from 'react-router-dom'
import { useHttpClient } from 'hooks/http-hook'
import { UpdateUserData } from 'Redux/Reducers/UserData/actions'

const FormStatus = {
    DEFAULT: 1,
    LOADING: 2,
    LOGIN_FAIL: 3,
    LOGIN_SUCCESSFULLY: 4,
    REGISTER_SUCCESSFULLY: 5,
    REGISTER_FAIL: 6,
    CONFIRM_PASSWORD_FAIL: 7,
}

const AuthForm = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { sendRequest } = useHttpClient()

    const [formStatus, setFormStatus] = useState(FormStatus.DEFAULT)

    const isLogin = () => {
        return props.authState === STATE_LOGIN
    }

    const isSignup = () => {
        return props.authState === STATE_SIGNUP
    }

    const changeAuthState = authState => event => {
        event.preventDefault()
        props.onChangeAuthState(authState)
    }

    const LoginSuccessfully = async (userData) => {
        const user = userData.data
        localStorage.setItem("userData", JSON.stringify(user))
        dispatch(UpdateUserData({
            token: user.token,
            role_id: user.role_id,
            user_id: user.id,
            username: user.username,
            name: user.name
        }))

        history.push('/')
    }


    const handleSubmit = async event => {
        setFormStatus(FormStatus.LOADING)
        event.preventDefault()

        const username = event.target['username']?.value
        const password = event.target['password']?.value
        const confirmPw = event.target['repassword']?.value
        const authType = isSignup() ? 'signup' : 'login'

        if(isSignup() && password !== confirmPw)  return setFormStatus(FormStatus.CONFIRM_PASSWORD_FAIL)
        
        
        axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/${authType}`, { username, password, email: "khanhchuong@gmail.com" })
            .then((response) => {
                return response.data
            })
            .then((response) => {
                if(authType === 'login') {
                    LoginSuccessfully(response)
                    setFormStatus(FormStatus.LOGIN_SUCCESSFULLY)
                    return
                }
                setFormStatus(FormStatus.REGISTER_SUCCESSFULLY)
            })
            .catch((error) => {
                if(authType === 'login') {
                    setFormStatus(FormStatus.LOGIN_FAIL)
                    return
                }
                setFormStatus(FormStatus.REGISTER_FAIL)
            }) 
    }

    const renderButtonText = () => {
        const { buttonText } = props

        if (formStatus === FormStatus.LOADING)
            return 'Loading...'

        if (!buttonText && isLogin()) {
            return 'Login'
        }

        if (!buttonText && isSignup()) {
            return 'Signup'
        }

        return buttonText
    }

    const {
        showLogo,
        usernameLabel,
        usernameInputProps,
        passwordLabel,
        passwordInputProps,
        confirmPasswordLabel,
        confirmPasswordInputProps,
        children,
        onLogoClick,
    } = props

    return (

        <Form onSubmit={handleSubmit}>
            {showLogo && (
                <div className="text-center pb-4">
                    <img
                        src={logo200Image}
                        className="rounded"
                        style={{ width: 60, height: 60, cursor: 'pointer' }}
                        alt="logo"
                        onClick={onLogoClick}
                    />
                </div>
            )}
            <FormGroup>
                <Label for="username">{usernameLabel}</Label>
                <Input {...usernameInputProps} default="admin" />
            </FormGroup>

            <FormGroup>
                <Label for={passwordLabel}>{passwordLabel}</Label>
                <Input  {...passwordInputProps} default="password" /> 
            </FormGroup>

            {isSignup() && (
                <FormGroup>
                    <Label for="confirm">{confirmPasswordLabel}</Label>
                    <Input {...confirmPasswordInputProps} default="password" />
                </FormGroup>
            )}

            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    {isSignup() ? 'Agree the terms and policy' : 'Remember me'}
                </Label>
            </FormGroup>
            <div data-testid="success-msg">
                {formStatus === FormStatus.LOGIN_FAIL && <><br /><font color="red">Username or Password is incorrect !</font></>}
                {formStatus === FormStatus.LOGIN_SUCCESSFULLY && <><br /><font color="green">Login successfully, please wait ...</font></>}
                {formStatus === FormStatus.REGISTER_SUCCESSFULLY && (
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <br /><font color="green">Your account are created !</font>
                        <Link
                            size="lg"
                            block
                            className="btn btn-primary"
                            to="/login"
                        >
                            Return to login
                        </Link>
                    </div>
                )} 
                {formStatus === FormStatus.CONFIRM_PASSWORD_FAIL && <><br /><font color="red">Password and confirm password are different!</font></>}
                {formStatus === FormStatus.REGISTER_FAIL && <><br /><font color="red">Invalid username or password!</font></>}

            </div>
            <hr />

            <Button
                size="lg"
                className="bg-gradient-theme-left border-0"
                block
                type="submit"
            >
                {renderButtonText()}
            </Button>

            <div className="text-center pt-1">
                <h6>or</h6>
                <h6>
                    {isSignup() ? (
                        <a href="#login" onClick={changeAuthState(STATE_LOGIN)}>
                            Login
                        </a>
                    ) : (
                        <a href="#signup" onClick={changeAuthState(STATE_SIGNUP)}>
                            Signup
                        </a>
                    )}
                </h6>
            </div>

            {children}
        </Form>

    )

}

export const STATE_LOGIN = 'LOGIN'
export const STATE_SIGNUP = 'SIGNUP'

AuthForm.propTypes = {
    authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
    showLogo: PropTypes.bool,
    usernameLabel: PropTypes.string,
    usernameInputProps: PropTypes.object,
    passwordLabel: PropTypes.string,
    passwordInputProps: PropTypes.object,
    confirmPasswordLabel: PropTypes.string,
    confirmPasswordInputProps: PropTypes.object,
    onLogoClick: PropTypes.func,
}

AuthForm.defaultProps = {
    authState: 'LOGIN',
    showLogo: true,
    usernameLabel: 'Username',
    usernameInputProps: {
        name: "username",
        type: 'text',
        placeholder: 'Username',
        required: true
    },
    passwordLabel: 'Password',
    passwordInputProps: {
        name: "password",
        type: 'password',
        placeholder: 'Password',
        required: true
    },
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordInputProps: {
        name: "repassword",
        type: 'password',
        placeholder: 'Confirm your password',
        required: true
    },
    onLogoClick: () => { },
}

export default AuthForm
