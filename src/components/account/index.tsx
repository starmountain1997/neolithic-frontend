import './index.less';
import {Menu, Space, Typography} from 'antd';
import {Link, Outlet} from "react-router-dom";
import Login from "./Login";

const {Title} = Typography;


export default function Account() {
    return (
        <div>
            <Space direction='vertical' size="middle" style={{display: 'flex'}}>
                <Login/>
                <Menu mode="horizontal">
                    <Menu.Item key="gallery">
                        <Link to="/account/gallery">Gallery</Link>
                    </Menu.Item>
                    <Menu.Item key="stars">
                        <Link to="/account/stars">Stars</Link>
                    </Menu.Item>
                    <Menu.Item key="messages">
                        <Link to="/account/messages">Messages</Link>
                    </Menu.Item>
                    <Menu.Item key="settings">
                        <Link to="/account/settings">Settings</Link>
                    </Menu.Item>
                </Menu>
                <Outlet/>
            </Space>


        </div>
    )
}
