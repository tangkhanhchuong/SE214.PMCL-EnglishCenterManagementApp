import logo200Image from 'assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useHttpClient } from 'hooks/http-hook';
import { UpdateUserData } from 'Redux/Reducers/UserData/actions'

const FormStatus = {
    DEFAULT: 1,
    LOADING: 2,
    LOGIN_FAIL: 3,
    LOGIN_SUCCESSFULLY: 4
}

const AuthForm = (props) => {

    const dispatch = useDispatch();
    const { sendRequest } = useHttpClient();

    let [formStatus, setFormStatus] = useState(FormStatus.DEFAULT);

    let isLogin = () => {
        return props.authState === STATE_LOGIN;
    }

    let isSignup = () => {
        return props.authState === STATE_SIGNUP;
    }

    let changeAuthState = authState => event => {
        event.preventDefault();
        props.onChangeAuthState(authState);
    };

    let LoginSuccessfully = async (userData) => {

        const fakeUserData = { ...userData, roleId: 2, userId: 1 }
        localStorage.setItem("userData", JSON.stringify(fakeUserData));
        console.log(userData);
        dispatch(UpdateUserData({
            token: fakeUserData.token,
            roleId: fakeUserData.roleId,
            userId: fakeUserData.userId,
            email: fakeUserData.user.email,
            name: fakeUserData.user.name
        }));
    }

    let handleSubmit = event => {
        setFormStatus(FormStatus.LOADING);
        event.preventDefault();
        let email = event.target["email"].value;
        let password = event.target["password"].value;
        console.log(email, password);
        let authType = isSignup() ? 'signup' : 'login';
        sendRequest(
            `${process.env.REACT_APP_SERVER_BASE_URL}/auth/${authType}`,
            'POST',
            {
                email, password
            },
            {
                'Content-Type': 'application/json'
            }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error("Authentication Failed !!")
                }
            })
            .then((response) => {
                setTimeout(() => LoginSuccessfully(response), 1000);
                setFormStatus(FormStatus.LOGIN_SUCCESSFULLY);
            })
            .catch((error) => {
                console.log(error);
                setFormStatus(FormStatus.LOGIN_FAIL);
            });
    };

    let renderButtonText = () => {
        const { buttonText } = props;

        if (formStatus == FormStatus.LOADING)
            return 'Loading...';

        if (!buttonText && isLogin()) {
            return 'Login';
        }

        if (!buttonText && isSignup()) {
            return 'Signup';
        }

        return buttonText;
    }


    const {
        showLogo,
        emailLabel,
        emailInputProps,
        passwordLabel,
        passwordInputProps,
        confirmPasswordLabel,
        confirmPasswordInputProps,
        children,
        onLogoClick,
    } = props;

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
                <Label for={emailLabel}>{emailLabel}</Label>
                <Input {...emailInputProps} />
            </FormGroup>

            <FormGroup>
                <Label for={passwordLabel}>{passwordLabel}</Label>
                <Input  {...passwordInputProps} />
            </FormGroup>

            {isSignup() && (
                <FormGroup>
                    <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
                    <Input {...confirmPasswordInputProps} />
                </FormGroup>
            )}

            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    {isSignup() ? 'Agree the terms and policy' : 'Remember me'}
                </Label>
            </FormGroup>
            <div>
                {formStatus === FormStatus.LOGIN_FAIL && <><br /><font color="red">Email or Password is incorrect !</font></>}
                {formStatus === FormStatus.LOGIN_SUCCESSFULLY && <><br /><font color="green">Login successfully, please wait ...</font></>}
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

    );

}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
    authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
    showLogo: PropTypes.bool,
    emailLabel: PropTypes.string,
    emailInputProps: PropTypes.object,
    passwordLabel: PropTypes.string,
    passwordInputProps: PropTypes.object,
    confirmPasswordLabel: PropTypes.string,
    confirmPasswordInputProps: PropTypes.object,
    onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
    authState: 'LOGIN',
    showLogo: true,
    emailLabel: 'Email',
    emailInputProps: {
        name: "email",
        type: 'text',
        placeholder: 'Email',
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
};

export default AuthForm;
