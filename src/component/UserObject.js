import React, { Component } from 'react'

import { UserDisplay } from './UserDisplay'

export class UserObject extends Component {
    

    render() {
        const { users } = this.props

        return(

            <div>
            {users.map((user) => {
                return <UserDisplay
                    name={ user.name }
                    username={ user.username }
                    email={ user.email }
                    companyName={ user.companyName } />
            })}
            </div>
            
        )
    }
}