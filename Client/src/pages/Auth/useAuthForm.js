
export const FormStatus = {
    DEFAULT: 1,
    LOADING: 2,
    LOGIN_FAIL: 3,
    LOGIN_SUCCESSFULLY: 4
}

export const handleSubmit = (username, password, isSignup) => (e) => {
    setFormStatus(FormStatus.LOADING)
    e.preventDefault()
    const authType = isSignup() ? 'signup' : 'login'
    sendRequest(
        `${process.env.REACT_APP_SERVER_BASE_URL}/auth/${authType}`,
        'POST',
        {
            username, password
        },
        {
            'Content-Type': 'application/json'
        }
    )
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw Error("Authentication Failed !!")
            }
        })
        .then((response) => {
            setTimeout(() => LoginSuccessfully(response), 1000)
            setFormStatus(FormStatus.LOGIN_SUCCESSFULLY)
        })
        .catch((error) => {
            setFormStatus(FormStatus.LOGIN_FAIL)
        })
}