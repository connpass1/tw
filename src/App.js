
import { Layout, theme } from 'antd';
import React, { useEffect } from "react";
import RouteTable from "./components/RouteTable";
import Map from "./components/Map";
import ErrorMessage from "./components/ErrorMessage";
import { FETCH_POLYlINE_START } from "./reducers"
import { useDispatch } from 'react-redux'

const { Content, Sider } = Layout;

const App = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const dispatch = useDispatch();
    const [route_number, setRoute_number] = React.useState(null)
    useEffect(() => {
        if (route_number !== null) dispatch({ type: FETCH_POLYlINE_START, route_number: route_number })
    }, [dispatch, route_number]);
    return (
        <Layout>
            <Content style={{ padding: '0 10px' }}>
                <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                    <Sider style={{ background: colorBgContainer }} width={500}>
                        <RouteTable route_number={route_number} setRoute_number={setRoute_number} />
                        <ErrorMessage />
                    </Sider>
                    <Content style={{ padding: '0 12px', minHeight: 480 }}>  <Map route_number={route_number} /> </Content>
                </Layout>
            </Content>

        </Layout>
    );
};

export default App;