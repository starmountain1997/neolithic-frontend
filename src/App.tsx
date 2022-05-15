import {Layout} from 'antd';
import './App.less';
import Navi from './components/navi';
import {Outlet} from "react-router-dom";
import PageFooter from "./components/footer";

const {Header, Footer, Content} = Layout;

function App() {
    return (
        <Layout>
            <Header style={{position: 'fixed', zIndex: 1, width: '100%', background: '#fff'}}>
                <Navi/>
            </Header>
            <Content style={{padding: '0 25px', marginTop: 64}}>
                <div style={{background: '#fff', padding: 24, marginTop: 25, minHeight: 380}}>
                    <Outlet/>
                </div>
            </Content>
            <PageFooter/>
        </Layout>
    );
}

export default App;
