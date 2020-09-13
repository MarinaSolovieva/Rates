import React from 'react';
import {Layout} from 'antd'

import './App.css';
import RatesContainer from "./Conponenrs/Rates/RatesContainer";

const {Content} = Layout;
const {Header} = Layout;

function App() {
    return (
        <div className="App">
            <Layout >
                <Header className="Header">Rates</Header>
                <Content >   <RatesContainer/>  </Content>
            </Layout>
        </div>
    );
}

export default App;
