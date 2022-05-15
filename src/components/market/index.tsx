import React from 'react'
import {Space} from 'antd';
import TradeCard from "../info_card/trade_card";

export default function Market() {
    return (
        <div>
            <Space size={[8, 16]} wrap>
                {new Array(10).fill(null).map((_, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <TradeCard/>
                ))}
            </Space>
        </div>
    )
}
