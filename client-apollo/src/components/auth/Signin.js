import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { SIGNIN_USER } from '../../mutations/auth'
import { Mutation } from 'react-apollo'
const initFormLogin = {
    username: '',
    password: ''
}
export default class Signin extends Component {
   constructor(){
       super()
       this.state = {
           ...initFormLogin
       }
   }
   handleChange = $event => {
       const { name, value } = $event.target
       this.setState({
           [name]: value
       })
   }
   onSubmitSignIn = ($event, signInUser) => {
        $event.preventDefault()
        console.log(this.state)
        signInUser()
            .then(({data}) => { localStorage.setItem('token', JSON.stringify(data.signInUser.token));})
            .catch(err => console.log(err))
   }
    render() {
        const { username, password } = this.state
        return (
            <Container>
                <Row>
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Mutation mutation={ SIGNIN_USER } variables={ {username, password} }>
                            {
                                (signInUser, {data, loading, error}) => {
                                    return (
                                        <Form onSubmit={ ($event) => this.onSubmitSignIn($event, signInUser) }>
                                            <FormGroup>
                                            <Label for="exampleEmail">Username</Label>
                                            <Input onChange= { this.handleChange } type="text" name="username" id="exampleEmail" placeholder="Username" />
                                            </FormGroup>
                                            <FormGroup>
                                            <Label for="examplePassword">Password</Label>
                                            <Input onChange= { this.handleChange } type="password" name="password" id="examplePassword" placeholder="Password" />
                                            </FormGroup>
                                            <div align='end'>
                                            <Button>Submit</Button>
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