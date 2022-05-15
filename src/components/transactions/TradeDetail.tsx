import React from "react";
import {Button, Col, Layout, Row, Space, Timeline} from 'antd';
import TradeCard from "../info_card/trade_card";

const {Header, Footer, Sider, Content} = Layout;
export default function TradeDetail() {
    return (
        <Row>

            <Col span={12}>
                <Timeline pending="等待Taker签名">
                    <Timeline.Item>创建订单 2015-09-01</Timeline.Item>
                    <Timeline.Item>Maker订单签名 2015-09-01</Timeline.Item>
                </Timeline>

                <Space>
                    <Button type="primary">修改订单</Button>
                    <Button type="primary">取消订单</Button>
                </Space>
            </Col>
            <Col span={12}>
                <TradeCard/>
                <br/>
                <TradeCard/>
            </Col>
        </Row>
    )
}
