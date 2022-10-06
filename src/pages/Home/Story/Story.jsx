import React, { Component } from 'react'
//动态样式
import style from './Story.module.less'
// 静态样式
// import './Story.less'
import loge from '../../../assets/imgs/logo.jpg'

export default class Story extends Component {
    render() {
        console.log('Story------------', this.props.story);
        return (
            <>
                {/* <ul className={style.list}>
                    {
                        this.props.story.map(item => {
                            return (
                                <li className={style.item} key={item.informationId}>
                                    <h2 className={style.title}>
                                        {item.title}
                                    </h2>
                                    <div className={style.content}>
                                        <img src={item.picture} alt="" />
                                        <div className={style.right}>
                                            <div className={style.desc}>

                                                {item.subject}

                                            </div>
                                            <div className={style.time}>
                                                {item.publishTime}
                                            </div>
                                        </div>
                                    </div>

                                </li>
                            )
                        })
                    }


                </ul> */}

                {/* 静态模板 */}
                <ul className={style.list}>
                    <li className={style.item}>
                        <h2 className={style.title}>
                            [法拍房真实案例]遗留物品占据房屋,被执行人失联多日!
                        </h2>
                        <div className={style.content}>
                            <img src={loge} alt="" />
                            <div className={style.right}>
                                <div className={style.desc}>
                                    首先从权利保护角度来看，司法法拍房产的购买是非常安全的，买受人通过法拍途径，将购房款打给法院，确认成交后，法院出具裁定书，据裁定书，买受人获得物权，并可据裁定书来办理房产证。很多人在关注会不会办不下来房产证，这种可能性不高，物权法规定，生效裁判文书就是物权凭证。法院出具的裁定书，就是物权凭证，权利是高于前一手房产证的，即便有些地方办理新房产证中办证机关设置一定的障碍，最终还是能够办证的。同时看，法拍房的价格，往往会低于同地段的二手房成家价格，很多地区都是低于10%-30%。
                                </div>
                                <div className={style.time}>
                                    2022-07-02
                                </div>
                            </div>
                        </div>

                    </li>

                </ul>


            </>
        )
    }
}

