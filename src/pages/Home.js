import React, { Component } from 'react'
import { SearchButton } from '../component/SearchButton'
import { UserObject } from '../component/UserObject'
export class Home extends Component {
    state = { result: [], usedButton: false }

    _handleResult = (result) => {
        this.setState({ result, usedButton: true })
    }

    _renderResult() {
        return <UserObject users={this.state.result} />
        
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.usedButton
                        ? <p></p>
                        : <SearchButton onResults={ this._handleResult }/> }
                </div>
                {this.state.usedButton
                    ? this._renderResult()
                    : <small></small>}
            
            </div>

            
        )
    }
}