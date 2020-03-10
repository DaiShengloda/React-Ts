import React from 'react'
import { Layout } from 'antd'
import Navside from './navside/navside'
import Routes from '../../router/routes'
import { getGlobalparams } from '../../service/common'

class Main extends React.Component {

    componentDidMount() {
        getGlobalparams()
    }

    render() {
        return(
            <Layout>
                <Layout.Sider>
                    <Navside/>
                </Layout.Sider>
                <Layout.Content>
                    <Routes/>
                </Layout.Content>
            </Layout>
        )
    }
}

export default Main