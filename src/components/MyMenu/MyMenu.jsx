import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Dropdown, Button, Space } from 'antd';
import logo from '../../assets/imgs/logo.jpg'
import './MyMenu.less'
import api from '../../api/index'


export default class MyMenu extends Component {
  state = {
    cities: [],//城市下拉列表
  }

  // 页面一加载
  componentDidMount() {
    this.getCityList();
  }
  // 获取城市下拉列表
  getCityList() {
    api.getCities().then(res => {
      console.log(res.data.data);
      this.setState({
        cities: res.data.data
      })
    }).catch(err => {
      console.log(err);

    })
  }

  render() {

    const menu = (
      <Menu
        items={[
          {
            key: '1',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="##">
                北京
              </a>
            ),
          },
          {
            key: '2',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="##">
                上海
              </a>
            ),
          },
          {
            key: '3',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="##">
                重庆
              </a>
            ),
          },
        ]}
      />

      // 网络请求数据
      // <Menu.Item>
      // <a target="_blank" rel="noopener noreferrer" href="##">
      // {/* 上海 */}
      // {item.name}
      // </a>
      // </Menu.Item >
    );

    return (
      <div>
        <div className="menu">
          <div className="contaner">
            {/* 左侧 */}
            <div className="left">
              <img src={logo} alt="鲸拍房logo" width={180} height={72} />
              {/* 城市选取 */}
              <Dropdown overlay={menu} placement="bottom">
                <Button>城市</Button>
              </Dropdown>
            </div>
            {/* 右侧 */}
            <div className="right">
              <NavLink exact to={'/'}>首页</NavLink>
              <NavLink to={'/house'}>法拍房源</NavLink>
              <NavLink to={'/news'}>法拍咨询</NavLink>
              <NavLink to={'/success'}>成功案例</NavLink>
              <NavLink to={'/join'}>注册成功</NavLink>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

// import React, { Component } from 'react'
// import './MyMenu.less'

// export default class MyMenu extends Component {
//   render() {
//     return (
//       <div>
//         <div className="menu">
//           <div className="contaner">
//             <div className="left">

//             </div>
//             <div className="right">

//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
