import axios from 'axios'
import React, { Component } from 'react'
import { Button } from '@material-ui/core'
const api = axios.create({
    baseURL: 'http://localhost:8765/user/getusers'
})
export class SearchButton extends Component {

    state = {
        users: []
    }
    
    _handleClick = () => {
        api.get('/').then(res => {
            this.props.onResults(res.data)
        })
    }

    render() {
        return (
            <Button variant="contained" color="primary" onClick={this._handleClick}>Show Users</Button>
        )
    }
}