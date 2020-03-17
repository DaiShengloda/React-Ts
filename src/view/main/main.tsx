import React from 'react'
import { Layout } from 'antd'
import Navside from './navside/navside'
import Routes from '../../router/routes'
import { getGlobalparams } from '../../service/common'
import './index.scss'

class Main extends React.Component {

    componentDidMount() {
        getGlobalparams()
    }

    render() {
        return(
            <Layout className="main">
                <Layout.Header className="main-header">Header</Layout.Header>
                <Layout className="main-content">
                    <Navside/>
                    <Layout.Content><Routes/></Layout.Content>
                </Layout>
            </Layout>
        )
    }
}

export default Main