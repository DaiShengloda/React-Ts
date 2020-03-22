import React from 'react'
import { Layout } from 'antd'
import Navside from './navside/navside'
import Header from './header/header'
import Routes from '../../router/routes'
import { getGlobalparams } from '../../service/common'
import './index.scss'
import { setGlobalState } from '../../store/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state: any) => {
    return {}
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setGlobalState(data: {}) {
            dispatch(setGlobalState(data))
        },
    }
}

interface P {
    setGlobalState: (data: {}) => void
}
class Main extends React.Component<P, object> {
    constructor(props: P) {
        super(props)
    }

    componentDidMount() {
        getGlobalparams().then((res: any) => {
            this.props.setGlobalState(res)
        })
    }

    render() {
        return(
            <Layout className="main">
                <Layout.Header className="main-header"><Header/></Layout.Header>
                <Layout className="main-content">
                    <Navside/>
                    <Layout.Content><Routes/></Layout.Content>
                </Layout>
            </Layout>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)