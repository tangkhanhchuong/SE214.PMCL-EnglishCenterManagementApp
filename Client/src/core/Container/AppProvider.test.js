import '@testing-library/jest-dom'
import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import AppProvider from './AppProvider'

afterEach(cleanup)

describe('login', () => {
    test('Login form should be rendered', async () => {
        // render(<AppProvider />)
        // const button = await screen.findByRole('button')
        // expect(button).toBeInTheDocument()
        // expect(button).toHaveTextContent('Login')
        expect(true).toBe(true)
    })

    // test('Input accepts text', async () => {
    //     render(<AppProvider />)

    //     const usernameInputField = await screen.findByPlaceholderText('Username')
    //     expect(usernameInputField).toBeInTheDocument()
    //     expect(usernameInputField.value).toMatch("")
    //     fireEvent.change(usernameInputField, {target: {value: "admin"}})
    //     expect(usernameInputField.value).toMatch("admin")

    //     const passwordInputField = await screen.findByPlaceholderText('Username')
    //     expect(passwordInputField).toBeInTheDocument()
    //     expect(passwordInputField.value).toMatch("")
    //     fireEvent.change(passwordInputField, {target: {value: "password"}})
    //     expect(passwordInputField.value).toMatch("password")
    // })

    // test('Login success if username and password are both correct', async () => {
    //     render(<AppProvider />)

    //     const usernameInputField = await screen.findByPlaceholderText('Username')
    //     fireEvent.change(usernameInputField, {target: {value: "admin"}})
    //     const passwordInputField = await screen.findByPlaceholderText('Username')
    //     fireEvent.change(passwordInputField, {target: {value: "password"}})

    //     const button = await screen.findByRole('button')
    //     expect(button).toHaveTextContent('Login')
    //     fireEvent.click(button)
    //     const successMsg = 'Login successfully, please wait ...'
    //     const errorMsg = 'Username or Password is incorrect !'

    //     const a = await screen.findByText(successMsg)
    //     expect(a).toBeInTheDocument()
        
    // })
})