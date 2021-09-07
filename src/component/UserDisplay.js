import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from '@material-ui/core/'
import CardContent from '@material-ui/core/CardContent'



  

export class UserDisplay extends Component {
    
    static propTypes = {
        name: PropTypes.string,
        username: PropTypes.string,
        email: PropTypes.string,
        companyName: PropTypes.string
    }

    render() {
        
        const { name, username, email, companyName } = this.props

        return (
            <Card >
                <CardContent>
                    <p>{ name }</p>
                    <p>{ username }</p>
                    <p>{ email }</p>
                    <p>{ companyName }</p>
                </CardContent>
            </Card>
        )
    }
}