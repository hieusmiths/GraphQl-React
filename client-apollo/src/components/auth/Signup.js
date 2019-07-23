import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col, Alert } from 'reactstrap';
import { Mutation } from 'react-apollo'
import React, { Component } from 'react'

import { SIGNUP_USER } from './../../mutations/auth'

const initForm = {
    email: '',
    username: '',
    password: '',
    passwordConfirm: ''
}
// clear form = this.setState({...initForm})
export default class Signup extends Component {
        state = {
            ...initForm
        }
    handleChange = $event => {
        const value = $event.target.value
        const name = $event.target.name
        this.setState({
            [name]: value
        })
    }
    onSubmitSignup = ($event, singupUser ) => {
        $event.preventDefault()
        singupUser()
            .then(data => console.log(data))
            .catch()
    }

    validateForm  = () => {
        const {  email, username, password, passwordConfirm } = this.state
        const isMatchPassword = password !== passwordConfirm
        const isValid  = !username || !email || !password || !passwordConfirm || isMatchPassword
        return isValid
    }

    render() {
        const {  email, username, password } = this.state
        return (
            <Container>
                <Row>
                    <Col sm={{ size: 66, offset: 3 }}>
                        <Mutation mutation={ SIGNUP_USER } variables={{ email, username, password }}>
                            {
                                (singupUser, {data, loading, error}) => {
                                    return (
                                        <Form onSubmit={ $event => this.onSubmitSignup($event, singupUser) }>
                                            <FormGroup>
                                            <Label >Username</Label>
                                            <Input onChange={ this.handleChange } type="text" name="username" id="exampleEmail" placeholder="Username" />
                                            </FormGroup>
                                            <FormGroup>
                                            <Label >email</Label>
                                            <Input onChange={ this.handleChange } type="email" name="email" id="exampleEmail2" placeholder="Email" />
                                            </FormGroup>
                                            <FormGroup>
                                            <Label >Password</Label>
                                            <Input onChange={ this.handleChange } type="password" name="password" id="examplePassword" placeholder="Password " />
                                            </FormGroup>
                                            <FormGroup>
                                            <Label >Password confirm</Label>
                                            <Input onChange={ this.handleChange } type="password" name="passwordConfirm" id="examplePassword2" placeholder="Password confirm" />
                                            </FormGroup>
                                            <div align='center'>
                                            <Button disabled= { loading || this.validateForm() } type='submit'>Submit</Button>
                                            { error && <Alert color="dark">{error.message} </Alert>}
                                            </div>
                                        </Form>
                                    )
                                }
                            }
                        </Mutation>
                    </Col>
                </Row>
            </Container>
        )
    }
}