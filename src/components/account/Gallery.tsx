import React from 'react'
import {Button, Card, Pagination, Space} from 'antd';
import AssertCard from "../info_card/assert_card";

const {Meta} = Card;
export default function Gallery() {
    return (
        <div>
            <Space size={[8, 16]} wrap>
                {new Array(3).fill(null).map((_, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <AssertCard/>
                ))}
            </Space>
            <Button type="primary">从OpenSea导入</Button>
            <Button type="primary">从地址导入</Button>
            <Pagination defaultCurrent={1} total={50}/>
        </div>
    )
}
