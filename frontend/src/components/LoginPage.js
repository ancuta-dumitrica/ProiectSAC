import React, {Component} from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import './LoginPage.css'
import {post} from "../data/DataUtils";
import {withRouter} from "react-router";

class LoginPage extends Component {

    constructor(props) {
        super(props);

        if (localStorage.getItem('userId')) {
            props.history.push('/allBooks')
        }

        this.state = {
            username: "",
            password: ""
        };
    }

    handleClick = event => {
        event.preventDefault();

        post("login", {"username": this.state.username,
            "password": this.state.password}).then(response => {
            localStorage.setItem('userId', response.OK);
            this.props.history.push('/allBooks')
            this.setState({user: response.OK,
                error: response.error
            })
        });

    };

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    render() {
        return (
            <div className='login-form'>
                <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Log-in to your account
                        </Header>
                        <Form size='large' onSubmit={this.handleClick}>
                            <Segment stacked>
                                <Form.Input
                                    id = 'username'
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                                <Form.Input
                                    id = 'password'
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                <Button
                                    disabled={!this.validateForm()}
                                    color='teal'
                                    fluid
                                    size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default withRouter(LoginPage);