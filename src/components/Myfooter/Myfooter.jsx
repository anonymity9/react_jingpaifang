import React, { Component } from 'react'
import footer from '../../assets/imgs/footer.png'
export default class Myfooter extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', backgroundColor: '#4d73b8' }}>
        <img src={footer} alt="" />
      </div>
    )
  }
}
