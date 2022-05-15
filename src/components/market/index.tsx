import React from 'react'
import {Row, Space} from 'antd';
import TradeCard from "../info_card/trade_card";
import {SwapOutlined} from '@ant-design/icons';

export default function Market() {
    return (
        <div>
            <Row>
                <Space>
                    <TradeCard/><SwapOutlined/><TradeCard/>
                </Space>
            </Row>
            <br/>
            <Row>
                <Space>
                    <TradeCard/><SwapOutlined/><TradeCard/>
                </Space>
            </Row>
            <br/>
            <Row>
                <Space>
                    <TradeCard/><SwapOutlined/><TradeCard/>
                </Space>
            </Row>
        </div>

    )
}
