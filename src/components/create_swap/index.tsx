import {Button, Pagination, Select, Space, Typography} from 'antd';
import AssertCard from "../info_card/assert_card";
import React from "react";
import {Link} from "react-router-dom";

const {Title} = Typography;
const {Option} = Select;

export default function CreateSwap() {
    return (
        <div>
            <Space size={[8, 16]} wrap>
                {new Array(3).fill(null).map((_, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <AssertCard/>
                ))}
            </Space>
            <Pagination defaultCurrent={1} total={50}/>
            <Button type="primary"> <Link to="/new_trade">新增交易</Link></Button>
        </div>
    )
}
