import React, { Component } from 'react'
import MyMenu from '../components/MyMenu/MyMenu'
import Myfooter from '../components/Myfooter/Myfooter'

export default class layout extends Component {
  render() {
    return (
      <div>
        {/* 顶部导航 */}
        <div>
          <MyMenu />
        </div>

        <div>
          {/* 路由出口 */}
          {this.props.children}
        </div>

        {/* 底部区域 */}
        <div>
          <Myfooter />
        </div>
      </div>
    )
  }
}
