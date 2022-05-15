import React from 'react'
import {Card} from 'antd';

const {Meta} = Card;
export default function AssertCard() {
    return (
        <Card
            hoverable
            style={{width: 240}}
            cover={<img alt="example"
                        src="https://lh3.googleusercontent.com/qV-aq07-QcJZmK7oNY_G2yQaYQQ99__v2mIzEakEVPm0slB25ilAqO-0dnp-jpUCKdDSuyoziCwydQXxgZGXTaqjtkLarJ2LTe3X=w600"/>}
        >
            <Meta title="Temple of Ghxsts" description="0.115"/>
        </Card>
    )
}
