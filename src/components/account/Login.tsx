import React from 'react'
import {Alert, Avatar, Button, Image, Spin, Typography} from 'antd';
import {useMetaMask} from "metamask-react";

const {Title} = Typography;
// ref:
// https://github.com/VGLoic/metamask-react
export default function Login() {
    const {status, connect, account, chainId, ethereum} = useMetaMask();
    if (status === "initializing")
        return <Alert
            message=": )"
            description="Synchronisation with MetaMask ongoing..."
            type="info"
        />
    if (status === "unavailable")
        return <Alert
            message=": ("
            description="MetaMask not available"
            type="error"
        />
    if (status === "notConnected")
        return <Button onClick={connect}>Connect to MetaMask</Button>
    if (status === "connecting")
        return <Spin tip="Connecting..."/>
    if (status === "connected") {
        return <div>
            <Avatar size={256}
                    src={<Image src="https://img.seadn.io/files/2e4328385010423e7a9b8598fb35d55d.png?auto=format&w=600"
                    />}/>
            <Title level={2}>kksuei</Title>
            {account}
        </div>
    }
    return null;
}
