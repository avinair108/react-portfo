import React from 'react'
import { Text, Container, Form, FormContent, FormH1, FormInput, FormLabel, FormWrap, FormButton, Icon } from './SigninElements'

const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to='/'>
            Avi's Page
            </Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Send me an email//Currently Unavailable, work in progress :(</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignIn