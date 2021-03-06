import React, {useState} from 'react';
import {Card} from 'antd';

const tabList = [
    {
        key: 'tab1',
        tab: '#1',
    },
    {
        key: 'tab2',
        tab: '#2',
    },
];

const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
};


const TradeCard = () => {
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');

    // const onTab1Change = key => {
    //     setActiveTabKey1(key);
    // };
    // const onTab2Change = key => {
    //     setActiveTabKey2(key);
    // };
    return (
        <Card
            style={{width: '100%'}}
            title="Card title"
            extra={<a href="#">More</a>}
            tabList={tabList}
            activeTabKey={activeTabKey1}
            cover={<img alt="example"
                        src="https://lh3.googleusercontent.com/qV-aq07-QcJZmK7oNY_G2yQaYQQ99__v2mIzEakEVPm0slB25ilAqO-0dnp-jpUCKdDSuyoziCwydQXxgZGXTaqjtkLarJ2LTe3X=w600"/>}

        >
            Temple of Ghxsts
        </Card>
    );
};

export default () => <TradeCard/>;
