import {Col, DatePicker, Input, Row, Select, Typography} from 'antd';
import AssertCard from "../info_card/assert_card";

const {Title} = Typography;
const {Option} = Select;

export default function NewTrade() {
    return (
        <div>
            <Row>
                <Col span={12}>
                    <Title>I have...</Title>
                    <AssertCard/>
                    <AssertCard/>
                </Col>
                <Col span={12}>
                    <Title>I want...</Title>
                    <AssertCard/>
                    <Title>From:</Title>
                    <Select defaultValue="lucy" style={{width: 120}}>
                        <Option value="jack">ANYONE</Option>
                        <Option value="lucy">Specific Address</Option>
                    </Select>
                    <br/> <br/>
                    <Input placeholder="请输入地址"/>
                </Col>
            </Row>
            <Row>
                <Title>截止: </Title>
                <br/> <br/>
                <DatePicker showTime/>
            </Row>
        </div>
    )
}
