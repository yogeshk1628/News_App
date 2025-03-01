import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-2'>
        <img src={loading} alt="spinner" />
      </div>

    )
  }
}

export default Spinner