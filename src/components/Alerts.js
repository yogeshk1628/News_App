import React, { Component } from 'react'

export class Alerts extends Component {
  render() {
    let {alert} = this.props;
    return (
      <div>
        {this.props.alert && <div className="alert alert-primary">
            <strong>{alert.st}</strong> : {alert.msg} 
        </div>}
      </div>
    )
  }
}

export default Alerts