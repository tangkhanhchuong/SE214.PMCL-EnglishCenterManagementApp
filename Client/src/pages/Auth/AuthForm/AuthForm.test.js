import '@testing-library/jest-dom'
import { render, cleanup, screen, fireEvent, act } from '@testing-library/react'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'

import store from "Redux/store"

import AuthForm from './index'

afterEach(cleanup)
jest.mock('axios')

const AuthFormWithProvider = () => <BrowserRouter><Provider store={store}><AuthForm /></Provider></BrowserRouter>

describe('login', () => {
    test('The Login button should be rendered', async () => {
        render(<AuthFormWithProvider />)
        const button = await screen.findByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent('Login')
        expect(true).toBe(true)

        const usernameInputField = await screen.findByPlaceholderText('Username')
        expect(usernameInputField).toBeInTheDocument()
        expect(usernameInputField.value).toMatch("")
        fireEvent.change(usernameInputField, {target: {value: "admin"}})
        expect(usernameInputField.value).toMatch("admin")

        const passwordInputField = await screen.findByPlaceholderText('Username')
        expect(passwordInputField).toBeInTheDocument()
        expect(passwordInputField.value).toMatch("")
        fireEvent.change(passwordInputField, {target: {value: "password"}})
        expect(passwordInputField.value).toMatch("password")
    })

    test('Input fields should accept text changed', async () => {
        render(<AuthFormWithProvider />)

        const usernameInputField = await screen.findByPlaceholderText('Username')
        fireEvent.change(usernameInputField, {target: {value: "admin"}})
        expect(usernameInputField.value).toMatch("admin")

        const passwordInputField = await screen.findByPlaceholderText('Username')
        fireEvent.change(passwordInputField, {target: {value: "password"}})
        expect(passwordInputField.value).toMatch("password")
    })

    test('It should render error message when http request is rejected', async () => {
        render(<AuthFormWithProvider />)
        
        axios.post.mockImplementationOnce(() => Promise.reject())

        await act(async ()=>{
            await userEvent.click(screen.getByRole('button'))
            
        })
        const items = await screen.findByTestId('success-msg')
        expect(items).toHaveTextContent("Username or Password is incorrect !")

    })

    test('It should render success message when http request is resolved', async () => {
        render(<AuthFormWithProvider />)

        const user = {
            token: "122345",
            role_id: "1",
            user_id: "12345",
            username: "levi",
            name: "levi"
        }

        axios.post.mockImplementationOnce(() => Promise.resolve({data: {data: user}}))

        await act(async ()=>{
            await userEvent.click(screen.getByRole('button'))
            
        })
        const items = await screen.findByTestId('success-msg')
        expect(items).toHaveTextContent("Login successfully, please wait ...")
    })
})