import React, { Component } from 'react'
import style from './House.module.less'
import house from '../../assets/imgs/house.png'
import Mypagination from '../../components/Mypagination/Mypagination'
import api from '../../api'

export default class House extends Component {
  // 
  state = {
    houseData: {
      total: 1105,
    },//默认数据
  }

  componentDidMount() {
    this.loadHouseList(0);
  }

  // 
  loadHouseList = (pageNo) => {
    api.getHouse({
      auctionStageId: [],
      auctionStatusId: [],
      auctionType: [],
      businessCircleIds: [],
      city: 110100,
      houseTypeId: [],
      keyword: "",
      limitBuy: [],
      pageNo: pageNo,
      pageSize: 21,
      room: [],
      sortId: 1,
      subwayStationIds: [],
    }).then(res => {
      console.log('house==', res.data.data);
      this.setState({
        houseData: res.data.data
      })
    }).catch(err => {
      console.log(err);
    })
  }
  /**
   * 父组件接收子组件传过来的页码
   * 
   */
  getPageNo = (pageNo) => {
    // console.log('父组件接收子组件传过来的页码', pageNo);
    this.loadHouseList(pageNo);
  }


  render() {
    return (
      <div>
        {/* 1.选择 */}
        <div className={style.w}>
          <img src={house} alt="" />
          {/* 2.列表渲染 */}
          <div className={style.content}>

          </div>

          {/* 分页组件 */}
          <Mypagination total={this.state.houseData.total} pageSize={20} getPage={this.getPageNo} />
        </div>
      </div>
    )
  }
}
