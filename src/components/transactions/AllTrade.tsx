import React from 'react'
import {List} from 'antd';
import {SwapOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

const data = [
    {
        maker: 'ME!',
        taker: '0x33d5373286CDe5819ab92b9bf9B30BC7E247F397',
        content: 'KaijuKing #6111 ←→ 1 wETH'
    },
    {
        maker: 'ME!',
        taker: '0x33d5373286CDe5819ab92b9bf9B30BC7E247F397',
        content: 'KaijuKing #6111 ←→ 1 wETH'
    },
    {
        taker: 'ME!',
        maker: '0x33d5373286CDe5819ab92b9bf9B30BC7E247F397',
        content: 'KaijuKing #6111 ←→ 1 wETH'
    },
    {
        maker: 'ME!',
        taker: '0x33d5373286CDe5819ab92b9bf9B30BC7E247F397',
        content: 'KaijuKing #6111 ←→ 1 wETH'
    },
];

export default function AllTrade() {
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={<a href="https://ant.design">{item.maker} <SwapOutlined/> {item.taker}</a>}
                        description="2018-10-21 19:21:11 processing"/>
                    <Link to="/detail">Detail</Link>
                </List.Item>
            )}
        />
    )
}
