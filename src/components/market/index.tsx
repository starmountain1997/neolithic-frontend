import React from 'react'
import {Row, Space} from 'antd';
import TradeCard from "../info_card/trade_card";

export default function Market() {
    return (
        <Row>
            <Space>
                <TradeCard/>
            </Space>
            <Space size={[8, 16]} wrap>
                {new Array(10).fill(null).map((_, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <TradeCard/>
                ))}
            </Space>
        </Row>

    )
}
