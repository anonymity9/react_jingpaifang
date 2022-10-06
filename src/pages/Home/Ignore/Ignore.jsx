import React, { Component } from 'react'
import logo from '../../../assets/imgs/logo.jpg'
import './Ignore.less'

export default class Ignore extends Component {
  render() {
    console.log('接受父组件传递过来的数据：', this.props.ignore);
    return (
      <>

        <ul className="list">
          {/* 获取动态数据 */}
          {/* {
            this.props.ignore.map(item => {
              return (
                <li className='item' key={item.uniqueId}>
                  <div className="icon">
                    拍卖中
                  </div>
                  <img src={item.picture} alt="" width={290} height={220} />
                  <div className="info">
                    <div className="th">
                      {item.houseLocation} {item.shortTitle}
                    </div>
                    <div>{item.floorArea}㎡ | {item.orientation} | {item.roomHall}</div>
                    <div className="money">
                      起拍价 <span className='num'>{item.startPrice / 10000}万 </span>
                      市场价 <span>{item.marketPrice / 10000}万</span>
                    </div>
                    <div className="tags">
                      <span>{item.discount}</span>
                      <span>{item.auctionStageValue}</span>
                      <span>{item.houseType}</span>
                    </div>
                    <ul className="time">
                      <li>{item.auctionStageValue}</li>
                      <li>{item.startTime} 结束</li>
                    </ul>
                  </div>
                </li>
              )
            })
          } */}

          {/* 获取静态数据 */}
          <li className="item">
            <div className="icon">
              拍卖中
            </div>
            <img src={logo} alt="" width={290} height={220} />
            <div className="info">
              <div className="th">
                西城区 富卓大厦 2董7层28号
              </div>
              <div>136.19m^2 | 南 | 1室0厅</div>
              <div className="money">
                起拍价 <span className="num">200万</span>
                市场价 <span>300万</span>
              </div>
              <div className="tags">
                <span>5.4折</span>
                <span>二拍</span>
                <span>商业</span>
              </div>
              <ul className="time">
                <li>二拍</li>
                <li>2022-04-14 12:00 结束</li>
              </ul>
            </div>
          </li>

          <li className="item">
            <div className="icon">
              拍卖中
            </div>
            <img src={logo} alt="" width={290} height={220} />
            <div className="info">
              <div className="th">
                西城区 富卓大厦 2董7层28号
              </div>
              <div>136.19m^2 | 南 | 1室0厅</div>
              <div className="money">
                起拍价 <span className="num">200万</span>
                市场价 <span>300万</span>
              </div>
              <div className="tags">
                <span>5.4折</span>
                <span>二拍</span>
                <span>商业</span>
              </div>
              <ul className="time">
                <li>二拍</li>
                <li>2022-04-14 12:00 结束</li>
              </ul>
            </div>
          </li>

          <li className="item">
            <div className="icon">
              拍卖中
            </div>
            <img src={logo} alt="" width={290} height={220} />
            <div className="info">
              <div className="th">
                西城区 富卓大厦 2董7层28号
              </div>
              <div>136.19m^2 | 南 | 1室0厅</div>
              <div className="money">
                起拍价 <span className="num">200万</span>
                市场价 <span>300万</span>
              </div>
              <div className="tags">
                <span>5.4折</span>
                <span>二拍</span>
                <span>商业</span>
              </div>
              <ul className="time">
                <li>二拍</li>
                <li>2022-04-14 12:00 结束</li>
              </ul>
            </div>
          </li>

          <li className="item">
            <div className="icon">
              拍卖中
            </div>
            <img src={logo} alt="" width={290} height={220} />
            <div className="info">
              <div className="th">
                西城区 富卓大厦 2董7层28号
              </div>
              <div>136.19m^2 | 南 | 1室0厅</div>
              <div className="money">
                起拍价 <span className="num">200万</span>
                市场价 <span>300万</span>
              </div>
              <div className="tags">
                <span>5.4折</span>
                <span>二拍</span>
                <span>商业</span>
              </div>
              <ul className="time">
                <li>二拍</li>
                <li>2022-04-14 12:00 结束</li>
              </ul>
            </div>
          </li>
          {/* 静态测试结束 */}

        </ul>
      </>
    )
  }
}
