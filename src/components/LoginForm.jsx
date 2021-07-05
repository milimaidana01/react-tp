import React from 'react'
import { Input, Button, Card } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import axios from 'axios';

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    sendForm = () => {
        var username = this.state.username
        var password = this.state.password

        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                console.log(persons)
            })
    }

    setUsername = (username) => {
        this.setState({ username: username })
    }

    setPassword = (password) => {
        this.setState({ password: password })
    }

    render() {
        var showError = (this.state.username === '' || this.state.password === '')
    
        return (
            <Card>
                <Input size="large" placeholder="Nombre de usuario" suffix={<UserOutlined />}
                    onChange={(element) => this.setUsername(element.target.value)} value={this.state.username}
                />

                <Input.Password size="large" placeholder="Contraseña"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    style={{ marginTop: 24, marginBottom: 24 }}
                    onChange={(element) => this.setPassword(element.target.value)}
                    value={this.state.password}
                />

                <Button type="primary" size="large" onClick={this.sendForm}>Ingresar</Button>

                {showError && 
                    <div style={{fontSize: this.state.username === '' ? 48 : 24, color: 'red'}}>
                        AMIGO NO INGRESASTE TUS DATOS!!! ERROR ERROR
                    </div>
                }
            </Card>
        )
    }
}

export default LoginForm;
