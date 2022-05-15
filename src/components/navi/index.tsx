import React, { Component, useState } from 'react'
import { Menu, Typography } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './index.less';

const { Title } = Typography;

export default function Navi() {
    const location = useLocation();

    const [inputValue, setInputValue] = useState("explore");

    return (
        <div>
            <div className="logo">
                <Title level={1} italic={true} className="neonText" >neoLithic</Title>
            </div>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={["market"]}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="market" onClick={() => setInputValue("explore")}>
                    <Link to="/market">Explore Market</Link>
                </Menu.Item>
                <Menu.Item key="transactions">
                    <Link to="/transactions">My Transactions</Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link to="/account">My Account</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about">About</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

